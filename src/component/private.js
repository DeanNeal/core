// import { EVENTS } from './const/events';
import { DIRECTIVES_NAMES } from './const/directives';

const PRIVATES = {
    DIRECTIVES: {},
    CUSTOM_DIRECTIVES: {},
    EVENTS: new WeakMap(),
    SUBSCRIPTIONS: new WeakMap(),
    // GLOBAL_EVENTS: new WeakMap(),
    HOST: {
        CLASS: new WeakMap(),
        STYLE: new WeakMap(),
        EVENTS: new WeakMap(),
        HIDDEN: new WeakMap()
    },
    COMPUTED: new WeakMap(),
    INTERPOLATION: new WeakMap()
};

DIRECTIVES_NAMES.forEach(directive => {
    PRIVATES.DIRECTIVES[directive] = new WeakMap();
});


export { PRIVATES };