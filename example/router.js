export let Routes = [
    {path: '/', component: 'app-home'},
    {path: 'auth', component: 'app-auth'},
    {path: 'registration', component: 'app-registration'},
    {path: 'remind', component: 'app-remind'},
    {path: 'gantt', component: 'app-chart'}, // root route
    {path: 'todo', component: 'app-todo'},
    {path: 'profile', component: 'app-profile'},
    {path: 'tracker', component: 'app-tracker'},
    {path: 'project/:id', component: 'app-project-page'},
    {path: 'task/:id', component: 'app-task-page'},
    {path: 'finances', component: 'app-finances'},
    {
        path: 'documentation',
        component: 'app-documentation',
        children: [
            {path: '/', component: 'app-documentation-quick-start'},
            {path: 'how-to-install', component: 'app-documentation-how-to-install'},
            {path: 'component', component: 'app-documentation-component'},
            {path: 'lifecycle', component: 'app-documentation-lifecycle'},
            {path: 'utils', component: 'app-documentation-utils'},
            {path: 'handlers', component: 'app-documentation-handlers'},
            {path: 'modules', component: 'app-documentation-modules'},
            {path: 'smart-object', component: 'app-documentation-smart-object'},
            {path: 'router-config', component: 'app-documentation-router-config'},
            {path: 'http-module', component: 'app-documentation-http-module'},
            {path: 'http-methods', component: 'app-documentation-http-methods'}
        ]
    },
    {path: '404', component: 'app-not-found'} // wrong route
];