import {GlobalEvents} from '../core';


export class Dropdown {
	// let component = item.elem.COMPONENT;

	constructor() {

		this.setSubscriptions(GlobalEvents.click.sub(res=>{
		    if(res.e){          
		        let ouside = this.shadow ? item.elem.contains(res.e.path[0]) : item.elem.contains(res.e.target);
		        if (!ouside) {debugger
		            this._outside && this._outside();
		        }
		    }
		}));
	}

	_outside(){
	    if (this.props.get('_show')) {
	        this.props.set('_show', false)
	        this.onClose && this.onClose();
	    }
	}

	_open(){
	    if (this.getRoot().getAttribute('readonly') === null) {
	        this.props.set('_show', !this.props.get('_show'));
	        this.onOpen && this.onOpen();
	    }
	}

	_close() {
	    if (this.props.get('_show')) {
	        this.props.set('_show', false)
	    }
	}

	_onFocus() {
	    this._open();
	}
}