export function _hostEvents(events) {
    for (let event in events) {
        let fn = this[events[event]].bind(this);
        this.root.addEventListener(event, fn, false);
    }
}

export function _hostClasses(hostClasses) {
    for (let className in hostClasses) {
        let attr = hostClasses[className];
        let reverse = false;
        if (attr[0] === '!') {
            attr = attr.substr(1);
            reverse = true;
        }

        let r = this.getComponentVariable(attr.split('.'));
        r = reverse ? !r : r;
        r ? this.root.classList.add(className) : this.root.classList.remove(className);
    }
}

export function _hostStyles(hostStyles) {
    for (let styleName in hostStyles) {
        if (typeof hostStyles[styleName].value === 'string') {
            let r = this.getComponentVariable(hostStyles[styleName].value.split('.'));
            this.root.style[styleName] = r + (hostStyles[styleName].suffix || '');
        } else {
            this.root.style[styleName] = hostStyles[styleName].value + hostStyles[styleName].preffix;
        }
    }
}

export function _hostHidden(params) {
    if (params.prop) {
        let r = this.getComponentVariable(params.prop.split('.'));
        // console.log(this);
        if (r) {
            params.cached.removeAttribute('hidden');
        } else {
            params.cached.setAttribute('hidden', true);
        }
    }
}