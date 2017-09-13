import { _style } from './style';
import { _props } from './props';
import { _pattern } from './pattern';
import { _if } from './if';
import { _class } from './class';
import { _elRef } from './elRef';
import { _for } from './for';
import { _model } from './model';
import { _attr } from './attr';
import { _input } from './input';
import { _link, setActiveLink } from './link';
import { eventUnitCore, eventListeners, removeEventListeners } from './event';
import { _outside } from './outside';
import { _on } from './on';
import { _init } from './init';
import { _hostEvents, _hostClasses, _hostStyles } from './host';

const Directives = {
    _style,
    _props,
    _pattern,
    _if,
    _class,
    _elRef,
    _for,
    _model,
    _attr,
    _input,
    _link,
    setActiveLink,
    eventUnitCore,
    eventListeners,
    removeEventListeners,
    _outside,
    _on,
    _init,
    _hostEvents,
    _hostClasses,
    _hostStyles
};

export { Directives };