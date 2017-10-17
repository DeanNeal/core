import { Component, Decorators} from '../../../../core';
import Tpl from './doc-conditional.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-conditional',
    template: Tpl,
    props: {
        isVisible: true
    }
})
export class DocConditionalComponent {
    constructor(params) {

    }

    onInit() {

    }
}