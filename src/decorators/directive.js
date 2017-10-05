export default function DirectiveDecorator(decoratorParams) {
    return function decorator(Class) {
        Class.params = decoratorParams;
        return Class;
    }
}