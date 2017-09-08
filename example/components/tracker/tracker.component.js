import {Component, Http, Utils} from 'framework/core';
import Tpl from './tracker.component.html';
import TasksStore from 'stores/tasks.store';
import ProjectsStore from 'stores/projects.store';
import ModalsStore from 'stores/modals.store';
export class TrackerComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        let headerLinks = [
            {name: 'Id', id: 'id', active: true},
            {name: 'Project', id: 'project'},
            {name: 'Name', id: 'name'},
            {name: 'Status', id: 'status'},
            {name: 'Assignee', id: 'assignee'},
            {name: 'Due date', id: 'due_date'}
        ];
        this.props.set({items: [], headerLinks});
        this.setSubscriptions(
            TasksStore.tasks.sub(tasks => {
                this.props.set({'items': tasks});
            }),

            ProjectsStore.projects.sub(projects => {
                this.props.set('projectsLength', projects.filter(item => item.visible).length);
                if (projects.filter(item => item.visible).length === 0) {
                    this.props.set({items: []});
                } else {
                    let proj = projects.filter(item => item.selected)[0];
                    if (proj) {
                        let tasks = TasksStore.getTasksByName(proj.id);
                        this.props.set({'items': tasks});
                    } else {
                        this.props.set({'items': TasksStore.tasks._data});
                    }
                }
            })
        );
    }

    changeSort(e, params) {
        let headerLinks = Utils.changeSortingId(this.props.get('headerLinks'), params);
        let items = Utils.sorting(this.props.get('items'), {type: 'string', id: params.id});
        this.props.set({'headerLinks': headerLinks, items});
    }

    addTask(e) {
        e.stopPropagation();
        ModalsStore.open('task-create', this.props._data);
    }

    onDestroy() {

    }
}