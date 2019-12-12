import { Application, Plugins } from './../core';
import { AppComponent } from './app';
import { ChildComponent } from './child';
// import { Router } from './router';

Application.bootstrap({
   components: [
      AppComponent,
      ChildComponent,
      Plugins.LineChartComponent,
      Plugins.BarChartComponent
   ],
   // directives: [

   // ]
   // import: []
   // router: Router
});