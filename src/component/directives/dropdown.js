export function _dropdown(array, data, loopParams) {
    array.forEach(item => {
        let component = item.elem.COMPONENT;
        component._outside = ()=>{
            if (component.props.get('_show')) {
                component.props.set('_show', false)
                component.onClose && component.onClose();
            }
        }
        component._open = () => {
            if (component.getRoot().getAttribute('readonly') === null) {
                component.props.set('_show', !component.props.get('_show'));
                component.onOpen && component.onOpen();
            }
        }

        component._close = () => {
            if (component.props.get('_show')) {
                component.props.set('_show', false)
            }
        }

        component._onFocus = () => {
            component._open();
        }

        component.onDestroy = () => {

        }
    });
}