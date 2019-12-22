import { Plugins, Component, FormGroup, Validators } from './../core';
import * as Tpl from './app.html';


@Component({
  selector: 'app-root',
  template: Tpl,
  hostListeners: {
    click: (e, vm) => { }
  },
  hostAttrs: {
    class: (vm) => {
      return vm.input1AndInput2;
    },
    style: {
      background: () => {
        return '#aaa';
      }
    },
    title: () => {
      return 'title'
    }
    // hidden: (vm) => {
    //   return vm.input1;
    // }
  },
  // shadowDom: true
})
export class AppComponent {
  public show: boolean = false;
  public selectedIndex = 0;
  public items = [];
  public list = [1, 2, 3];
  public tabs = ['Values', 'Loop', 'If', 'Style', 'Lazy load', 'Model', 'Pass properties', 'Plugins', 'Router', 'Form'];
  public collection = [[[13, 14, 15]], [[16, 17]]];
  public value = 'value';
  public attrs = {
    title: {
      test: 'test'
    }
  };

  public input1 = '';
  public input2 = '';

  public cubeStyle: any = {
    width: 50,
    height: 50,
    bg: '#999'
  };
  forChildComponent = '1000';

  public form = new FormGroup({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    checkbox: [],
    radio: []
  });

  onUpdate() {

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

  hostClick() {
    alert(1);
  }

  onCubeClick() {
    this.cubeStyle.width += 5;
  }


  onInit() {
    this.load();

    Plugins.Sortable.init({
      el: this['$refs'].sortableElement,
      onDragEnd: () => {
        console.log('drag end')
      }
    });
  }


  select(index) {
    this.selectedIndex = index;
  }

  test(e, data) {
    console.log(e, data)
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

  submit(e) {
    // e.preventDefault();
    if (this.form.valid) {
      this.form.reset();
      console.log(this.form.value);
    }

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


