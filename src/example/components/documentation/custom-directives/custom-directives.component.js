import { Component } from '../../../../core';
import Tpl from './custom-directives.component.html';
export class DocCustomDirectivesComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl,
            props: {
            	test: 'test',
            	show: true
            }
        });
    }

    onInit() {

    }
}