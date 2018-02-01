import { Component, Decorators} from '../../../../core';
import Tpl from './doc-list-rendering.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-list-rendering',
    template: Tpl,
    props: ()=>{
    	return {
            qwerty: 1,
            items: [
                {name: 'Item1'}, 
                {name: 'Item2'}, 
                {name: 'Item3'}
            ],
            object: {
                prop1: 'obj1',
                prop2: 'obj2'
            }
    	}
    }
})
export class DocListRenderingComponent {
    constructor(params) {

    }

    onInit() {

    }

    onDestroy() {

    }

    test(item, index, key) {
        console.log(item, index, key);
    }
}