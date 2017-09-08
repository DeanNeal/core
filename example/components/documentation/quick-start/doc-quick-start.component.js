import {Component} from 'framework/core';
import Tpl from './doc-quick-start.component.html';
// import ProjectsStore from 'store/projects.store';
export class DocQuickStartComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {

    }

    onDestroy() {

    }
}