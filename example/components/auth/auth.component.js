import {Component, Router} from 'framework/core';
import Tpl from './auth.component.html';
import UserStore from 'stores/user.store';

export class AuthComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onAttach() {

    }

    submit(e) {
        UserStore.login();
        Router.navigate('gantt');
    }
}
