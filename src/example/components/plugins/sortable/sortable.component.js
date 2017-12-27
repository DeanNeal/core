import {Component, Plugins, Decorators} from '../../../../core';
import Tpl from './sortable.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-plugins-sortable',
    template: Tpl
})
export class PluginsSortableComponent {
    constructor(options) {

    }

    onInit() {
        Plugins.Sortable.init({
            el: this.$refs.test
        })
    }
}