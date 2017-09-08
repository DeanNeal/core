import { Component } from 'framework/core';
import Tpl from './notifications.component.html';

import NotificaitonsStore from 'stores/notifications.store';
export class NotificationsComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        NotificaitonsStore.notifications.sub(res=>{
        	this.props.set('notifications', res);
        });
    }
}
