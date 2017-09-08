import {Component, Http} from 'framework/core';
import Tpl from './task-page.component.html';
import TasksStore from 'stores/tasks.store';
import ProjectsStore from 'stores/projects.store';
import NotificaitonsStore from 'stores/notifications.store';
export class TaskPageComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        let task = TasksStore.getTasksByName(this.props.get('id'))[0];
        if (task) {
            this.props.set(task);
        }
    }


    onDestroy() {

    }


    // attach() {
    //     let target = this.ui.file;
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         if (target.files[0].type.indexOf('image') > -1) {
    //             // this.model.file = e.target.result;
    //             let files = this.props.get('files');
    //             files.push({img: e.target.result, name: target.files[0].name});
    //             this.props.set('files', files)
    //         } else {
    //             // delete this.model.file;
    //         }
    //         // this.model.fileName = target.files[0].name;
    //     };

    //     if (target.files.length) {
    //         reader.readAsDataURL(target.files[0]);
    //     }
    // }

    // removeFile(e, data) {
    //     e.stopPropagation();
    //     let a = this.props.get('files').filter(item => item.name !== data.name);
    //     this.props.set('files', a);
    // }


    submit(e) {
        e.preventDefault();

        TasksStore.save(this.props._data);
        NotificaitonsStore.show({text: `Changes has been saved`});
    }
}