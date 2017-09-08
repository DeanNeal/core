import {Component} from 'framework/core';
import Tpl from './bar.component.html';
import ProjectsStore from 'stores/projects.store';

export class BarComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl,
            hostClasses: {
                selected: 'props.selected',
                hidden: '!props.visible'
            },
            hostStyles: {
                width: {value: 'props.maxWidth', suffix: 'px'}
            }
        });
    }

    onInit() {
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onResizeLeftMove = this.onResizeLeftMove.bind(this);
        this.onResizeRightMove = this.onResizeRightMove.bind(this);
        this.onResizeEnd = this.onResizeEnd.bind(this);
        this.onMoveEnd = this.onMoveEnd.bind(this);
        this.props.set('isMoving', false);
    }

    onUpdate() {

    }

    resizeStart(e, type) {
        e.stopPropagation();

        this.lastPosition = {
            x: e.pageX,
        };
        this.props.set('isMoving', true);
        if(type === 'left')  window.addEventListener('mousemove', this.onResizeLeftMove, false);
        if(type === 'right') window.addEventListener('mousemove', this.onResizeRightMove, false);
        window.addEventListener('mouseup', this.onResizeEnd, false);
    }

    onResizeLeftMove(e) {
        let ePageX = e.pageX;

        this.mousePosition = {
            x: parseInt(this.props.get('left')) - (this.lastPosition.x - ePageX),
        };

        let left = parseInt(this.props.get('left'));
        let width = parseInt(this.props.get('width')) + (this.lastPosition.x - ePageX);
        if (width <= 20) return;
        this.props.set('left', this.mousePosition.x + 'px');
        this.props.set('width', width + 'px');
        this.lastPosition.x = ePageX;
    }

    onResizeRightMove(e) {
        let ePageX = e.pageX;

        this.mousePosition = {
            x: parseInt(this.props.get('left')) - (this.lastPosition.x - ePageX),
        };

        let width = parseInt(this.props.get('width')) - (this.lastPosition.x - ePageX);
        if (width <= 20) return;
        this.props.set('width', width + 'px');
        this.lastPosition.x = ePageX;
    }

    onResizeEnd(e) {
        this.end(e, true);
    }

    moveStart(e) {
        this.lastPosition = {
            x: e.pageX,
        };
        this.lastLeft = this.props.get('left');
        this.props.set('isMoving', true);
        window.addEventListener('mousemove', this.onMouseMove, false);
        window.addEventListener('mouseup', this.onMoveEnd, false);
    }
    onMouseMove(e) {
        let ePageX = e.pageX;

        this.mousePosition = {
            x: parseInt(this.props.get('left')) - (this.lastPosition.x - ePageX),
        };

        this.props.set('left', this.mousePosition.x + 'px');
        this.lastPosition.x = ePageX;
    }

    onMoveEnd(e) {
        this.end(e, true);
    }

    end(e, nav) {
        // console.time('bar updated');
        let left = parseInt(this.props.get('left'));
        let width = parseInt(this.props.get('width'));
        let startDate = ProjectsStore.getDateByPos(left, nav);
        let endDate = ProjectsStore.getDateByPos(left + width);

        if(this.lastLeft !== this.props.get('left')){
            this.props.set({startDate, endDate, isMoving: false});
            ProjectsStore.save(this.props._data);
        } else {
            this.props.set('isMoving', false);
        }

        // console.timeEnd('bar updated')
        window.removeEventListener('mousemove', this.onResizeLeftMove, false);
        window.removeEventListener('mousemove', this.onResizeRightMove, false);
        window.removeEventListener('mouseup', this.onResizeEnd, false);
        window.removeEventListener('mouseup', this.onMoveEnd, false);
        window.removeEventListener('mousemove', this.onMouseMove, false);
    }



}
