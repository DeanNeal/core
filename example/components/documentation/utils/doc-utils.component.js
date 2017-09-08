import {Component} from 'framework/core';
import Tpl from './doc-utils.component.html';
// import ProjectsStore from 'store/projects.store';
export class DocUtilsComponent extends Component {
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