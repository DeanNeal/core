import { Utils } from '../../utils/utils';
import { ILoopParams, IDecoratorParams, IDirectiveParams } from 'src/interfaces';

const Interpolation = {
    _init: function(root: HTMLElement, newArray) {
        let array = newArray || [];
        let regExp = /({{[^%>]+?}})/g;
   
        Utils.getTextNodesIn(root, function(textNode: Text, parent) {
            if (textNode.nodeValue.match(regExp)) {
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

                        array.push(obj);
                    }
  
                    textNode.parentNode.insertBefore(tNode, textNode);
                });
                textNode.remove();
            }
        });

        return array;
    },

    _update: function(array, loopParams: ILoopParams) {
        if (array.length) {
            array.forEach(node => {
                let params = node.value.split('|');
                let r = this.getPropsByScope(params[0], loopParams);
                r = Utils.applyFormatter(r, params[1]);
                node.node.nodeValue = r;
            })
        }
    }
}

export default Interpolation;