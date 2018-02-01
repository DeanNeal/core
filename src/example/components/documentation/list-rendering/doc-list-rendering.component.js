import { Component, Decorators} from '../../../../core';
import Tpl from './doc-list-rendering.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-list-rendering',
    template: Tpl,
    props: ()=>{
    	return {
            test: 1,
    		items: [{name: 1}, {name: 2}, {name: 3}],
            object: {
                test1: 1,
                test2: 2
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

    test(item) {
console.log(item);
    }
}