import { Component } from 'framework/core';
import Tpl from './sidebar.component.html';

export class SidebarComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onAttach() {

    }
}
