import {Component} from 'framework/core';
import Tpl from './month.component.html';

export class ScaleMonthComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl,
            hostStyles: {
                width: {value: 'props.width', suffix: 'px'}
            }
        });
    }

    onInit() {
        this.root.innerHTML = this.props.get('title');
    }

    onUpdate() {

    }
}
