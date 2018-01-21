import { Component, Decorators } from '../../../../core';
import Tpl from './directives.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-directives',
    template: Tpl,
    props: () => {
        return {        
            value: 'value',
            model: 'Something',
            className: 'unclicked',
            showClass: true,
            isVisible: false,
            width: '50px',
            height: '100px',
            qwerty: {test: 1},
            items: [{name: 1, bg: '#ccc', route: '123', class: 'classname'}, {name: 2, class: 'test1'}, {name: 3}],
            image: 'https://www.w3schools.com/css/img_fjords.jpg'
        }
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

    onClick(item, event) {

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