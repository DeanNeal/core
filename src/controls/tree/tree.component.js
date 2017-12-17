import * as Decorators from '../../decorators';
import { Component } from '../../component/component';
import Tpl from './tree.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-tree-debug',
    template: Tpl,
    props: {
        components: []
    },
    hostHidden: 'visible'
})
export class AceTreeComponent {

    onInit() {
        this.tree = [];
    }

    load() {
        console.time('tree')
        this.getChildren(Component.rootInstance);
        console.timeEnd('tree')

        this.props.set('components', this.tree);
    }

    getChildren(root) {
        this.tree = [];
        this.level = 0;
        if (root.children) {
            this.getAllChildren(root.children, this.tree);
        }
    }

    getAllChildren(children, tree) {
        for (let key in children) {
            if(key !== 'AceTreeComponent') {
                let comp = { children: [], name: key };
                children[key].forEach(child => {
                    tree.push(comp);
                    this.getAllChildren(child.children, comp.children);
                });
            }
        }
    }

    onDestroy() {
    
    }

}