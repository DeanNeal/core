import {SmartObject} from './model/model';

const methods = ['get', 'post', 'put', 'delete'];

export const server = 'http://tripsee-app.ace-st.com';


// @Injectable()
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

// base collection class
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


class HttpFetcher {
    constructor() {

    }

    get(url) {
        return this.request('get', url);
    }
    post(url) {
        return this.request('post', url);
    }
    put(url) {
        return this.request('put', url);
    }
    delete(url) {
        return this.request('delete', url);
    }
    request(type, url) {
        return fetch(url, {
            method: type
        })
    }
}

class HttpModule {
    constructor() {
        this.http = new HttpFetcher();
        this.catalog = new SmartObject();
    }

    // get entry point
    get() {
        this.http.get(server + '/catalog')
            .then(res => res.json())
            .then(res => {
                this.catalog.set({'entry': this.getModel(res)});
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
                                    return context.makeRequest(method, link.href, params, id);
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
    makeRequest(method, url, args = {}, id = '') {
        let sub;
        const context = this;
        // MayBe(id).on(r => url += '/' + id);
        switch (method) {
            case 'get':
                const params = new URLSearchParams();
                for (let key in args) {
                    params.set(key, args[key]);
                }
                
                sub = this.middleware(this.http[method](server + url, { search: params, headers: context.getGetHeaders() }));
                break;
            case 'post':
                sub = this.middleware(this.http[method](server + url, args, this.getHeaders()));
                break;
            case 'put':
                sub = this.middleware(this.http[method](server + url, args, this.getHeaders()));
                break;
            case 'delete':
                sub = this.middleware(this.http[method](server + url, this.getHeaders()));
                break;
        }


        return sub;
    }

    //
    middleware(response) {
        return response
              .then(res => res.json())
              .then(res => this.createEntity(res))
              .catch(err => {
                switch (err.status) {
                    case 406:

                        break;
                    case 422:
                        break;
                    case 404:
                        break;
                    case 500:
                    case 502:
                        break;
                    default:

                        break;
                }

                return null;
            });
    }

    getHeaders() {
        const headers = new Headers();
        let token = JSON.parse(localStorage.getItem('token'));
        if(token) {
          headers.append('Authorization', `Bearer ${token}`);
        }
        return new RequestOptions({ headers: headers });
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
