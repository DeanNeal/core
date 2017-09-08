import {Component} from 'framework/core';
import Tpl from './documentation.component.html';
// import ProjectsStore from 'store/projects.store';
export class DocumentationComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        this.getElement('pre').forEach(item => {

        });

        this.props.set('categories', [
            {
                name: 'Getting started', items: [{
                name: 'Quick start',
                route: 'documentation'
            }, {
                name: 'How to install',
                roure: 'how-to',
                route: 'documentation/how-to-install'
            }, {
                name: 'Architecture',
                route: 'documentation/architecture'
            }]
            },
            {
                name: 'Component', items: [{
                name: 'Component',
                route: 'documentation/component'
            }, {
                name: 'Lifecycle',
                route: 'documentation/lifecycle'
            }, {
                name: 'Props',
                route: 'documentation/props'
            }, {
                name: 'Modules',
                route: 'documentation/modules'
            }, {
                name: 'Utils',
                route: 'documentation/utils'
            }]
            },
            {
                name: 'Template',
                items: [{
                    name: 'Handlers',
                    route: 'documentation/handlers'
                }]
            },
            {
                name: 'Data',
                items: [{
                    name: 'Stores',
                    route: 'documentation/store'
                }, {
                    name: 'Smart Object',
                    route: 'documentation/smart-object'
                }]
            },
            {
                name: 'Styles',
                items: []
            },
            {
                name: 'Routing',
                items: [{
                    name: 'Introduction',
                    route: 'documentation/routing-intro'
                }, {
                    name: 'Router configuration',
                    route: 'documentation/router-config'
                }]
            },
            {
                name: 'HTTP',
                items: [{
                    name: 'Http module',
                    route: 'documentation/http-module'
                }, {
                    name: 'Http methods',
                    route: 'documentation/http-methods'
                }, {
                    name: 'Multimedia API',
                    route: 'documentation/multimedia-api'
                }]
            }
        ]);

    }

    onDestroy() {

    }
}