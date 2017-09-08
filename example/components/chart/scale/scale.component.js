import {Component, SmartObject} from 'framework/core';
import Tpl from './scale.component.html';
import ProjectsStore from 'stores/projects.store';

export class ScaleComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        this.setSubscriptions(
            ProjectsStore.projects.sub(projects => {
                if (projects) {
                    console.time('modules')
                    let earliest = ProjectsStore.getEarliest().toDateString();
                    let latest = ProjectsStore.getLatest().toDateString();
                    if (this.lastEarliest !== earliest || this.lastLatest !== latest) { // if new changes outside of current scale
                        ProjectsStore.getScaleDays(); // TODO optimize
                        this.lastEarliest = ProjectsStore.getEarliest().toDateString();
                        this.lastLatest = ProjectsStore.getLatest().toDateString();

                        let days = ProjectsStore.daysCollection;
                        let months = ProjectsStore.getScaleMonths();
                        this.props.set({
                            days,
                            months,
                            scaleWidth: ProjectsStore.cellWidth * days.length + 'px'
                        });
                    }
                    console.timeEnd('modules')
                }
            })
        )
    }

    onDestroy() {

    }
}
