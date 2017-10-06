import {Component, Plugins} from '../../../core';
import Tpl from './controls.component.html';

export class ControlsComponent extends Component {
    constructor(options) {
        super(options, {
            template: Tpl
        });
    }

    onInit() {
        this.props.set({controls: [{
            name: 'Datepicker',
            route: 'controls/datepicker'
        }],

            date: new Date()
        });

    }
}