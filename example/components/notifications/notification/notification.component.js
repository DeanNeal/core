import { Component } from 'framework/core';
import Tpl from './notification.component.html';
import NotificaitonsStore from 'stores/notifications.store';
export class NotificationComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        // this.timeout = setTimeout(() => {
        //     this.root.className = 'animated fadeOutDown';

        // }, 4500);
        this.timeout = setTimeout(() => {
            this.close();
        }, 5000);
    }

    close() {
        NotificaitonsStore.close(this.props.get('id'));
    }

    onDestroy() {
        // clearTimeout(this.timeout);
        // clearTimeout(this.timeout1);
    }
}
