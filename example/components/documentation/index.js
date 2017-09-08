import {DocumentationComponent} from './documentation.component';
import {DocQuickStartComponent} from './quick-start/doc-quick-start.component';
import {DocComponentComponent} from './component/doc-component.component';
import {DocLifecycleComponent} from './lifecycle/doc-lifecycle.component';
import {DocUtilsComponent} from './utils/doc-utils.component';
import {DocHandlersComponent} from './handlers/handlers.component';
import {DocModulesComponent} from './modules/doc-modules.component';
import {DocSmartObjectComponent} from './smart-object/doc-smart-object.component';
import {DocHowToComponent} from './how-to-install/doc-how-to.component';
import {DocRouterConfigComponent} from './router-config/doc-router-config.component';
import {HttpModuleComponent} from './http-module/doc-http-module.component';
import {HttpMethodsComponent} from './http-methods/doc-http-methods.component';

export default [
    {c: DocumentationComponent, selector: 'app-documentation'},
    {c: DocQuickStartComponent, selector: 'app-documentation-quick-start'},
    {c: DocHowToComponent, selector: 'app-documentation-how-to-install'},
    {c: DocComponentComponent, selector: 'app-documentation-component'},
    {c: DocLifecycleComponent, selector: 'app-documentation-lifecycle'},
    {c: DocUtilsComponent, selector: 'app-documentation-utils'},
    {c: DocHandlersComponent, selector: 'app-documentation-handlers'},
    {c: DocModulesComponent, selector: 'app-documentation-modules'},
    {c: DocSmartObjectComponent, selector: 'app-documentation-smart-object'},
    {c: DocRouterConfigComponent, selector: 'app-documentation-router-config'},
    {c: HttpModuleComponent, selector: 'app-documentation-http-module'},
    {c: HttpMethodsComponent, selector: 'app-documentation-http-methods'}
]