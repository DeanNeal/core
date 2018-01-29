import { Component, Decorators} from '../../../core';
import Tpl from './documentation.component.html';
// import ProjectsStore from 'store/projects.store';

@Decorators.ComponentDecorator({
    selector: 'app-documentation',
    template: Tpl
})
export class DocumentationComponent {
    constructor(params) {

    }

    onInit() {
        // this.getElement('pre').forEach(item => {

        // });

        this.props.set({
            version: VERSION,
            'categories': [{
                    name: 'Getting started',
                    items: [{
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
                    name: 'Component',
                    items: [{
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
                    items: [
                    {
                        name: 'Interpolation',
                        route: 'documentation/interpolation'
                    }, 
                    {
                        name: 'Directives',
                        route: 'documentation/directives'
                    }, {
                        name: 'Custom directives',
                        route: 'documentation/custom-directives'
                    }, {
                        name: 'Conditional rendering',
                        route: 'documentation/conditional-rendering'
                    }, {
                        name: 'List rendering',
                        route: 'documentation/list-rendering'
                    }, {
                        name: 'Classes & Styles',
                        route: 'documentation/classes-styles'
                    }, {
                        name: 'Events',
                        route: 'documentation/events'
                    }, {
                        name: 'Forms',
                        route: 'documentation/forms'
                    }]
                },
                {
                    name: 'Data',
                    items: [{
                        name: 'Stores',
                        route: 'documentation/store'
                    }, {
                        name: 'Observable',
                        route: 'documentation/smart-object'
                    }]
                },
                {
                    name: 'Routing',
                    items: [ {
                        name: 'Router configuration',
                        route: 'documentation/router-config'
                    }, {
                        name: 'Protectors',
                        route: 'documentation/route-protectors'
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
                        name: 'Hypermedia API',
                        route: 'documentation/multimedia-api'
                    }]
                }
            ]
        });

    }

    onDestroy() {

    }
}