import { Component, Decorators} from '../../../../core';
import Tpl from './doc-list-rendering.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-list-rendering',
    template: Tpl,
    props: ()=>{
    	return {
    		items: [{name: 1}, {name: 2}, {name: 3}]
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
}