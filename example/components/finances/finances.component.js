import {Component} from 'framework/core';
import Tpl from './finances.component.html';
import ProjectsStore from 'stores/projects.store';
export class FinancesComponent extends Component {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    onInit() {
        this.yearsArray = [
            {name: '2020', id: '1', selected: true},
            {name: '2019', id: '2'},
            {name: '2018', id: '3'}
        ];

        this.monthsArray = [
            {name: "January", id: 1, selected: true},
            {name: "February", id: 2},
            {name: "March", id: 3},
            {name: "April", id: 4},
            {name: "May", id: 5},
            {name: "June", id: 6},
            {name: "July", id: 7},
            {name: "August", id: 8},
            {name: "September", id: 9},
            {name: "October", id: 10},
            {name: "November", id: 11},
            {name: "December", id: 12}
        ];

        this.props.set('year', this.yearsArray[0]);
        this.props.set('month', this.monthsArray[0]);

        this.setSubscriptions(
            ProjectsStore.projects.sub(projects => {
                this.props.set({
                    'items': projects,
                    totalBudget: projects.reduce((a, b) => a + parseFloat(b.budget), 0)
                });
            })
        );
    }

    onDestroy() {

    }
}