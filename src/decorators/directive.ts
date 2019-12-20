import { IDecoratorParams } from "src/interfaces";

export class Directive {
    onUpdate() {

    }
}

export default function DirectiveDecorator(decoratorParams: IDecoratorParams) {
    return (Class) => {
        Object.setPrototypeOf(Class.prototype, Directive.prototype);
        Class.params = decoratorParams;
        Class.super = Directive;
        return Class;
    }
}