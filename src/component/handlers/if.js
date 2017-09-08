import {Utils} from '../../core';
export function _if(array) {
    array.forEach(item => {
        let attr = item.attr;
        let conditions = attr.replace(/ +/g, "").split('&&');

        conditions = conditions.map(res => {
            let reverse = false;
            // let a = eval('this.' + attr);
            if (res[0] === '!') {
                res = res.substring(1);
                reverse = true;
            }

            if (res.indexOf('==') > -1) {
                let equality = res.replace(/ +/g, "").split('==');
                let r = this.getComponentVariable(equality[0].split('.'));

                return !!equality[1];
            }

            let params = res.split('.');
            let r = this.getComponentVariable(params);
            r = reverse ? !r : r;

            return !!r;
        });

        if (conditions.filter(item => item).length === conditions.length) {
            if (!item.elem.parentNode) { // insert only if elem doesn't exists
                Utils.insertAfter(item.cached, item.comment)
            }
        } else {
            item.elem.remove()
        }
    });
}