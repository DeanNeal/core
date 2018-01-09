import { ObservableModel } from './observable/observable';

class HttpModule {
    constructor() {
        this.server = '';
    }

    onProgress(f) {
        if(f && f.constructor) {
            this.onprogressCallback = f;
        } else {
            console.warn('Passed data must be a function');
        }
    }

    onError(f) {
        if(f && f.constructor) {
            this.onerrorCallback = f;
        } else {
            console.warn('Passed data must be a function');
        }
    }

    makeRequest(opts) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open(opts.method, this.server + opts.url);
            xhr.onprogress = (event)=> {
                if(this.onprogressCallback){
                    this.onprogressCallback.call(this, event)
                }
            }
            xhr.onload = function() {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText,
                        response: JSON.parse(xhr.response)
                    });
                }
            };
            xhr.onerror = function() {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };

            if (opts.headers) {
                for(let key of opts.headers.keys()) {
                    xhr.setRequestHeader(key, opts.headers.get(key));
                }
            }

            let params = opts.params;

            if (opts.method.toLowerCase() === 'get') {
                if (params && typeof params === 'object') {
                    params = Object.keys(params).map(function(key) {
                        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
                    }).join('&');
                }
            }

            if (opts.method.toLowerCase() === 'post' || opts.method.toLowerCase() === 'put') {
                params = JSON.stringify(params);
            }

            xhr.send(params);
        });
    }

    // getParams(params) {
    //     if (params && typeof params === 'object') {
    //         params = Object.keys(params).map(function(key) {
    //             return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    //         }).join('&');
    //     }
    //     return params;
    // }


    get(url, params, headers) {
        return this.makeRequest({ method: 'get', url, params, headers});
    }

    post(url, params, headers) {
        return this.makeRequest({ method: 'post', url, params, headers });
    }

    put(url, params, headers) {
        return this.makeRequest({ method: 'put', url, params, headers });
    }

    delete(url, params, headers) {
        return this.makeRequest({ method: 'delete', url, params: {}, headers });
    }

    setServerUrl(url) {
        this.server = url;
    }

    setInterceptor() {
        //TODO
    }

}

let Http = new HttpModule();
export { Http }