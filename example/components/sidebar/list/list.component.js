import {Component} from 'framework/core';
//import Style from './day.component.scss';
import Tpl from './list.component.html';
import ProjectsStore from 'stores/projects.store';

export class SidebarListComponent extends Component {
    constructor(params) {
        super(params, {
            selector: 'app-sidebar-list',
            template: Tpl
            //styles: Style
        });
        //this.subs = {};
    }

    onAttach() {

    }

    onInit() {
        this.setSubscriptions(
            ProjectsStore.projects.sub(projects => {
                this.props.set({'items': projects, ifNoResults: projects.filter(item => item.visible).length});
            })
        );
    }


    removeItem(data) {
        // this.props.remove('items', id);
        // this.tasks.setModel(data.id, 'title', data.value);
    }

    onDestroy() {

    }
}
