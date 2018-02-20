import {Utils} from '../utils/utils';
let instances = [];
export class ModalController {
    constructor(component, props) {
        this.props = Object.assign({}, props);
        this.root = document.createElement('app-modal');
        this.root.style.zIndex = 999;
        this.component = component;
        this.onCompleteCallback = null;
        this.init();
    }

    init() {
        let comp = new this.component(this.root, {}, this, this.props);
        document.body.appendChild(this.root);

        let overlay = document.createElement('app-modal-overlay');
        overlay.addEventListener('click', (e) => {
            ModalController.close(comp);
        }, false);
        this.root.appendChild(overlay);

        instances.push(this);
    }

    onComplete(fn) {
        this.onCompleteCallback = fn;
    }

    static close(comp) {
        let elements = comp.root.querySelectorAll('*');
        elements.forEach(node=>{
           if(Utils.isCustomElement(node)){
                node.COMPONENT && node.COMPONENT.destroy();
           } 
        })

        document.body.removeChild(comp.root);
        comp.destroy();
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