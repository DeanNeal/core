import { ILoopParams, IDirectiveParams } from "src/interfaces";

export function _class(array: IDirectiveParams[], loopParams: ILoopParams) {
    array.forEach((item: IDirectiveParams) => {
        let array = item.attr.replace(/ +/g, "").split(',');
        let root = item.elem;
        let inxToRemove = [];
        
        item.prevValue.forEach((r, i)=> {
            if(root.classList.contains(r)) {
                root.classList.remove(r);
                inxToRemove.push(i);
            }
        });
        inxToRemove.forEach(index=> {
            item.prevValue.splice(index, 1);
        });

        array.forEach((prop: string) => {
            try {
                let params = prop.replace(/ +/g, "").split(':');
                let className = this.getPropsByScope(params[0], loopParams);
                let r = this.getPropsByScope(params[1], loopParams);

                r ? (root.classList.add(className)) : (root.classList.remove(className));
                
                if(r) {
                    item.prevValue.push(className);
                }
            } catch (err) {
                throw new Error(this.constructor.name + '; ' + err);
            }
        });
    });
}