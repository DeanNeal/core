import { Utils } from '../../utils/utils';

const Interpolation = {
    _init: function(root, newArray) {
        let array = newArray || [];
        let regExp = /({{[^%>]+?}})/g;
        let self = this;


        let items = Utils.getTextNodesIn(root, function(textNode, parent) {
            if (textNode.nodeValue.match(regExp)/*regExp.test(textNode.nodeValue)*/ && textNode.parentNode.getAttribute('bind-avoid') !== '') {
                let vars = textNode.nodeValue.split(regExp);
                vars.filter(r => r).forEach((r, i) => {
                    let tNode = document.createTextNode(r);
                    let match = /{{([^}]+)}}/g.exec(r);
                    if (match) {
                        tNode.nodeValue = '';
                        let obj = {
                            node: tNode,
                            value: match[1]
                        };

                        array.get ? array.get(self).push(obj) : array.push(obj);
                    }
                    textNode.parentNode.insertBefore(tNode, textNode);
                });
                textNode.remove();
            }
        });

        return array;
    },

    _update: function(array, data, loopParams) {
        if (array.length) {
            array.forEach(node => {
                let params = node.value.split('|');
                let r = this.getPropsByScope(params[0], data, loopParams);
                r = Utils.applyFormatter(r, params[1]);
                node.node.nodeValue = r;
            })
        }
    }
}


export default Interpolation;