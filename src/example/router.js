export let Routes = [
    { path: '/', component: 'app-home' },
    { path: 'controls', component: 'app-controls' },
    {
        path: 'plugins',
        component: 'app-plugins',
        children: [
            { path: 'sortable', component: 'app-plugins-sortable' },
            { path: 'chart', component: 'app-plugins-chart' },
            { path: 'lazy', component: 'app-plugins-lazy' }
        ]
    },
    {
        path: 'documentation',
        component: 'app-documentation',
        children: [
            { path: '/', component: 'app-documentation-quick-start' },
            { path: 'how-to-install', component: 'app-documentation-how-to-install' },
            { path: 'architecture', component: 'app-documentation-architecture' },
            { path: 'component', component: 'app-documentation-component' },
            { path: 'lifecycle', component: 'app-documentation-lifecycle' },
            { path: 'utils', component: 'app-documentation-utils' },
            { path: 'interpolation', component: 'app-documentation-interpolation' },
            { path: 'directives', component: 'app-documentation-directives' },
            { path: 'custom-directives', component: 'app-documentation-custom-directives' },
            { path: 'conditional-rendering', component: 'app-documentation-conditional' },
            { path: 'list-rendering', component: 'app-documentation-list-rendering' },
            { path: 'events', component: 'app-documentation-events' },
            { path: 'forms', component: 'app-documentation-forms' },
            { path: 'modules', component: 'app-documentation-modules' },
            { path: 'smart-object', component: 'app-documentation-smart-object' },
            { path: 'router-config', component: 'app-documentation-router-config' },
            { path: 'http-module', component: 'app-documentation-http-module' },
            { path: 'http-methods', component: 'app-documentation-http-methods' }
        ]
    },
    { path: '404', component: 'app-not-found' } // wrong route
];