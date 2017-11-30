import * as Decorators from '../../decorators';
import { Component } from '../../component/component';
import Tpl from './tree.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-tree-debug',
    template: Tpl,
    props: {
        components: []
    }
})
export class AceTreeComponent {

    onInit() {
        this.tree = [];
    }

    load() {
        console.time('tree')
        this.getChildren(Component.root);
        console.timeEnd('tree')

        this.props.set('components', this.tree.map(r => {
            return {
                level: r.level,
                name: r.c.constructorName,
                class: r.class
            };
        }));
    }

    getChildren(root) {
        this.tree = [];
        this.level = 0;
        if (root.children) {
            this.getAllChildren(root.children);
        }
    }

    getAllChildren(children) {

        for (let key in children) {
            children[key].forEach(child => {
                let ch = child;
                let level = 0;
                while (ch.parent) {
                    ch = ch.parent;
                    level++;
                }

                this.tree.push({ c: child, level, class: 'level-'+ level});
                this.getAllChildren(child.children);
            })
        }

    }

    onDestroy() {
        // debugger
    }

}