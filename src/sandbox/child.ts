import { Component, Output, Input } from './../core';
import * as Tpl from './child.html';
import * as styles from './child.css'

@Component({
   selector: 'app-child',
   template: Tpl,
   style: styles,
   shadowDom: true
 })
 export class ChildComponent {
   list = [1, 2, 3];

   @Input('forChildComponent') forChildComponent;
   @Input('test') test;
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

 @Component({
   selector: 'app-test',
   template: 'app-test: {{qqq}}',
   shadowDom: true
 })
 export class TestComponent {
   @Input('fuck') qqq; 
 }
 
 