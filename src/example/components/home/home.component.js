import {Component, Router, Decorators} from '../../../core';
import Tpl from './home.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-home',
    template: Tpl
})
export class HomeComponent{
    constructor(params) {

    }
}
