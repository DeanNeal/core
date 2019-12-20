import { _style } from './style';
import { _value } from './value';
import { _pattern } from './pattern';
import { _if } from './if';
import { _class } from './class';
import { _elRef } from './elRef';
import { _for } from './for';
import { _model } from './model';
import { _attr } from './attr';
import { _input } from './input';
import { _link } from './link';
import { _events, removeEventListeners } from './event';
// import { _outside } from './outside';
import { _on } from './on';
import { _init, _initLoop, _initEvent } from './init';
import { _hostEvents, _hostAttr } from './host';
import { _formGroup } from './form-group';
import { _customDirective } from './custom-directive';
// import { _computed } from './computed';
// import { _dropdown } from './dropdown';
import { _lazy } from './lazy';

const Directives = {
    _style,
    _value,
    _pattern,
    _if,
    _class,
    _elRef,
    _for,
    _model,
    _attr,
    _input,
    _link,
    _events,
    // eventUnitCore,
    removeEventListeners,
    // _outside,
    _on,
    _init,
    _initLoop,
    _initEvent,
    _hostEvents,
    _hostAttr,
    _formGroup,
    _customDirective,
    // _computed,
    // _dropdown,
    _lazy
};

export { Directives };