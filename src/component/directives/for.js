import { Component, Utils} from '../../core';
import { Directives } from './index';
import { _init } from './init';
import { EVENTS_NAMES } from '../const/events';
import API from'./../../api';

import Interpolation from './../interpolation/interpolation';

export function _for(array, data, loopParams) {
    if (array.length) {
        //console.log(this); //console.time('modules')
        array.forEach(item => {
            let compName = item.elem.localName;
            let loopIterator = {iterator: null};
            let collectionName;
            let array = [];//this.getComponentVariable(item.attr.split('.'), data) || [];
            // let additionalParams = {};

            if(item.attr.indexOf('let ') > -1 && item.attr.indexOf('of ') > -1) {
                let params1 = item.attr.split('of')[0];
                collectionName = item.attr.split('of')[1].replace(/ +/g, "");
                let lParams = params1.split('let ')[1].replace(/ +/g, "");
                // let func = `for(${params1} in this.${collectionName}) { } return this.${collectionName}`;
                Utils.getValueBetweenBrackets(lParams, (value)=>{
                    let params = value.split(',');
                    loopIterator.iterator = params[0];
                    if(params.indexOf('key') > -1) {
                        loopIterator.key = true
                    } 
                    if(params.indexOf('index') > -1) {
                        loopIterator.index = true
                    }
                }, () =>{
                    loopIterator.iterator = lParams;
                });

                try {
                    // arg = new Function(func).apply(data || this.props);
                    // arg = Utils.getDeepProp(data || this.props, collectionName) || [];
                    array = this.getPropsByScope(collectionName, data, loopParams);
                } catch(e) {
                    array = [];
                }
            }
            let keys;
            if(array && !Array.isArray(array)) { // if object
                keys = Object.keys(array);
                array = Object.keys(array).map(r=> array[r]);
            }

            if (Utils.isCustomElement(item.elem)) {
                customElements.call(this, item, array, compName);
            } else {
                nativeElements.call(this, item, array, loopIterator, collectionName, keys);
            }
        }); //console.timeEnd('modules')

    }
}

function nativeElements(item, array, loopI, collectionName, keys) {
    if (item.cached.length !== array.length) {
        item.items.forEach(item => {
            item.remove();
        });
        item.items = [];
        item.directives = [];
        item.interpolationArray = [];
        item.loopParams = [];

        for (let i = 0; i <= array.length - 1; i++) {
            let prevContent = item.elem.cloneNode(true);

            // loop through the old element's attributes and give them to the new element
            for (let i = 0; i < item.elem.attributes.length; i++) {
                prevContent.setAttribute(item.elem.attributes[i].nodeName, item.elem.attributes[i].nodeValue);
            }

            item.items.push(prevContent);
            item.parent.insertBefore(prevContent, item.comment);

            item.directives[i] = {
                for:   Directives._init.call(this, prevContent, 'bind-for')
            }

            item.interpolationArray[i] = Interpolation._init.call(this, prevContent);

            item.directives[i] = Object.assign(item.directives[i], {
                // for:   Directives._init.call(this, prevContent, 'bind-for'), // should go first for correct work
                class: Directives._init.call(this, prevContent, 'bind-class'),
                style: Directives._init.call(this, prevContent, 'bind-style'),
                attrs: Directives._init.call(this, prevContent, 'bind-attr'),
                if:    Directives._init.call(this, prevContent, 'bind-if'),
                model: Directives._init.call(this, prevContent, 'bind-model'),
                props: Directives._init.call(this, prevContent, 'bind-value'),
                links: Directives._init.call(this, prevContent, 'bind-link')
            });

            if(loopI) {
                item.loopParams.push({
                    iterator: loopI.iterator,
                    index: loopI.index && i,
                    key: loopI.key && keys && keys[i]
                });
            }

            let eventsArray = [];

            EVENTS_NAMES.forEach(directive => {
                eventsArray.push(Directives._initEvent.call(this, prevContent, directive, [], array[i], item.loopParams[i]));
            });
            item.directives[i].events = eventsArray;

            // updateElement.call(this, item, i, array[i], item.loopParams[i]);
            bindModelToViewForLoop.call(this, item.directives[i].model, item.loopParams[i], collectionName, array[i]);
        }
    }

    let curRootProps = JSONStr(this.props.getData());

    item.items.forEach((elem, i) => {
        // if current or root prop has been changed
        if (JSONStr(item.cached[i]) !== JSONStr(array[i]) ||  curRootProps !== item.rootCached ) {
            updateElement.call(this, item, i, array[i], item.loopParams[i]);
        }
    });

    item.rootCached = JSONStr(this.props.getData());
    item.cached = JSON.parse(JSONStr(array));
}

function customElements(item, array, compName) {
    if (item.cached.length !== array.length) {
        item.items.forEach(item => {
            item.COMPONENT && item.COMPONENT.destroy();
        });
        item.items = [];
        this.children[item.elem.COMPONENT.constructor.name] = [];
        for (let i = 0; i <= array.length - 1; i++) {
            let newComp = API.COMPONENTS.filter(r => r.selector === compName)[0];
            // if(newComp) {
            let newEl = document.createElement(compName);
            // this.root.appendChild(newEl);
            let instance = new newComp(newEl, array[i], this);
            this.children[item.elem.COMPONENT.constructor.name].push(instance);
            // }

            // loop through the old element's attributes and give them to the new element
            for (let i = 0; i < item.elem.attributes.length; i++) {
                newEl.setAttribute(item.elem.attributes[i].nodeName, item.elem.attributes[i].nodeValue);
            }
            item.items.push(newEl);
            item.parent.insertBefore(newEl, item.comment);
        }
        item.cached = []; // refresh cached array
        item.cachedIndexes = item.items.map(r=> Utils.indexInParent(r))
    }

    item.items.forEach((elem, i) => {
        if (Utils.indexInParent(elem) !== item.cachedIndexes[i]) { // check if order was changed
            elem.parentNode.insertBefore(elem, elem.parentNode.children.item(i));
        }

        if (JSONStr(item.cached[i]) !== JSONStr(array[i])) {
            if (!elem.COMPONENT) {
                console.warn('Please create component with name ' + compName);
                return
            }
            elem.COMPONENT.props.set(array[i]);
        }
    });

    item.cached = JSON.parse(JSONStr(array));
    item.cachedIndexes = item.items.map(r=> Utils.indexInParent(r));
}

// check for cyclic object references before stringifying
function JSONStr(obj) {
    let seen = []; 

    let replacer = function(key, value) {
      if (value != null && typeof value == "object") {
        if (seen.indexOf(value) >= 0) {
          return;
        }
        seen.push(value);
      }
      return value;
    };

    return JSON.stringify(obj, replacer); 
}

function updateElement(item, i, data, loopParams) {
    forAttachForLoop.call(this, item.directives[i].for, data, loopParams);

    bindInterPolation.call(this, item.interpolationArray[i], data, loopParams);

    bindClassForLoop.call(this, item.directives[i].class, data, loopParams);
    styleUnitForLoop.call(this, item.directives[i].style, data, loopParams);
    bindIfForLoop.call(this, item.directives[i].if, data, loopParams);
    bindValueToViewForLoop.call(this, item.directives[i].props, data, loopParams);
    bindValueToViewForLoop.call(this, item.directives[i].model, data, loopParams);

    bindAttrsForLoop.call(this, item.directives[i].attrs, data, loopParams);
    addLinksRefsForLoop.call(this, item.directives[i].links, data, loopParams);
    eventsForLoop.call(this, item.directives[i].events);
}

function eventsForLoop(array) {
    array = array.reduce((a, b) => a.concat(b), []);
    Directives._events.call(this, array);
}

function addLinksRefsForLoop(array, data, loopParams) {
    Directives._link.call(this, array, data, loopParams);
}

function bindAttrsForLoop(array, data, loopParams) {
    Directives._attr.call(this, array, data, loopParams);
}

function forAttachForLoop(array, data, loopParams) {
    Directives._for.call(this, array, data, loopParams);
}

function bindModelToViewForLoop(array, loopParams, collectionName, data) {
    Directives._model.call(this, array, loopParams, collectionName, data);
}

function bindValueToViewForLoop(array, data, loopParams) {
    Directives._value.call(this, array, data, loopParams);
}

function styleUnitForLoop(array, data, loopParams) {
    Directives._style.call(this, array, data, loopParams);
}

function bindClassForLoop(array, data, loopParams) {
    Directives._class.call(this, array, data, loopParams);
}

function bindIfForLoop(array, data, loopParams) {
    Directives._if.call(this, array, data, loopParams);
}

function bindInterPolation(array, data, loopParams) {
   Interpolation._update.call(this, array, data, loopParams);
}