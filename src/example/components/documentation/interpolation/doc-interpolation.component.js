import { Component } from '../../../../core';
import Tpl from './doc-interpolation.component.html';
export class DocInterpolationComponent extends Component {
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