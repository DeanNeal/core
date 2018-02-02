import {Observable} from './observable/observable';
class GlobalEvents {
    constructor() {
        this.click = new Observable({});
        window.addEventListener('click', (e) => {
            this.click.reset({e});
        }, true);
    }
}


export default new GlobalEvents();
