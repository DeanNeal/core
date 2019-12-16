import { Component, Utils } from '../../core';
import { Directives } from './index';
import { _init } from './init';
import { EVENTS_NAMES } from '../const/events';
// import API from'../../api';

import Interpolation from './../interpolation/interpolation';

export function _for(array, data, loopParams) {
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
                    if (params.indexOf('key') > -1) {
                        loopIterator.key = true
                    }
                    if (params.indexOf('index') > -1) {
                        loopIterator.index = true
                    }
                }, () => {
                    loopIterator.iterator = lParams;
                });

                try {
                    // arg = new Function(func).apply(data || this.props);
                    // arg = Utils.getDeepProp(data || this.props, collectionName) || [];
                    array = this.getPropsByScope(collectionName, data, loopParams);
                } catch (e) {
                    array = [];
                }
            }
            let keys;
            if (array && !Array.isArray(array)) { // if object
                keys = Object.keys(array);
                array = Object.keys(array).map(r => array[r]);
            }

            renderList.call(this, item, array, loopIterator, collectionName, keys);

        }); 
        // console.timeEnd('modules')

    }
}

function renderList(item, array, loopI, collectionName, keys) {
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
                //console.log(item.loopParams, loopI);
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

            //without update
            bindModelToViewForLoop.call(this, item.directives[i].model, item.loopParams[i], collectionName, array[i]);
            bindOnForLoop.call(this, item.directives[i].on);
        }
   
    }

    let curRootProps = Utils.JSONStr(this);

    item.items.forEach((elem, i) => {
        // if current or root prop has been changed
        if (Utils.JSONStr(item.cached[i]) !== Utils.JSONStr(array[i]) || curRootProps !== item.rootCached) {
            updateElement.call(this, item, i, array[i], item.loopParams[i]);
        }
    });

    item.rootCached = Utils.JSONStr(this);
    item.cached = JSON.parse(Utils.JSONStr(array));
}

function updateElement(item, i, data, loopParams) {
    forAttachForLoop.call(this, item.directives[i].for, data, loopParams);

    bindInterPolation.call(this, item.interpolationArray[i], data, loopParams);

    bindClassForLoop.call(this, item.directives[i].class, data, loopParams);
    styleUnitForLoop.call(this, item.directives[i].style, data, loopParams);
    bindIfForLoop.call(this, item.directives[i].if, data, loopParams);
    bindValueToViewForLoop.call(this, item.directives[i].value, data, loopParams);
    bindValueToViewForLoop.call(this, item.directives[i].model, data, loopParams);

    bindInputForLoop.call(this, item.directives[i].input, data, loopParams);


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

function bindInputForLoop(array, data, loopParams) {
    Directives._input.call(this, array, data, loopParams);
}

function bindOnForLoop(array, data, loopParams) {
    Directives._on.call(this, array, data, loopParams);
}