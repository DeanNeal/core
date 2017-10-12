import {Utils} from '../../core';
export function _if(array, data) {
    array.forEach(item => {
        let attr = item.attr.replace(/@+/g, "this.props."); // @ -alias of this.props
        
       try{
            let r = new Function('return ' + attr).apply(this);
            console.log(attr, r, this.props);
            if (r) {
                if (!item.elem.parentNode) { // insert only if elem doesn't exists
                    Utils.insertAfter(item.cached, item.comment)
                }
            } else {
                item.elem.remove()
            }
       } catch (err){
            throw new Error(this.constructor.name + '; ' + err);
       }


        // let conditions = attr.replace(/ +/g, "").split('&&');

        // conditions = conditions.map(res => {
        //     let reverse = false;
        //     // let a = eval('this.' + attr);
        //     if (res[0] === '!') {
        //         res = res.substring(1);
        //         reverse = true;
        //     }

        //     if (res.indexOf('==') > -1 || res.indexOf('===') > -1) {
        //         let equality = res.indexOf('===') > -1 ? res.replace(/ +/g, "").split('===') : res.replace(/ +/g, "").split('==');
        //         let r = this.getComponentVariable(equality[0].split('.'), data);

        //         return !!equality[1];
        //     }

        //     let params = res.split('.');
        //     let r = this.getComponentVariable(params, data);
        //     r = reverse ? !r : r;

        //     return !!r;
        // });

        // if (conditions.filter(item => item).length === conditions.length) {
        //     if (!item.elem.parentNode) { // insert only if elem doesn't exists
        //         Utils.insertAfter(item.cached, item.comment)
        //     }
        // } else {
        //     item.elem.remove()
        // }
    });
}