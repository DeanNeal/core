import { Component, Utils } from '../../core';
import { Directives } from './index';
import { _init } from './init';
import { EVENTS_NAMES } from '../const/events';
// import API from'../../api';

import Interpolation from '../interpolation/interpolation';
import { ILoopParams, IDirectiveParams, IEvent } from 'src/interfaces';

export function _for(array: IDirectiveParams[], loopParams: ILoopParams) {
    if (array.length) {
        // console.time('modules')
        array.forEach((item: IDirectiveParams) => {
            let loopIterator = { iterator: null, key: null, index: null };
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

            renderList.call(this, item, array, loopIterator, keys, loopParams);

        }); 
        // console.timeEnd('modules')

    }
}

function renderList(item: IDirectiveParams, array: any[], loopI, keys: any[], loopParams: ILoopParams) {
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
                    enumerable: true,
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

            EVENTS_NAMES.forEach((directive: string) => {
                eventsArray.push(Directives._initEvent.call(this, prevContent, directive, [], item.loopParams[i]));
            });
            item.directives[i].events = eventsArray;

            //without update
            // bindModelToViewForLoop.call(this, item.directives[i].model, item.loopParams[i]);
            Directives._model.call(this, item.directives[i].model, item.loopParams[i]);
            // bindOnForLoop.call(this, item.directives[i].on);
            Directives._on.call(this, item.directives[i].on, loopParams);
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

function updateElement(item: IDirectiveParams, i: number, loopParams: ILoopParams) {
    Directives._for.call(this, item.directives[i].for, loopParams);
    Interpolation._update.call(this, item.interpolationArray[i], loopParams);
    Directives._class.call(this, item.directives[i].class, loopParams);
    Directives._style.call(this, item.directives[i].style, loopParams);
    Directives._if.call(this, item.directives[i].if, loopParams);
    Directives._value.call(this, item.directives[i].value, loopParams);
    Directives._value.call(this, item.directives[i].model, loopParams);
    Directives._input.call(this, item.directives[i].input, loopParams);
    Directives._attr.call(this, item.directives[i].attrs, loopParams);
    Directives._link.call(this, item.directives[i].links, loopParams);
    eventsForLoop.call(this, item.directives[i].events);
}

function eventsForLoop(array: IDirectiveParams[]) {
    array = array.reduce((a, b) => a.concat(b), []);
    Directives._events.call(this, array);
}
