import { Component } from '../../../../core';
import Tpl from './directives.component.html';
export class DocDirectivesComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        this.props.set({
            value: 'value',
            model: 'Something',
            className: 'unclicked',
            showClass: true,
            isVisible: false,
            width: '50px',
            height: '100px',
            items: [{name: 1}, {name: 2}, {name: 3}],
            image: 'https://www.w3schools.com/css/img_fjords.jpg'
        })
    }

    submit(e) {
        e.preventDefault();
    }

    changeClass() {
        this.props.set('className', 'clicked');
    }

    changeSize() {
        this.props.set({
            height: '75px',
            width: '100px'
        })
    }

    showElement() {
        this.props.set('isVisible', true);
    }

    onChange() {
        alert('Event from child');
    }

    onDestroy() {

    }
}