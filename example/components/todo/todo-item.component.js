import { Component } from 'framework/core';
// import Style from './todo.component.scss';
import Tpl from './todo-item.component.html';

export class TodoItemComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl,
            // styles: Style
        });
    }

    onAttach() {

    }
}
