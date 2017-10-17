import { Component, Http, Decorators} from '../../../../core';
import Tpl from './doc-http-methods.component.html';

@Decorators.ComponentDecorator({
    selector: 'app-documentation-http-methods',
    template: Tpl,
})
export class HttpMethodsComponent{
    constructor(params) {

    }

    onInit() {

    }

    getWeater() {
        Http.makeRequest({method: 'get', url: 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=31ff47785771280c27a522d0cc5c9cba&units=metric'}).then(res => {
            this.props.set('weather', res);
        })
    }

    onDestroy() {

    }
}