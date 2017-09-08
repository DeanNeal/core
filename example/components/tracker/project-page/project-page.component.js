import {Component, Http, Router} from 'framework/core';
import Tpl from './project-page.component.html';
import TasksStore from 'stores/tasks.store';
import ProjectsStore from 'stores/projects.store';
import NotificaitonsStore from 'stores/notifications.store';
import ModalsStore from 'stores/modals.store';
export class ProjectPageComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        let project = ProjectsStore.getProjectByName(this.props.get('id'))[0];
        if (project) {
            this.props.set(project);
        } else {
            this.props.set('id', null);
        }
    }


    onDestroy() {

    }

    delete() {
        ModalsStore.open('confirm', {
            success: () => {
                ProjectsStore.remove(this.props.id);
                NotificaitonsStore.show({text: `Project #${this.props.get('id')} has been deleted`});
                Router.navigate(`tracker`);
            }
        },);
    }

    submit(e) {
        e.preventDefault();

        ProjectsStore.save(this.props._data);
        NotificaitonsStore.show({text: `Changes has been saved`});
    }
}