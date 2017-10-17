import { Component, Decorators} from '../../../../core';
import Tpl from './custom-directives.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-custom-directives',
    template: Tpl,
    props: {
        test: 'test',
        show: true
    }
})
export class DocCustomDirectivesComponent {
    constructor(params) {

    }

    onInit() {

    }
}