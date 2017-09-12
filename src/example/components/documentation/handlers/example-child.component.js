import { Component } from '../../../../core';
export class ExampleChildComponent extends Component {
    constructor(params) {
        super(params, {
            template: 'Child component <button frameworkClick="trigger">Emit \'change\' event </button>'
        });
    }

    onInit() {

    }

    trigger() {
    	this.emit('change');
    }

}