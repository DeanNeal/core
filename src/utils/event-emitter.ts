
export class EventEmitter {
   private host;
   private name;
   constructor(host, name) {
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

   emit(data) {
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
