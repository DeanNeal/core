import {Component, Router, Http} from 'core';
import Tpl from './root.component.html';

export class RootComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
		// Http.getCatalog('/catalog');
    }
}
