import API from'../api';

export default function Inject(decoratorParams) {
    return function decorator(Class) {
        let func = () => {
            let injected = [];
            for(let key in decoratorParams) {
                if(decoratorParams.hasOwnProperty(key) && decoratorParams[key]){
                    let injectedService = API.injectorGet(decoratorParams[key], Class);
                    injected.push(injectedService);
                }
            }    
            
            let instance = new Class(...injected);
            return instance;
        };

        func.class = Class;
        
        return func;
    }
}