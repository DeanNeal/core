import { Application, Decorators } from './core';

import * as Tpl from './app.html';
import {Router} from './router';

@Decorators.ComponentDecorator({
  selector: 'app-child',
  template: 'child component: <div :for="let (item) of list">{{item}}</div>'
})
export class ChildComponent {
    list = [1,2,3];
}

@Decorators.ComponentDecorator({
  selector: 'app-home',
  template: Tpl
})
class AppComponent {
    public show = false;
    public selectedIndex = 0;
    public items = [];
    public tabs = ['Values', 'Loop', 'If', 'Style', 'Lazy load'];
    public collection = [[[13, 14]], [[16, 17]]];
    public value = 1234;
    public attrs = {
      title: 'test'
    };
    public style = {
      width: '50px',
      height: '50px',
      bg: '#999'
    };

    constructor() {
      this;
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
      alert();
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


@Decorators.ComponentDecorator({
  selector: 'app-root',
  template: '<a :link="/">HOME</a><a :link="page">PAGE</a><route-switcher></route-switcher>'
})
class RootComponent {

}

Application.register({

  // styles: Styles,
  components: [RootComponent, AppComponent, ChildComponent],
  directives: [

  ],
  import: [],
  router: Router

});