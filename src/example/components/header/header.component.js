import {Component, Router} from '../../../core';
import Tpl from './header.component.html';
// import ProjectsStore from 'stores/projects.store';
// import UserStore from 'stores/user.store';
export class HeaderComponent extends Component {
    constructor(params) {
        super(params, {
            selector: 'app-header',
            template: Tpl
        });
    }

    onInit() {
        this.props.set('value', '');
    }

    onDestroy() {

    }
}