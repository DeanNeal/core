import {Component} from '../../core';
import Tpl from './not-found.component.html';

export class NotFoundComponent extends Component {
    constructor(options) {
        super(options, {
            template: Tpl
            // shadow: true
        });
    }
}
