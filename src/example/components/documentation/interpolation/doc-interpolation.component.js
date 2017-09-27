import { Component, Decorators } from '../../../../core';

import Tpl from './doc-interpolation.component.html';


@Decorators.ComponentDecorator({
    template: Tpl,
    props: {
        isVisible: true,
        title: 'test'
    }
})
export class DocInterpolationComponent {
    constructor(root, params) {  

    }

    onInit() {
        // setInterval(()=>{
        //     this.props.set('title', new Date());
        // }, 1000);
    }
}