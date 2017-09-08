import { Component, Router} from 'framework/core';
import Tpl from './project-preview.component.html';
import ProjectsStore from 'stores/projects.store';
export class FinancesProjectComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {

    }

    // goToGantt() {
    // 	Router.navigate(`gantt`);
    // }

    onDestroy() {
       
    }
}