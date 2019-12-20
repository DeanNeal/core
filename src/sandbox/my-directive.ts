import { Directive } from "./../core";

@Directive({
   selector: 'uppercase'
})
export class MyDirective {
   public elem: HTMLElement;
   constructor(elem) {
      this.elem = elem;
   }

   onUpdate() {
      this.elem.innerHTML = this.elem.innerHTML.toUpperCase();
   }
}