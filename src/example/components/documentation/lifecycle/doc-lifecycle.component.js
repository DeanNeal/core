import { Component } from '../../../../core';
import Tpl from './doc-lifecycle.component.html';
// import ProjectsStore from 'store/projects.store';
export class DocLifecycleComponent extends Component {
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