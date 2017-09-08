import { Component } from 'framework/core';
//import Style from './day.component.scss';
import Tpl from './day.component.html';

export class ScaleDayComponent extends Component {
    constructor(params) {
        super(params, {
            selector: 'app-scale-day',
            template: Tpl
                //styles: Style
        });
    }
    onInit() {
        this.root.innerHTML = this.props.get('title');

        if (this.props.get('holiday')) {
            this.root.classList.add('holiday');
        }

        if (this.props.get('today')) {
            this.root.classList.add('today');
        }
    }
    // onUpdate() {

    // }
}
