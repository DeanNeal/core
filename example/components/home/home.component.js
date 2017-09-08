import {Component, Router} from 'framework/core';
import Tpl from './home.component.html';

export class HomeComponent extends Component {
    constructor(params) {
        super(params, {
            selector: 'app-home',
            template: Tpl
            // shadow: true
        });
    }

    onAttach() {

    }

    join() {
    	// Router.navigate('dashboard');
    }
}
