import { Application, Plugins } from './../core';
import { AppComponent } from './app';
import { ChildComponent, TestComponent } from './child';
import { MyDirective } from './my-directive';
// import { Router } from './router';

Application.bootstrap({
   components: [
      AppComponent,
      ChildComponent,
      TestComponent,
      Plugins.LineChartComponent,
      Plugins.BarChartComponent
   ],
   directives: [
      MyDirective
   ]
   // import: []
   // router: Router
});