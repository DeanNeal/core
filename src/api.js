import { ObservableBoolean } from './observable/observable';

class API {
	constructor() {
		this.isReady = new ObservableBoolean(false);
		this.config = {};
		this.COMPONENTS = [];
		this.CUSTOM_DIRECTIVES = [];
		this._SERVICES = [];
		this._READY_SERVICES = [];
	}

	setServices(options) {
		options.forEach(r=>{
			if(Array.isArray(r)){
				r.forEach(r=>{
					this._SERVICES.push(r);
				})
			} else {
				this._SERVICES.push(r);
			}
		});
	}

	injectorGet(service, Class) {
		let instanceName = (Class ? Class.name : '');
		if(typeof service !== 'function') {
			throw new Error('Is not a service; ' + instanceName);
		}

		let injectedService = this._SERVICES.filter(r=> r === service)[0];
		let readyService = this._READY_SERVICES.filter(r=> r instanceof service.class);
		if(readyService.length) {
			return readyService[0];
		} else {
			if(injectedService) {
				let readyService = new injectedService();
				this._READY_SERVICES.push(readyService);
				return readyService
			} else {
				throw new Error('Service doesn\'t exist; ' + service.class.name + '; ' + instanceName);
			}
		}
	}
}
	
export default new API();