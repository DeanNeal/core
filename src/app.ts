import { Application, Plugins } from './core';
import Component from './decorators/component';
import {LineChartComponent} from './plugins/charts/line/line-chart';


import * as Tpl from './app.html';
// import { Router } from './router';

@Component({
  selector: 'app-child',
  // template: `
  // child component: <div :for="let (item) of list">{{item}}</div> 
  // {{input}} {{show}}
  // `

  template: `
  <div> Child component: </div>
  {{forChildComponent}}
  `
})
export class ChildComponent {
  list = [1, 2, 3];
  test = 1;
  constructor() {
    // debugger
    // this;
  }
  onInit() {
    this;
    // console.log( this);
    // this.test = 2;

    //  setTimeout(()=> {
    //   this['emit']('test', 1);
    //  }, 1000)
  }
}


@Component({
  selector: 'app-root',
  template: Tpl
})
class AppComponent {
  public show = false;
  public selectedIndex = 0;
  public items = [];
  public list = [1, 2, 3];
  public tabs = ['Values', 'Loop', 'If', 'Style', 'Lazy load', 'Model', 'Pass properties', 'Plugins'];
  public collection = [[[13, 14]], [[16, 17]]];
  public value = 1234;
  public attrs = {
    title: 'test'
  };
  public input1 = '';
  public input2 = '';

  public style = {
    width: '50px',
    height: '50px',
    bg: '#999'
  };

  // forChildComponent = '';
  

  get input1AndInput2() {
    return this.input1 + '-' + this.input2;
  }

  constructor() {


    // setTimeout(() => {
    //   this.value = 10;
    // }, 1000)
  }

  onInit() {
    // setInterval(() => {
    //   this.show = !this.show;
    // }, 1000);
    this.load();

  }


  select(index) {
    this.selectedIndex = index;
  }

  test() {
    // alert();
    console.log('RRRRRRRRRRRRR')
  }

  changeStyle() {
    this.style = {
      width: '100px',
      height: '100px',
      bg: '#ccc'
    }
  }

  onLazyLoad(lazy) {
    setTimeout(() => {
      this.load();
      lazy.complete();
    }, 1000);
  }

  load() {
    let items = [];
    for (var i = 0; i <= 5; i++) {
      items.push(i);
    }

    this.items = this.items.concat(items);
  }

}


// @Component({
//   selector: 'app-root',
//   template: '<a :link="/">HOME</a><a :link="page">PAGE</a><route-switcher></route-switcher>'
// })
// class RootComponent {
//   onInit() {
//     debugger;this;
//   }
// }


Application.register({

  // styles: Styles,
  components: [],//[AppComponent, ChildComponent, Plugins.LineChartComponent],
  directives: [

  ]
  // import: []
  // router: Router

});