import {Component} from 'framework/core';
import Tpl from './profile.component.html';
import NotificaitonsStore from 'stores/notifications.store';
import ModalsStore from 'stores/modals.store';
import UserStore from 'stores/user.store';
export class ProfileComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        this.setSubscriptions(
            UserStore.user.sub(user => {
                if (user) {
                    this.props.set(user);
                }
            })
        );
    }

    validation() {
        for (let item of this.ui.form.elements) {
            if (item.localName === 'input') {
                item.checkValidity() ? item.classList.remove('error') : item.classList.add('error');
            }
        }
    }

    avatarChange() {
        const reader = new FileReader();
        reader.onload = e => {

            ModalsStore.open('crop', {
                image: e.target.result,
                callback: (src) => {
                    this.props.set('avatar', `url(${src})`);
                    this.ui.avatar.value = '';
                }
            });
        };

        if (this.ui.avatar.files.length) {
            reader.readAsDataURL(this.ui.avatar.files[0]);
        }
    }

    changeProfile(e) {
        e.preventDefault();
        UserStore.user.set(this.props._data);
        NotificaitonsStore.show({text: `Changes has been saved`});
    }

    onDestroy() {

    }
}