import { Component, Plugins, Decorators } from '../../../../core';
import Tpl from './lazy.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-plugins-lazy',
    template: Tpl,
    props: () => {
        return {
            items: []
        }
    }
})
export class PluginsLazyComponent {
    onInit() {
        this.load();
    }

    onLazyLoad(lazy) {
        setTimeout(() => {
            this.load();
            lazy.complete();
        }, 1000);
    }

    load() {
        let items = [];
        for (var i = 0; i <= 5; i++) {
            items.push(i);
        }

        this.items = this.items.concat(items);
    }
}