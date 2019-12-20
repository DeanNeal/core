
export class EventEmitter {
   private host: HTMLElement;
   private name: string;
   constructor(host: HTMLElement, name: string) {
      Object.defineProperties(this, {
         host: {
            value: host,
            writable: false
         },
         name: {
            value: name,
            writable: false
         }
      });
   }

   emit(data: any) {
      let myEvent = new CustomEvent(this.name, {
         detail: data,
         bubbles: true,
         cancelable: false
      });

      if (this.host) {
         this.host.dispatchEvent(myEvent);
      }
   }

}
