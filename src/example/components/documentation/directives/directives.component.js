import { Component, Decorators } from '../../../../core';
import Tpl from './directives.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-directives',
    template: Tpl,
    props: {
        value: 'value',
        model: 'Something',
        className: 'unclicked',
        showClass: true,
        isVisible: false,
        width: '50px',
        height: '100px',
        items: [{name: 1}, {name: 2}, {name: 3}],
        image: 'https://www.w3schools.com/css/img_fjords.jpg'
    }
})
export class DocDirectivesComponent {
    constructor(params) {

    }

    onInit() {

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
        this.props.set('isVisible', !this.props.get('isVisible'));
    }

    onChange() {
        alert('Event from child');
    }

    onDestroy() {

    }
}