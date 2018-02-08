let instances = [];
export class ModalController {
    constructor(component) {
        this.root = document.createElement('app-modal');
        this.component = component;
        this.componentInstance = null;
        this.onCompleteCallback = null;
        this.init();
    }

    init() {
        this.componentInstance = new this.component(this.root, {}, this);
        document.body.appendChild(this.root);

        let overlay = document.createElement('app-modal-overlay');
        overlay.addEventListener('click', (e) => {
            this.close();
        }, false);
        this.root.appendChild(overlay);

        instances.push(this);
    }

    onComplete(fn) {
        this.onCompleteCallback = fn;
    }

    close() {
        this.componentInstance.destroy();
        document.body.removeChild(this.root);
    }

    static confirm(comp, value) {
        let instance = instances.filter(r=> r.componentInstance === comp)[0];
        if(instance){
             if (instance.onCompleteCallback) {
                 instance.onCompleteCallback.call(this, value);
             }
             instance.close();   
        }
    }

    static dismiss(comp) {
        let instance = instances.filter(r=> r.componentInstance === comp)[0];
        if(instance){
            instance.close();   
        }
    }
}