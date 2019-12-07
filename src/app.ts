import { Application, Plugins, Component } from './core';
// import Component from './decorators/component';
// import {LineChartComponent} from './plugins/charts/line/line-chart';


import * as Tpl from './app.html';
// import { Router } from './router';

@Component({
  selector: 'app-child',
  // template: `
  // child component: <div :for="let (item) of list">{{item}}</div> 
  // {{input}} {{show}}
  // `

  template: `<div @click="click()"> Child component: </div>{{forChildComponent}}`,
  shadowDom: true
})
export class ChildComponent {
  list = [1, 2, 3];
  forChildComponent = 10;

  onInit() {

    // console.log( this);
    // this.test = 2;

    setTimeout(() => {
      // this['emit']('test', 1);
      // this.emit('test', 1);
    }, 1000)

  }

  click() {

  }
}


@Component({
  selector: 'app-root',
  template: Tpl
})
class AppComponent{
  public show: boolean = false;
  public selectedIndex = 0;
  public items = [];
  public list = [1, 2, 3];
  public tabs = ['Values', 'Loop', 'If', 'Style', 'Lazy load', 'Model', 'Pass properties', 'Plugins', 'Router'];
  public collection = [[[13, 14]], [[16, 17]]];
  public value = 1234;
  public attrs = {
    title: {
      test: 'test'
    }
  };

  public input1 = '';
  public input2 = '';

  public cubeStyle = {
    width: 50,
    height: 50,
    bg: '#999'
  };

  // forChildComponent = '';

  onUpdate() {
    // this.value+=this.value;
  }

  get input1AndInput2() {
    return this.input1 + '-' + this.input2;
  }

  get widthOfCube() {
    let width = this.cubeStyle.width;
    if (width > 1000) width = 1000;
    return width + 'px';
  }

  get heightOfCube() {
    let height = this.cubeStyle.height;
    if (height > 500) height = 500;
    return height + 'px';
  }

  constructor() {

  }


  onInit() { 
    this.load();

    // Plugins.Sortable.init({
    //   el: this.$refs.sortableElement,
    //   onDragEnd: () => {
    //     console.log('drag end')
    //   }
    // });
  }


  select(index) {
    this.selectedIndex = index;
  }

  test() {
    // alert();
    console.log('RRRRRRRRRRRRR')
  }

  // changeStyle() {
  //   this.style = {
  //     width: '100px',
  //     height: '100px',
  //     bg: '#ccc'
  //   }
  // }

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


Application.bootstrap({

  // styles: Styles,
  components: [AppComponent, ChildComponent, Plugins.LineChartComponent, Plugins.BarChartComponent],
  // directives: [

  // ]
  // import: []
  // router: Router

});