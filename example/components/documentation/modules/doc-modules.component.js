import {Component} from 'framework/core';
import Tpl from './doc-modules.component.html';
// import ProjectsStore from 'store/projects.store';
export class DocModulesComponent extends Component {
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