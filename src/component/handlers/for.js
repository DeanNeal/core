import {Component, Utils} from '../../core';
import {Handlers} from './index';
import {_init} from './init';

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
                    prevContent.removeAttribute('frameworkFor');
                    item.items.push(prevContent);
                    item.parent.insertBefore(prevContent, item.comment);
                    forAttachForLoop.call(this, prevContent, array[i]);
                    Handlers.eventListeners.call(this, prevContent, array[i]);
                    bindClassForLoop.call(this, prevContent, array[i]);
                    styleUnitForLoop.call(this, prevContent, array[i]);
                    // bindIfForLoop.call(this, prevContent, array[i]);de
                    bindPropsToViewForLoop.call(this, prevContent, array[i]);
                    bindAttrsForLoop.call(this, prevContent, array[i]);
                    addLinksRefsForLoop.call(this, prevContent, array[i]);
                }
                return;
            }

            if (item.cached.length !== array.length) {
                item.items.forEach(item => {
                    item.remove();
                });
                item.items = [];
                for (let i = 0; i <= array.length - 1; i++) {
                    window.temporaryObj = Object.assign({}, array[i]);
                    let q = document.createElement(compName);
                    item.items.push(q);
                    item.parent.insertBefore(q, item.comment);
                }
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

function addLinksRefsForLoop(root, data) {
    let array = Handlers._init(root, 'frameworkLink');
    Handlers._link.call(this, array, data);
}

function bindAttrsForLoop(root, data) {
    let array = Handlers._init(root, 'frameworkAttr');
    Handlers._attr.call(this, array, data);
}

// function bindIfForLoop(root, data) {
//     let array = Handlers._init(root, 'frameworkIf');
//     Handlers._if.call(this, array, data);
// }

function forAttachForLoop(root, data) {
    let array = Handlers._init(root, 'frameworkFor');
    Handlers._for.call(this, array, data);
}

function bindPropsToViewForLoop(root, data) {
    let array = Handlers._init(root, 'frameworkValue');
    Handlers._props.call(this, array, data);
}

function styleUnitForLoop(root, data) {
    let array = Handlers._init(root, 'frameworkStyle');
    Handlers._style.call(this, array, data);
}

function bindClassForLoop(root, data) {
    let array = Handlers._init(root, 'frameworkClass');
    Handlers._class.call(this, array, data);
}
