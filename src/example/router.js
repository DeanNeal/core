export let Routes = [
    {path: '/', component: 'app-home'},
    {
        path: 'documentation',
        component: 'app-documentation',
        children: [
            {path: '/', component: 'app-documentation-quick-start'},
            {path: 'how-to-install', component: 'app-documentation-how-to-install'},
            {path: 'architecture', component: 'app-documentation-architecture'},
            {path: 'component', component: 'app-documentation-component'},
            {path: 'lifecycle', component: 'app-documentation-lifecycle'},
            {path: 'utils', component: 'app-documentation-utils'},
            {path: 'directives', component: 'app-documentation-directives'},
            {path: 'modules', component: 'app-documentation-modules'},
            {path: 'smart-object', component: 'app-documentation-smart-object'},
            {path: 'router-config', component: 'app-documentation-router-config'},
            {path: 'http-module', component: 'app-documentation-http-module'},
            {path: 'http-methods', component: 'app-documentation-http-methods'}
        ]
    },
    {path: '404', component: 'app-not-found'} // wrong route
];