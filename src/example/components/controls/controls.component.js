import { Component, Plugins, Decorators } from '../../../core';
import Tpl from './controls.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-controls',
    template: Tpl
})
export class ControlsComponent {
    constructor(options) {

    }

    onInit() {
        this.props.set({
            controls: [{
                name: 'Datepicker',
                route: 'controls/datepicker'
            }],

            date: new Date()
        });

    }
}