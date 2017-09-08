import { Component } from 'framework/core';
import Tpl from './doc-component.component.html';
// import ProjectsStore from 'store/projects.store';
export class DocComponentComponent extends Component {
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