import {PRIVATES} from '../private';
import {GlobalEvents} from '../../core';

export function _outside(array) {
    array.forEach(item => {
        let attr = item.attr;

        this.setSubscriptions(GlobalEvents.click.sub(res=>{
        	if(res.e){     		
	        	let ouside = this.shadow ? item.elem.contains(res.e.path[0]) : item.elem.contains(res.e.target);
	        	if (!ouside) {
	        	    this[attr] && this[attr].call(this, res.e);
	        	}
        	}
        }));
    });
}