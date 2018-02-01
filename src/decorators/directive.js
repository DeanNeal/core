export class Directive {

}

export default function DirectiveDecorator(decoratorParams) {
    return function decorator(Class) {
        Class.params = decoratorParams;
        Class.prototype = Object.setPrototypeOf(Class.prototype, Directive.prototype);
        Class.super =  Directive;
        return Class;
    }
}