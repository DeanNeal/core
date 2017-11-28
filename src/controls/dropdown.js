import { Component } from '../component/component';

export class DropdownComponent{
    openMenu(e) {
        if (this.getRoot().getAttribute('readonly') === null) {
            this.props.set('_show', !this.props.get('_show'));
            this.onOpen();
        }
    }

    outside() {
        if(this.props.get('_show')) {         
            this.onClose();
            this.close();
        }
    }

    onOpen() {

    }

    onClose() {

    }

    close() {
        if (this.props.get('_show')) {
            this.props.set('_show', false)
        }
    }
}