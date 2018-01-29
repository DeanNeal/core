import { Component, Decorators } from '../../../../core';

import Tpl from './doc-interpolation.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-documentation-interpolation',
    template: Tpl,
    props: ()=> {
        return {    
            isVisible: true,
            title: 'test',
            isReady: true
        }
    }
})
export class DocInterpolationComponent {
    constructor() {  

    }

    onInit() {
        // setInterval(()=>{
        //     // this.props.set('title', new Date());
        //     this.title = new Date();
        // }, 1000);

    }
}