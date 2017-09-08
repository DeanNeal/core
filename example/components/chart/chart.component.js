import {Component, Utils} from 'framework/core';
import Tpl from './chart.component.html';
import ProjectsStore from 'stores/projects.store';
// import ModalsStore from 'store/modals.store';

export class ChartComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        ProjectsStore.navigation.set('offset', {direction: 'left', value: new Date()}); // Navigate to today

        this.setSubscriptions(
            ProjectsStore.projects.sub(projects => {
                if (projects) {
                    // console.time('modules')
                    ProjectsStore.getTotalWidth();
                    this.props.set('scrollerXWidth', ProjectsStore.totalWidth - ProjectsStore.cellWidth + 'px');
                    this.props.set('scrollerYHeight', (projects.length + 1) * 30 + 10 + 'px');

                    this.props.set({
                        'items': ProjectsStore.setSize(projects),
                        ifNoResults: projects.filter(item => item.visible).length
                    });
                    // console.timeEnd('modules')
                }
            }),
            ProjectsStore.navigation.sub(params => {
                this.navigation(params);
            })
        );

    }

    navigation(params) {
        if (params && params.offset.direction === 'left') {
            let scrollLeft = ProjectsStore.getPosByDate(params.offset.value);
            Utils.scrollLeft(this.ui.canvas, scrollLeft, 500);
            Utils.scrollLeft(this.ui.scale, scrollLeft, 500);
            Utils.scrollLeft(this.ui.scrollerX, scrollLeft, 500);
        } else if (params && params.offset.direction === 'top') {
            let scrollHeight = this.ui.scrollerY.scrollHeight;
            Utils.scrollTop(this.ui.canvas, scrollHeight, 1000);
            Utils.scrollTop(this.ui.scrollerY, scrollHeight, 1000);
        }
    }

    showAll() {
        ProjectsStore.search();
    }

    //rewrite
    mousewheel(e) {
        let current = e.currentTarget.scrollTop;
        this.smoothScroll(this.ui.canvas, current + (e.deltaY > 0 ? 50 : -50));
        this.smoothScroll(this.ui.scrollerY, current + (e.deltaY > 0 ? 50 : -50));
    }

    getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }

    checkYScroll(e) {
        let scrollTop = e.target.scrollTop;
        this.smoothScroll(this.ui.canvas, scrollTop);
        this.smoothScroll('app-sidebar-list', scrollTop);
    }

    checkXScroll(e) {
        let scrollLeft = e.target.scrollLeft;
        this.smoothScroll(this.ui.canvas, scrollLeft, true);
        this.smoothScroll(this.ui.scale, scrollLeft, true);
    }

    smoothScroll(el, value, left) {
        el = typeof el === 'string' ? this.getElement(el)[0] : el;
        if (left) {
            el.scrollLeft = value;
        } else {
            el.scrollTop = value;
        }
    }

    onDestroy() {

    }
}
