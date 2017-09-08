import { Component, Router} from 'framework/core';
import Tpl from './list-item.component.html';
import ProjectsStore from 'stores/projects.store';
import ModalsStore from 'stores/modals.store';

export class SidebarListItemComponent extends Component {
    constructor(params) {
        super(params, {
            selector: 'app-sidebar-list-item',
            template: Tpl,
            hostEvents: {
                click: 'rootClick'
            },
            hostClasses: {
                selected: 'props.selected',
                hidden: '!props.visible'
            }
        });
    }
    onInit() {

    }

    rootClick() {
        ProjectsStore.selectItem(this.props.get('id'));
    }

    onUpdate() {

    }

    openInfo(e) {
        e.stopPropagation();
        ModalsStore.open('project-edit', this.props._data);
    }
}
