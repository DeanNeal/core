import { API, Decorators } from './core';

import Tpl from './app.html';

@Decorators.ComponentDecorator({
    selector: 'app-root',
    template: Tpl,
    props: ()=> {
      return {
        tabs: ['Values', 'Loop', 'If', 'Style', 'Lazy load'],
        selectedIndex: 0,
         value: 1234,
         attrs: {
          title: 'test'
         },
         show: false,
         items: [],
         collection: [[[13,14]], [[16,17]]],
         style: {
          width: '50px',
          height: '50px',
          bg: '#999'
         }
      }
    }
})

export class RootComponent {
    constructor(params) {

    }

    onInit() {
      setInterval(()=>{
        this.show = !this.show;
      }, 1000);
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


API.register({
    root: RootComponent,
    // styles: Styles,
    components: [],
    directives: [
        
    ],
    import: [],
    // routes: Routes

});