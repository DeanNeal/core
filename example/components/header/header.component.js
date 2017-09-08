import {Component, Router} from 'framework/core';
import Tpl from './header.component.html';
import ProjectsStore from 'stores/projects.store';
import UserStore from 'stores/user.store';
export class HeaderComponent extends Component {
    constructor(params) {
        super(params, {
            selector: 'app-header',
            template: Tpl
        });
    }

    onInit() {
        this.props.set('value', '');

        // this.sub1 = ProjectsStore.searchValue.sub(res => {
        //     // this.props.set('value', res.value);
        //     console.log(res);
        // });

        this.setSubscriptions(
            UserStore.auth.sub(res => {
                this.props.set('logged', res.auth);
            })
        );
    }

    search() {
        ProjectsStore.search(this.props.get('value'));
    }

    clear() {
        ProjectsStore.search();
        this.props.set('value', '');
    }

    onDestroy() {

    }
}