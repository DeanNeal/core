import { Application, Plugins } from './../core';
import { AppComponent } from './app';
import { ChildComponent, TestComponent } from './child';
// import { Router } from './router';

Application.bootstrap({
   components: [
      AppComponent,
      ChildComponent,
      TestComponent,
      Plugins.LineChartComponent,
      Plugins.BarChartComponent
   ],
   // directives: [

   // ]
   // import: []
   // router: Router
});