import { EventEmitter } from "./../utils/event-emitter";

export function Output(name: string) {
   return (target: any, propertyKey: string | symbol) => {
    
     Object.defineProperty(target, propertyKey, {
       configurable: false,
       enumerable: false,
       set() {
 
       },
       get() {
         return new EventEmitter(this.host, name);
       }
     });
   }
 }