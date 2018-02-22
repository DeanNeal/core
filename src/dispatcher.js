class Dispatcher {
    constructor() {
        this.eventList = {};
    }

    subscribe(root, eventName, eventHandler) {
        if (this.eventList[eventName] === undefined) {
            this.eventList[eventName] = [];
        }
        this.eventList[eventName].push({ context: root, eventHandler });
    };

    unsubscribe(root, eventName, eventHandler) {
        if (this.eventList[eventName] === undefined) {
            console.error(`This event: ${eventName} does not exist`);
            return false;
        }

        this.eventList[eventName] = this.eventList[eventName].filter(listener => {
            return listener.context !== root;
        });
    }

    dispatch(eventName) {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        var eventList = this.eventList[eventName];
        if (eventList !== undefined) {
            for (var i in eventList) {
                eventList[i].eventHandler.apply(eventList[i].context, args);
            }
        }
    };
}
export default new Dispatcher();