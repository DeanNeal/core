import { Component, Http } from '../../../../core';
import Tpl from './doc-http-methods.component.html';
export class HttpMethodsComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {

    }

    getWeater() {
        Http.remoteRequest('get', 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=31ff47785771280c27a522d0cc5c9cba&units=metric').then(res => {
            this.props.set('weather', res);
        })
    }

    onDestroy() {

    }
}