import {Component, Router} from 'core';
import Tpl from './container.component.html';

export class ContainerComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onAttach() {

    }
}
