import {Component, Plugins, Decorators} from '../../../core';
import Tpl from './plugins.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-plugins',
    template: Tpl
})
export class PluginsComponent {
    constructor(options) {

    }

    onInit() {

        this.props.set({plugins: [{
            name: 'Sortable',
            route: 'plugins/sortable'
        }, {
            name: 'Chart',
            route: 'plugins/chart'
        }]});


    }
}