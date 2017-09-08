import { Component, Router} from 'framework/core';
// import Style from './projects.component.scss';
import Tpl from './task.component.html';
import TasksStore from 'stores/tasks.store';
import ModalsStore from 'stores/modals.store';
import NotificaitonsStore from 'stores/notifications.store';
export class TaskPreviewComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl,
            // styles: Style
        });
    }

    onInit() {
        if(new Date(this.props.get('due_date')).getTime() < new Date().getTime() ){
            this.props.set('overdue', true);
        }
    }

    goToSingleProject() {
        Router.navigate(`project/${this.props.projectId}`);
    }

    goToSingleTask() {
        Router.navigate(`task/${this.props.id}`);
    }

    toggleMenu() {
        this.props.set('showMenu', !this.props.get('showMenu'));
    }

    edit() {
        ModalsStore.open('task-edit', this.props._data);
    }

    removeItem() {
        ModalsStore.open('confirm', {
            success:()=>{
                NotificaitonsStore.show({text: `Task <b>#${this.props.get('id')}</b> has been removed`});
                TasksStore.remove(this.props.id);
            }
        });
    }
}
