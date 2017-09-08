import {Component, Http} from 'framework/core';
import Tpl from './todo.component.html';

const todos = [
    {name: 'Documentation', urgent: true},
    {name: 'Pattern handler bug', done: true},
    {name: 'Min, max datepicker', done: true},
    {name: 'Data binding for checkbox, radio-button'},
    {name: 'Don\'t refresh parent component if child is changing', urgent: true, done: true},
    {name: 'Model change bug(search in header)', done: true},
    {name: 'separate handlers from core component', done: true},
    {name: 'Refactoring of loops', done: 'true'},
    {name: 'Private methods and data', urgent: true, done: true},
    {name: 'crossbrowser working', urgent: true},
    {name: 'host events, styles and other things', urgent: true, done: true},
    {name: 'frameworkValue для frFor c native elements', done: true},
    {name: 'Component inheritance', urgent: true, done: true},
    {name: 'Two way data binding', urgent: true, done: true},
    {name: 'frameworkModel, убрать frameworkValue', urgent: true, done: true},
    {name: 'Input methon for components', done: true},
    {name: 'Система глобальных событий', done: true},
    {name: 'Http module', urgent: true, done: true},
    {name: 'Extend http module. onprogress ...'},
    {name: 'Очищать подписки при удалении компонентов', done: true},
    {name: 'Продумать правильное удаление из коллекции', done: true},
    {name: 'Триггеринг подпискиков при изменении свойств SmartObject', urgent: true, done: true},
    {name: 'Router. Then deep routing', urgent: true, done: true},
    {name: 'Profile', done: true},
    {name: 'For loop for native elements', urgent: true, done: true},
    {name: 'Highlight holiday', done: true},
    {name: 'Synchronization between days and bars', done: true},
    {name: 'Bar moving', done: true},
    {name: 'Bar resize', done: true},
    {name: 'Color of project', done: true},
    {name: 'Smooth scroll', done: true},
    {name: 'Dropdowns', done: true},
    {name: 'Modals', done: true},
    {name: 'Outside click', done: true},
    {name: 'Datepicker', done: true},
    {name: 'Module system', done: true},
    {name: 'Table sorting'},
    {name: 'Pattern', urgent: true, done: true}
];

export class TodoComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        this.props.set({
            filter: 'active',
            'todos': []
        });
        this.onChangeFilter();

        // Http.catalog.sub(res => {
        //     res.entry.get_countries().then(res => {
        //         this.props.set({ countries: res.models.map(item=> {
        //             item.data.class = 'flag-' + item.data.iso.toLowerCase();
        //             return item;
        //         })});
        //     });
        // });
    }

    onChangeFilter() {
        let filter = this.props.get('filter');
        let filtered = [];
        if (filter === 'active') {
            filtered = todos.filter(item => item.urgent && !item.done || (!item.done && !item.urgent));
        } else if (filter === 'done') {
            filtered = todos.filter(item => item.done);
        }

        this.props.set('todos', filtered);
    }
}
