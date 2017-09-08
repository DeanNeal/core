// import 'document-register-element';
// import Styles from 'styles/main.scss';
import { Register } from 'src/framework/core.js';
// import { AuthComponent } from './components/auth/auth.component';
// import { RegistrationComponent } from './components/auth/registration/registration.component';
// import { RemindComponent } from './components/auth/remind/remind.component';

// import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { SidebarListComponent } from './components/sidebar/list/list.component';
// import { SidebarListItemComponent } from './components/sidebar/list/list-item.component';

// import { FooterComponent } from './components/footer/footer.component';
// import { ChartComponent } from './components/chart/chart.component';
// import { ScaleComponent } from './components/chart/scale/scale.component';
// import { ScaleDayComponent } from './components/chart/scale/day/day.component';
// import { ScaleMonthComponent } from './components/chart/scale/month/month.component';

// import { BarComponent } from './components/chart/bar/bar.component';

// import { TodoComponent } from './components/todo/todo.component';
// import { TodoItemComponent } from './components/todo/todo-item.component';

// import { ProfileComponent } from './components/profile/profile.component';

// import { TrackerComponent } from './components/tracker/tracker.component';
// import { TaskPreviewComponent } from './components/tracker/task-preview/task.component';
// import { TaskPageComponent } from './components/tracker/task-page/task-page.component';

// import { ProjectPageComponent } from './components/tracker/project-page/project-page.component';

// import { NotFoundComponent } from './components/not-found/not-found.component';
// import { NotificationsComponent } from './components/notifications/notifications.component';
// import { NotificationComponent } from './components/notifications/notification/notification.component';

// import { FinancesComponent } from './components/finances/finances.component';
// import { FinancesProjectComponent } from './components/finances/project-preview/project-preview.component';
// // modals

// // modules
// import Docs from './components/documentation';
// import Modals from './modals';
// import Dropdowns from './dropdowns';

//route
// import { Routes } from 'router.js';
Register({
    components: [
        // { c: AuthComponent, selector: 'app-auth' },
        // { c: RegistrationComponent, selector: 'app-registration' },
        // { c: RemindComponent, selector: 'app-remind' },
        // { c: HomeComponent, selector: 'app-home' },
        { c: ContainerComponent, selector: 'app-container' },
        // { c: HeaderComponent, selector: 'app-header' },
        // { c: SidebarComponent, selector: 'app-sidebar' },
        // { c: FooterComponent, selector: 'app-footer' },
        // { c: ChartComponent, selector: 'app-chart' },
        // { c: ScaleComponent, selector: 'app-scale' },
        // { c: ScaleDayComponent, selector: 'app-scale-day' },
        // { c: ScaleMonthComponent, selector: 'app-scale-month' },
        // { c: BarComponent, selector: 'app-chart-bar' },
        // { c: SidebarListComponent, selector: 'app-sidebar-list' },
        // { c: SidebarListItemComponent, selector: 'app-sidebar-list-item' },

        // { c: TodoComponent, selector: 'app-todo' },
        // { c: TodoItemComponent, selector: 'app-todo-item' },

        // { c: ProfileComponent, selector: 'app-profile' },

        // { c: TrackerComponent, selector: 'app-tracker' },
        // { c: TaskPreviewComponent, selector: 'app-task-preview' },
        // { c: TaskPageComponent, selector: 'app-task-page' },
        // { c: ProjectPageComponent, selector: 'app-project-page' },


        // { c: FinancesComponent, selector: 'app-finances' },
        // { c: FinancesProjectComponent, selector: 'app-finances-project' },

        // { c: NotFoundComponent, selector: 'app-not-found' },
        // { c: NotificationComponent, selector: 'app-notification' },
        // { c: NotificationsComponent, selector: 'app-notifications' },

    ],
    // modules: [
    //     Docs,
    //     Modals,
    //     Dropdowns,
    // ],
    // routes: Routes,
    // styles: Styles
});