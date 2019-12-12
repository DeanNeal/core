export function _hostEvents(events) {
    for (let event in events) {
        let fn = events[event].bind(this);
        this.root.addEventListener(event, (e) => { fn.call(this, e, this) }, false);
    }
}

export function _hostAttr(params) {
    for (let key in params) {
        switch (key) {
            case 'style':
                bindStyle.call(this, params[key]);
                break;
            case 'class':
                bindClass.call(this, params[key]);
                break;
            default:
                bindAttr.call(this, params[key], key)
                break;
        }
    }
}

function bindClass(params) {
    let r = params.fn(this);
    if (params.prev) {
        this.host.classList.remove(params.prev);
    }
    params.prev = r;
    r ? this.host.classList.add(r) : this.host.classList.remove(r);
}


function bindStyle(params) {
    for (let key in params.fn) {
        let r = params.fn[key](this);
        this.host.style[key] = r;
    }
}

function bindAttr(params, attr) {
    let r = params.fn(this);

    if (attr === 'hidden') r = !!r;

    if (r) {
        this.host.setAttribute(attr, r);
    } else {
        this.host.removeAttribute(attr);
    }
}