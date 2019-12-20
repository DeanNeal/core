// import { Utils } from '../../core';
import { ILoopParams, IDirectiveParams } from 'src/interfaces';

export function _model(array: IDirectiveParams[], loopParams: ILoopParams) {
    array.forEach(item => {
        
        if (loopParams) {
            if(item.attr !== loopParams.iterator) {
                throw new Error(`Incorrect model value ${item.attr}; ` + this.constructor.name);
            }
        }
        
        if (item.elem.localName === 'input') {

            switch ((item.elem as HTMLInputElement).type) {
                case 'checkbox':
                    item.elem.addEventListener('change', (e: Event) => {
                        this.setComponentVariable(item.attr, (e.currentTarget as HTMLInputElement).checked ? true : false);
                    }, false);
                    break;
                case 'radio':
                    item.elem.addEventListener('change', (e: Event) => {
                        this.setComponentVariable(item.attr, (e.currentTarget as HTMLInputElement).value);
                    }, false);
                    break;
                case 'text':
                case 'email':
                case 'number':
                case 'password':
                    item.elem.addEventListener('input', (e: KeyboardEvent) => {
                        const value = ((item.elem as HTMLInputElement).type === 'number' ? parseFloat((e.currentTarget as HTMLInputElement).value) : (e.currentTarget as HTMLInputElement).value);
                        this.setComponentVariable(item.attr, value, loopParams);
                    }, false);
                    break;
            }

        }


    });
}