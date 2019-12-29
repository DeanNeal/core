export function _hostEvents(events: any) {
    for (let event in events) {
        let fn = events[event].bind(this);
        this.root.addEventListener(event, (e) => { fn.call(this, e) }, false);
    }
}

export function _hostAttr(params: any) {
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

function bindClass(params: any) {
    let r = params.fn.call(this);
    if (params.prev) {
        this.host.classList.remove(params.prev);
    }
    params.prev = r;
    r ? this.host.classList.add(r) : this.host.classList.remove(r);
}


function bindStyle(params: any) {
    for (let key in params.fn) {
        let r = params.fn[key].call(this);
        this.host.style[key] = r;
    }
}

function bindAttr(params: any, attr: string) {
    let r = params.fn.call(this);

    if (attr === 'hidden') r = !!r;

    if (r) {
        this.host.setAttribute(attr, r);
    } else {
        this.host.removeAttribute(attr);
    }
}