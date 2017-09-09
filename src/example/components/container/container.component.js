import {Component, Router, Http} from 'core';
import Tpl from './container.component.html';

export class ContainerComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
		// Http.getCatalog('/catalog');
    }
}
