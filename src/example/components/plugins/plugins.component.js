import {Component, Plugins} from '../../../core';
import Tpl from './plugins.component.html';

export class PluginsComponent extends Component {
    constructor(options) {
        super(options, {
            template: Tpl
        });
    }

    onInit() {

    	this.props.set({plugins: [{
    		name: 'Sortable',
    		route: 'plugins/sortable'
    	}]});

    	Plugins.Sortable.init({
    	    el: this.$refs.test
    	})
    }
}