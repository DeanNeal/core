import { IfObject, IfArray } from '../decorators';
// import deepmerge from 'deepmerge';
// import objectMerge from 'object-merge';
// import merge from 'merge';

class AbstractObservable {
    constructor(options) {
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
        this.callbacksArray.push({ f, id: ++this.lId });

        f.call(this, this._data);

        let a = Number(this.lId);
        return {
            listeners: this.callbacksArray,
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

    getData() {
        return this._data;
    }

    get(key) {
        return this._data[key];
    }

    _callAll() {
        this.callbacksArray.forEach(r => {
            // if (this._data) {
            r.f.call(this, this._data)
            // }
        });
    }
}



@IfObject
export class ObservableModel extends AbstractObservable {
    constructor(options) {
        super(options);
        this._data = options || {};
    }

    reset(data) {
        this._data = data;
        this.defineProperties(data);
        this._callAll();
    }

    set(data, value, silent) {
        if (typeof data == 'object') {
            this._data = Object.assign({}, this._data, data);
            this.defineProperties(data);
        } else {
            this.defineProperty(data, value);
            this._data[data] = value;
        }

        if (!silent) {
            this._callAll();
        }
    }
}


@IfArray
export class ObservableCollection extends AbstractObservable {
    constructor(options) {
        super(options);
    }

    set(data, value, silent) {
        this._data = data;
        if (!silent) {
            this._callAll();
        }
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

    first() {
        return this._data[0];
    }

    filter(cb) {
        return this._data.filter(cb);
    }

    sort(cb) {
        return this._data.sort(cb);
    }

    splice(cb) {
        return this._data.splice(cb);
    }

    splice(cb) {
        return this._data.splice(cb);
    }

    slice(...rest) {
        return this._data.slice(rest);
    }

    pop() {
        return this._data.pop();
    }

    reverse() {
        this._data.reverse();
        this._callAll();
    }

    push(data, model) {
        this._data.push(data);
        this._callAll();
    }


    shift() {
        this._data.shift(data);
        this._callAll();
    }

    unshift(data, model) {
        this._data.unshift(data);
        this._callAll();
    }

    remove(id) {
        this._data = this._data.filter(item => item.id != id);
        this._callAll();
    }

}

export class ObservableBoolean extends AbstractObservable {
    constructor(options) {
        super(options);
        this._data = options || false;
    }

    set(data, silent) {
        if (typeof data == 'boolean') {
            this._data = data;
        } else {
            throw new Error('Only boolean');
        }

        if (!silent) {
            this._callAll();
        }
    }
}

export class ObservableString extends AbstractObservable {
    constructor(options) {
        super(options);
        this._data = options || false;
    }

    set(data, silent) {
        if (typeof data == 'string') {
            this._data = data;
        } else {
            throw new Error('Only string');
        }

        if (!silent) {
            this._callAll();
        }
    }
}

export class ObservableNumber extends AbstractObservable {
    constructor(options) {
        super(options);
        this._data = options || false;
    }

    set(data, silent) {
        if (typeof data == 'number') {
            this._data = data;
        } else {
            throw new Error('Only number');
        }

        if (!silent) {
            this._callAll();
        }
    }
}


export class Observable {
    constructor(options) {
        return this.checkType(options);
    }

    checkType(options) {
        if (Array.isArray(options)) {
            return new ObservableCollection(options);
        } else if (typeof options === 'object') {
            return new ObservableModel(options);
        } else if (typeof options === 'number') {
            return new ObservableNumber(options);
        } else if (typeof options === 'string') {
            return new ObservableString(options);
        } else if (typeof options === 'boolean') {
            return new ObservableBoolean(options);
        } else {
            throw new Error('Initial value must be set');
        }
    }
}