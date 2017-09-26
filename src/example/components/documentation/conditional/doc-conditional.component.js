import { Component } from '../../../../core';
import Tpl from './doc-conditional.component.html';
export class DocConditionalComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl,
            props: {
                isVisible: true
            }
        });
    }

    onInit() {

    }
}