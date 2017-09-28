import { ObservableModel } from './observable/observable';

const methods = ['get', 'post', 'put', 'delete'];

export class Model {
    constructor(res) {
        this.links = {};
        this.data = res.data;
        this.collection = null;
    }

    remove() {
        this.collection.remove(this);
    }

    set(key, value) {
        this.data[key] = value;
    }

    get(key) {
        return this.data[key];
    }
}


export class Collection {
    constructor(options = []) {
        this.links = {};
        this.models = options.map(model => {
            model.collection = this;
            return model;
        });
    }

    first() {
        return this.models[0] ? this.models[0] : null;
    }

    // add model to collection
    add(model) {
        this.models.push(model);
    }

    unshift(model) {
        this.models.unshift(model);
    }

    remove(model) {
        this.models.forEach((item, i) => {
            if (model === item) {
                this.models.splice(i, 1);
            }
        });
    }

    find(id) {
        const model = this.models.filter(item => {
            return item.data._id == id;
        })[0];
        return model;
    }

    findBy(name, id) {
        return this.models.filter(item => {
            return item.data[name] == id;
        })[0] || {};
    }

    findAllBy(name, id) {
        return this.models.filter(item => {
            return item.data[name] == id;
        }) || [];
    }
}



class HttpModule {
    constructor() {
        this.catalog = new ObservableModel();
        this.server = '';
    }

    makeRequest(opts) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(opts.method, this.server + opts.url);
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

    getParams(params) {
        if (params && typeof params === 'object') {
            params = Object.keys(params).map(function(key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }).join('&');
        }
        return params;
    }


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

    // get entry point
    getCatalog(url) {
        return this.hMRequest('get', url)
            .then(res => {
                this.catalog.set(res);
                return res;
            });
    }

    getModel(response) {
        const context = this;
        class FactoryModel extends Model {
            constructor(options) {
                super(options);
                if (response.links) {
                    response.links.map(link => {
                        this.links[`${link.rel}`] = link.href; // for access to raw link
                        methods.forEach(method => {
                            if (link.href) {
                                this[`${method}_${link.rel}`] = (params, id) => {
                                    return context.hMRequest(method, link.href, params, id);
                                };
                            }
                        });
                    });
                }

            }
        }

        return new FactoryModel(response);
    }

    // creates new collection
    getCollection(response) {
        const models = response.map(model => this.getModel(model));
        class FactoryCollection extends Collection {
            constructor(models) {
                super(models);
            }
        }

        return new FactoryCollection(models);
    }

    // makes request with current params
    hMRequest(method, url, args = {}, id = '') {
        let sub;
        const context = this;

        if(id) {
            url += '/' + id
        }

        switch (method) {
            case 'get':
                sub = this.middleware(this[method](url, args, this.getGetHeaders()));
                break;
            case 'post':
                sub = this.middleware(this[method](url, args, this.getHeaders()));
                break;
            case 'put':
                sub = this.middleware(this[method](url, args, this.getHeaders()));
                break;
            case 'delete':
                sub = this.middleware(this[method](url, this.getHeaders()));
                break;
        }


        return sub;
    }

    // 
    middleware(response) {
        return response
            // .then(res => JSON.parse(res))
            .then(res => this.createEntity(res))
            .catch(err => {
                return Promise.reject(err)
            });
    }

    getHeaders() {
        const headers = new Headers();
        let token = localStorage.getItem('token');
        headers.append('Content-Type', `application/json`);
        if (token) {
            headers.append('Authorization', `Bearer ${token}`);
        }
        return headers;
    }

    getGetHeaders() {
        const headers = new Headers();
        return headers;
    }

    createEntity(response) {
        let result;
        if (response instanceof Array) {
            if (response[0] && response[0].data) {
                result = this.getCollection(response);
            } else {
                result = new Collection();
                response.forEach(item => {
                    result.add({ label: item, id: item });
                });
            }
        } else if (response.data) {
            result = this.getModel(response);
        }
        return result;
    }

}

let Http = new HttpModule();
export { Http }