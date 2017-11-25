import {ObservableModel} from './observable/observable';
class GlobalEvents {
    constructor() {
        this.click = new ObservableModel();
        window.addEventListener('click', (e) => {
            this.click.reset({e});
        }, true);
    }
}


export default new GlobalEvents();
