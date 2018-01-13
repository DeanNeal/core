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

	injectorGet(service) {
		let injectedService = this._SERVICES.filter(r=> r === service)[0];
		let readyService = this._READY_SERVICES.filter(r=> r instanceof service.class);
		if(readyService.length) {
			return readyService[0];
		} else {
			console.log('SERVICE INIT');
			if(injectedService) {
				let readyService = new injectedService();
				this._READY_SERVICES.push(readyService);
				return readyService
			} else {
				throw new Error('Service doesn\'t exist; ' + service.class.name);
			}
		}
	}
}
	
export default new API();