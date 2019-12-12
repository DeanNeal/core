import { Component, Output } from './../core';
import * as Tpl from './child.html';

@Component({
   selector: 'app-child',
   template: Tpl,
   style: `<style>input{color: red}</style>`
   // shadowDom: true
 })
 export class ChildComponent {
   list = [1, 2, 3];
   // forChildComponent= 10;
   // @Input('forChildComponent') forChildComponent;
   @Output('onChange') output;
 
   onInit() {
 
   }
 
   onUpdate() {
     // console.log(this);
   }
 
   click() {
     this.output.emit(10);
   }
 }
 
 