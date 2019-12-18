import { Component, Utils } from '../../core';
import { Directives } from './index';
import { _init } from './init';
import { EVENTS_NAMES } from '../const/events';
// import API from'../../api';

import Interpolation from './../interpolation/interpolation';

export function _for(array, loopParams) {
    if (array.length) {
        // console.time('modules')
        array.forEach(item => {
            let loopIterator = { iterator: null };
            let collectionName;
            let array = [];

            if (item.attr.indexOf('let ') > -1 && item.attr.indexOf('of ') > -1) {
                let params1 = item.attr.split('of')[0];
                collectionName = item.attr.split('of')[1].replace(/ +/g, "");
                let lParams = params1.split('let ')[1].replace(/ +/g, "");
                // let func = `for(${params1} in this.${collectionName}) { } return this.${collectionName}`;
                Utils.getValueBetweenBrackets(lParams, (value) => {
                    let params = value.split(',');
                    loopIterator.iterator = params[0];
                    // if (params.indexOf('key') > -1) {
                    if(params[2]) {
                        loopIterator.key = true
                    }
                    // if (params.indexOf('index') > -1) {
                    if(params[1]) {
                        loopIterator.index = params[1];
                    }
                }, () => {
                    loopIterator.iterator = lParams;
                });
                
                try {
                    array = this.getPropsByScope(collectionName, loopParams);
                } catch (e) {
                    // array = [];
                    throw new Error(':for error: ' + e);
                }
            }
            let keys;
            if (array && !Array.isArray(array)) { // if object
                keys = Object.keys(array);
                array = Object.keys(array).map(r => array[r]);
            }

            renderList.call(this, item, array, loopIterator, collectionName, keys, loopParams);

        }); 
        // console.timeEnd('modules')

    }
}

function renderList(item, array, loopI, collectionName, keys, loopParams) {
    if (!array) throw new Error('Array is undefined: ' + this.constructor.name + '; ' + item.attr);

    if (item.cached.length !== array.length) {

        for (let i = 0; i <= array.length - 1; i++) {
            let prevContent = item.elem.cloneNode(true);


            item.items.push(prevContent);
            item.parent.insertBefore(prevContent, item.comment);

            item.directives[i] = {
                for: Directives._initLoop.call(this, prevContent, 'bind-for')
            }

            item.interpolationArray[i] = Interpolation._init.call(this, prevContent);

            item.directives[i] = Object.assign(item.directives[i], {
                class: Directives._initLoop.call(this, prevContent, 'bind-class'),
                style: Directives._initLoop.call(this, prevContent, 'bind-style'),
                attrs: Directives._initLoop.call(this, prevContent, 'bind-attr'),
                if: Directives._initLoop.call(this, prevContent, 'bind-if'),
                model: Directives._initLoop.call(this, prevContent, 'bind-model'),
                input: Directives._initLoop.call(this, prevContent, 'bind-params'),
                value: Directives._initLoop.call(this, prevContent, 'bind-value'),
                links: Directives._initLoop.call(this, prevContent, 'bind-link'),
                on: Directives._initLoop.call(this, prevContent, 'bind-on')
            });

            if (loopI) {
                const param = {
                    parent: loopParams,
                    iterator: loopI.iterator,
                    index: i,
                    indexName: loopI.index,
                    key: loopI.key && keys && keys[i]
                };

                Object.defineProperty(param, 'value', {
                    configurable: true,
                    get: ()=> {
                        return array[i];
                    },
                    set: (val)=> {
                        array[i] = val;
                    }
                });

                item.loopParams.push(param);
            }

            let eventsArray = [];

            EVENTS_NAMES.forEach(directive => {
                eventsArray.push(Directives._initEvent.call(this, prevContent, directive, [], item.loopParams[i]));
            });
            item.directives[i].events = eventsArray;

            //without update
            bindModelToViewForLoop.call(this, item.directives[i].model, item.loopParams[i]);
            bindOnForLoop.call(this, item.directives[i].on);
        }
   
    }

    let curRootProps = Utils.JSONStr(this);

    item.items.forEach((elem, i) => {
        // if current or root prop has been changed
        if (Utils.JSONStr(item.cached[i]) !== Utils.JSONStr(array[i]) || curRootProps !== item.rootCached) {
            updateElement.call(this, item, i, item.loopParams[i]);
        }
    });

    item.rootCached = Utils.JSONStr(this);
    item.cached = JSON.parse(Utils.JSONStr(array));
}

function updateElement(item, i, loopParams) {
    forAttachForLoop.call(this, item.directives[i].for, loopParams);

    bindInterPolation.call(this, item.interpolationArray[i], loopParams);

    bindClassForLoop.call(this, item.directives[i].class, loopParams);
    styleUnitForLoop.call(this, item.directives[i].style, loopParams);
    bindIfForLoop.call(this, item.directives[i].if, loopParams);
    bindValueToViewForLoop.call(this, item.directives[i].value, loopParams);
    bindValueToViewForLoop.call(this, item.directives[i].model, loopParams);

    bindInputForLoop.call(this, item.directives[i].input, loopParams);


    bindAttrsForLoop.call(this, item.directives[i].attrs, loopParams);
    addLinksRefsForLoop.call(this, item.directives[i].links, loopParams);
    eventsForLoop.call(this, item.directives[i].events);
}

function eventsForLoop(array) {
    array = array.reduce((a, b) => a.concat(b), []);
    Directives._events.call(this, array);
}

function addLinksRefsForLoop(array, loopParams) {
    Directives._link.call(this, array, loopParams);
}

function bindAttrsForLoop(array, loopParams) {
    Directives._attr.call(this, array, loopParams);
}

function forAttachForLoop(array, loopParams) {
    Directives._for.call(this, array, loopParams);
}

function bindModelToViewForLoop(array, loopParams) {
    Directives._model.call(this, array, loopParams);
}

function bindValueToViewForLoop(array, loopParams) {
    Directives._value.call(this, array, loopParams);
}

function styleUnitForLoop(array, loopParams) {
    Directives._style.call(this, array, loopParams);
}

function bindClassForLoop(array, loopParams) {
    Directives._class.call(this, array, loopParams);
}

function bindIfForLoop(array, loopParams) {
    Directives._if.call(this, array, loopParams);
}

function bindInterPolation(array, loopParams) {
    Interpolation._update.call(this, array, loopParams);
}

function bindInputForLoop(array, loopParams) {
    Directives._input.call(this, array, loopParams);
}

function bindOnForLoop(array, loopParams) {
    Directives._on.call(this, array, loopParams);
}