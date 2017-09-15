export class SmartObject {
    constructor(options) {
        this._data = options || {};
        this.lId = -1;
        if (options) {
            this.defineProperties(options);
        }

        this.callbacksArray = [];
    }

    defineProperties(options) {
        Object.keys(options).forEach(key => {
            this.defineProperty(key, options[key]);
        });
    }

    defineProperty(key, value) {
        Object.defineProperty(this, key, {
            set: value => this.set(key, value),
            get: () => this.get(key),
            configurable: true
        })
    }

    sub(f) {
        this.callbacksArray.push({f, id: ++this.lId});

        f.call(this, this._data);

        let a = Number(this.lId);
        return {
            unsubscribe: () => {
                // console.log(this.callbacksArray.length);
                this.unsubscribe(a);
            }
        }
    }

    unsubscribe(id) {
        this.callbacksArray = this.callbacksArray.filter(r => {
            return r.id !== id;
        });
        // console.log(this.callbacksArray);
    }

    clear() {
        this._data = {};
        this._callAll();
    }

    reset(data) {
        this._data = data;
        this.defineProperties(data);
        this._callAll();
    }

    set(data, value) {

        if (typeof data == 'object') {
            if (data.length || data.length === 0) {
                this._data = data;
            } else {
                for (let key in data) {
                    this._data[key] = data[key];
                }
                this.defineProperties(data);
            }
        } else {
            this.defineProperty(data, value);
            this._data[data] = value;
        }

        this._callAll();
    }

    get(key) {
        return this._data[key];
    }

    _callAll() {
        this.callbacksArray.forEach(r => {
            if (this._data) {
                r.f.call(this, this._data)
            }
        });
    }

    add(data, model) {
        if (typeof data === 'object') {
            this._data.push(data);
        } else {
            this[data].push(model);
        }

        this._callAll();
    }

    save(params) {
        let res = this._data.map(item => {
            if (item.id === params.id) {
                item = params;
            }
            return item;
        });
        this.set(res);
    }

    last() {
        return this._data[this._data.length - 1];
    }

    remove(id) {
        this._data = this._data.filter(item => item.id != id);
        this._callAll();
    }

}
