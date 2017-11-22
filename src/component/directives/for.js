import { Component, Utils } from '../../core';
import { Directives } from './index';
import { _init } from './init';
import { EVENTS_NAMES } from '../const/events';

export function _for(array, data) {
    if (array.length) {
        //console.log(this); //console.time('modules')
        array.forEach(item => {
            let compName = item.elem.localName;

            array = this.getComponentVariable(item.attr.split('.'), data) || [];

            if (!Utils.isCustomElement(item.elem)) {
                item.items.forEach(item => {
                    item.remove();
                });
                item.items = [];
                for (let i = 0; i <= array.length - 1; i++) {
                    let prevContent = item.elem.cloneNode(true);

                    // loop through the old element's attributes and give them to the new element
                    for (let i = 0; i < item.elem.attributes.length; i++) {
                        prevContent.setAttribute(item.elem.attributes[i].nodeName, item.elem.attributes[i].nodeValue);
                    }

                    item.items.push(prevContent);
                    item.parent.insertBefore(prevContent, item.comment);

                    forAttachForLoop.call(this, prevContent, array[i]);
                    bindClassForLoop.call(this, prevContent, array[i]);
                    styleUnitForLoop.call(this, prevContent, array[i]);
                    bindIfForLoop.call(this, prevContent, array[i]);
                    bindPropsToViewForLoop.call(this, prevContent, array[i]);
                    bindAttrsForLoop.call(this, prevContent, array[i]);
                    addLinksRefsForLoop.call(this, prevContent, array[i]);

                    eventsForLoop.call(this, prevContent, array[i]);
                }
                return;
            }

            if (item.cached.length !== array.length) {
                item.items.forEach(item => {
                    item.remove();
                });
                item.items = [];
                this.children[item.elem.COMPONENT.constructor.name] = [];
                for (let i = 0; i <= array.length - 1; i++) {
                    let newComp = Component.COMPONENTS.filter(r=> r.selector === compName)[0];
                    // if(newComp) {
                        let newEl = document.createElement(compName);
                        // this.root.appendChild(newEl);
                        let a = new newComp(newEl, Object.assign({}, array[i]));
                        this.children[item.elem.COMPONENT.constructor.name].push(a);
                    // }

                    // loop through the old element's attributes and give them to the new element
                    for (let i = 0; i < item.elem.attributes.length; i++) {
                        newEl.setAttribute(item.elem.attributes[i].nodeName, item.elem.attributes[i].nodeValue);
                    }
                    item.items.push(newEl);
                    item.parent.insertBefore(newEl, item.comment);
                }
                item.cached = []; // refresh cached array
            }

            item.items.forEach((elem, i) => {
                if (JSON.stringify(item.cached[i]) !== JSON.stringify(array[i])) {
                    if (!elem.COMPONENT) {
                        console.warn('Please create component with name ' + compName);
                        return
                    }
                    elem.COMPONENT.props.set(array[i]);
                }
            });

            item.cached = JSON.parse(JSON.stringify(array));
        }); //console.timeEnd('modules')

    }
}


function eventsForLoop(root, context) {
    let array = [];

    EVENTS_NAMES.forEach(directive => {
        array.push(Directives._initEvent.call(this, root, directive, [], context));
    });

    array = array.reduce((a, b) => a.concat(b), []);
    Directives._events.call(this, array);
}


function addLinksRefsForLoop(root, data) {
    let array = Directives._init.call(this, root, 'ac-link');
    Directives._link.call(this, array, data);
}

function bindAttrsForLoop(root, data) {
    let array = Directives._init.call(this, root, 'ac-attr');
    Directives._attr.call(this, array, data);
}

function bindIfForLoop(root, data) {
    let array = Directives._init(root, 'ac-if');
    Directives._if.call(this, array, data);
}

function forAttachForLoop(root, data) {
    let array = Directives._init.call(this, root, 'ac-for');
    Directives._for.call(this, array, data);
}

function bindPropsToViewForLoop(root, data) {
    let array = Directives._init.call(this, root, 'ac-value');
    Directives._props.call(this, array, data);
}

function styleUnitForLoop(root, data) {
    let array = Directives._init.call(this, root, 'ac-style');
    Directives._style.call(this, array, data);
}

function bindClassForLoop(root, data) {
    let array = Directives._init.call(this, root, 'ac-class');
    Directives._class.call(this, array, data);
}