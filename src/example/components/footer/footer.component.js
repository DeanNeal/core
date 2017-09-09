import {Component} from '../../core';
import Tpl from './footer.component.html';
 
export class FooterComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }
}