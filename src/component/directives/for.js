import { Component, Utils} from '../../core';
import { Directives } from './index';
import { _init } from './init';
import { EVENTS_NAMES } from '../const/events';
import API from'./../../api';



export function _for(array, data) {
    if (array.length) {
        //console.log(this); //console.time('modules')
        array.forEach(item => {
            let compName = item.elem.localName;
            let loopIterator;
            let collectionName;
            array = this.getComponentVariable(item.attr.split('.'), data) || [];


            if(item.attr.indexOf('let ') > -1 && item.attr.indexOf('of ') > -1) {
                let params1 = item.attr.split('of')[0];
                collectionName = item.attr.split('of')[1].replace(/ +/g, "");
                loopIterator = params1.split('let ')[1].replace(/ +/g, "");
                let func = `for(${params1} of this.${collectionName}) { } return this.${collectionName}`;

                let arg
                try {
                    arg = new Function(func).apply(data || this.props);
                } catch(e) {
                    arg = [];
                }
                 
                array = arg;
            }

            if (!Utils.isCustomElement(item.elem)) {

                if (item.cached.length !== array.length) {
                    item.items.forEach(item => {
                        item.remove();
                    });
                    item.items = [];
                    item.directives = [];
                    for (let i = 0; i <= array.length - 1; i++) {
                        let prevContent = item.elem.cloneNode(true);

                        // loop through the old element's attributes and give them to the new element
                        for (let i = 0; i < item.elem.attributes.length; i++) {
                            prevContent.setAttribute(item.elem.attributes[i].nodeName, item.elem.attributes[i].nodeValue);
                        }

                        item.items.push(prevContent);
                        item.parent.insertBefore(prevContent, item.comment);


                        item.directives[i] = {
                            for:   Directives._init.call(this, prevContent, 'ac-for'), // should go first for correct work
                            class: Directives._init.call(this, prevContent, 'ac-class'),
                            style: Directives._init.call(this, prevContent, 'ac-style'),
                            attrs: Directives._init.call(this, prevContent, 'ac-attr'),
                            if:    Directives._init.call(this, prevContent, 'ac-if'),
                            model: Directives._init.call(this, prevContent, 'ac-model'),
                            props: Directives._init.call(this, prevContent, 'ac-value'),
                            links: Directives._init.call(this, prevContent, 'ac-link'),
                            // events: eventsArray
                        };

                        let eventsArray = [];

                        EVENTS_NAMES.forEach(directive => {
                            let prop = getCurrentProperty.bind(this, item, collectionName, array[i], loopIterator);
                            eventsArray.push(Directives._initEvent.call(this, prevContent, directive, [], prop, loopIterator));
                        });
                        item.directives[i].events = eventsArray;

                        updateElement.call(this, item, i, prevContent, array[i], collectionName, loopIterator); 
                        bindModelToViewForLoop.call(this, item.directives[i].model, prevContent, loopIterator, collectionName, array[i]);
                    }
                }

                let curRootProps = JSONStr(this.props.getData());

                item.items.forEach((elem, i) => {
                    // if current or root prop has been changed 
                    if (JSONStr(item.cached[i]) !== JSONStr(array[i]) ||  curRootProps !== item.rootCached ) {
                        updateElement.call(this, item, i, elem, array[i], collectionName, loopIterator); 
                    }
                });

                item.rootCached = JSONStr(this.props.getData());
                item.cached = JSON.parse(JSONStr(array));
            }


            if (Utils.isCustomElement(item.elem)) {
                if (item.cached.length !== array.length) {
                    item.items.forEach(item => {
                        item.remove();
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
                item.cachedIndexes = item.items.map(r=> Utils.indexInParent(r))
            }

        }); //console.timeEnd('modules')

    }
}

// check for cyclic object references before stringifying
function JSONStr(obj) {
    let seen = []; 

    var replacer = function(key, value) {
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

function updateElement(item, i, elem, data, collectionName, loopIterator) {
    forAttachForLoop.call(this, item.directives[i].for, elem, data);

    bindClassForLoop.call(this, item.directives[i].class, elem, data, loopIterator);
    styleUnitForLoop.call(this, item.directives[i].style, elem, data, loopIterator);
    bindIfForLoop.call(this, item.directives[i].if, elem, data, loopIterator);
    bindPropsToViewForLoop.call(this, item.directives[i].props, elem, data, loopIterator);
    // bindModelToViewForLoop.call(this, item.directives[i].model, elem, collectionName, data);
    // bindPropsToViewForLoop.call(this, item.directives[i].model, elem, data);

    bindAttrsForLoop.call(this, item.directives[i].attrs, elem, data, loopIterator);
    addLinksRefsForLoop.call(this, item.directives[i].links, elem, data, loopIterator);
    eventsForLoop.call(this, item.directives[i].events, elem);
}

function getCurrentProperty(item, collectionName, data, loopIterator, variable) {
    let props = this.getPropsByScope(variable, data, loopIterator);
    return props;
}


function eventsForLoop(array, root) {
    // let array = [];

    // EVENTS_NAMES.forEach(directive => {
    //     array.push(Directives._initEvent.call(this, root, directive, [], context));
    // });

    array = array.reduce((a, b) => a.concat(b), []);
    Directives._events.call(this, array);
}


function addLinksRefsForLoop(array, root, data, loopIterator) {
    // let array = Directives._init.call(this, root, 'ac-link');
    Directives._link.call(this, array, data, loopIterator);
}

function bindAttrsForLoop(array, root, data, loopIterator) {
    // let array = Directives._init.call(this, root, 'ac-attr');
    Directives._attr.call(this, array, data, loopIterator);
}

function bindIfForLoop(array, root, data) {
    // let array = Directives._init(root, 'ac-if');
    Directives._if.call(this, array, data);
}

function forAttachForLoop(array, root, data) {
    // let array = Directives._init.call(this, root, 'ac-for');
    Directives._for.call(this, array, data);
}

function bindModelToViewForLoop(array, root, loopIterator, collectionName, data) {
    // let array = Directives._init.call(this, root, 'ac-value');
    Directives._model.call(this, array, loopIterator, collectionName, data);
}

function bindPropsToViewForLoop(array, root, data, loopIterator) {
    // let array = Directives._init.call(this, root, 'ac-value');
    Directives._props.call(this, array, data, loopIterator);
}

function styleUnitForLoop(array, root, data, loopIterator) {
    // let array = Directives._init.call(this, root, 'ac-style');
    Directives._style.call(this, array, data, loopIterator);
}

function bindClassForLoop(array, root, data, loopIterator) {
    // let array = Directives._init.call(this, root, 'ac-class');
    Directives._class.call(this, array, data, loopIterator);
}

function bindIfForLoop(array, root, data, loopIterator) {
    Directives._if.call(this, array, data, loopIterator);
}