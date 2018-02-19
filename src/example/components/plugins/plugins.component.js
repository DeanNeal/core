import { Component, Plugins, Decorators } from '../../../core';
import Tpl from './plugins.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-plugins',
    template: Tpl,
    props: () => {
        return {
            plugins: [{
                name: 'Sortable',
                route: 'plugins/sortable'
            }, {
                name: 'Chart',
                route: 'plugins/chart'
            }]
        }
    }
})
export class PluginsComponent {
    constructor(options) {

    }

    onInit() {



    }
}