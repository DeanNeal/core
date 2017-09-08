const PRIVATES = {
    _subscriptions: new WeakMap(),
    _hostEvents: new WeakMap(),
    _hostClasses: new WeakMap(),
    _hostStyles: new WeakMap(),
    _eventsArray: new WeakMap(),
    _forArrays: new WeakMap(),
    _styleArrays: new WeakMap(),
    _linksRefs: new WeakMap(),
    _routeArrays: new WeakMap(),
    _valueArrays: new WeakMap(),
    _inputArrays: new WeakMap(),
    _modelArrays: new WeakMap(),
    _ifArrays: new WeakMap(),
    _classArrays: new WeakMap(),
    _refArrays: new WeakMap(),
    _attrArrays: new WeakMap(),
    _outsideArrays: new WeakMap(),
    _patternArrays: new WeakMap(),
    _globalEvents: new WeakMap()
};

export default PRIVATES;