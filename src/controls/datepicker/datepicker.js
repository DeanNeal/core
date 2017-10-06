import {Utils} from 'core';
import {DropdownComponent} from '../dropdown';
// import Style from './modal.component.scss';
import Tpl from './datepicker.html';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const daysOfWeekShort = ['Mo', 'Tu', 'Wen', 'Th', 'Fr', 'Sat', 'Sun'];
const monthDefaultType = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthDefaultTypeNew = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const minutes = 'm';
const hours = 'h';

export class DatepickerComponent extends DropdownComponent {
    constructor(params) {
        super(params, {
            template: Tpl
        });
    }

    INPUT(params) {
        if (params.date) {
            this.props.set({
                model: new Date(params.date),
                formattedDate: Utils.getDateByFormat(params.date, 'yyyy-mm-dd')
            });
            this.currentDate = new Date(params.date); // init view
        }

        if (params.maxDate) {
            this.maxDate = params.maxDate;
        }

        if (params.minDate) {
            this.minDate = params.minDate;
        }

        this.update();
    }

    onInit() {
        this.currentDate = new Date();
        this.props.set({'daysOfWeekShort': daysOfWeekShort, formattedDate: Utils.getDateByFormat(this.currentDate, 'yyyy-mm-dd')});
        this.update();
    }

    update() {
        this.props.set({
            currentMonth: this.getCurrentMonth(),
            currentYear: this.getCurrentYear(),
            countOfDays: this.getCountOfDays()
        });
    }

    select(event, params) {
        if (params.inactive === false) {
            this.emit('modelChange', params.date);
            this.close();
        }
        event.stopPropagation();
    }

    prev(e) {
        e.stopPropagation();
        this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));
        this.update();
    }

    next(e) {
        e.stopPropagation();
        this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1));
        this.update();
    }


    getCurrentMonth() {
        let a = monthDefaultType[this.currentDate.getMonth()]
        // this.props.set('currentMonth', a);
        return a;
    }

    getCurrentYear() {
        let a = this.currentDate.getFullYear();
        // this.props.set('currentYear', a);
        return a;
    }


    getDays(date) {
        date = new Date(date);
        let year = date.getFullYear();
        let month = date.getMonth();

        let monthStart = new Date(year, month, 1);
        let monthEnd = new Date(year, month + 1, 1);
        let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
        let days = [];
        let minDate = new Date(this.minDate);
        let maxDate = new Date(this.maxDate);
        let emptyDays = monthStart.getDay() - 1; // get last dates of prev month

        monthStart = Utils.addDays(monthStart, -emptyDays); // set start position

        for (let i = 1; i < monthLength + 1 + emptyDays; i++) {
            let date = Utils.addDays(monthStart, i - 1);
            let day = {index: date.getDate(), date, today: false, selected: false, inactive: false, empty: false};

            if (i <= emptyDays) {
                day.empty = true;
            }

            if (new Date().toDateString() == day.date.toDateString()) {
                day.today = true;
            }
            if (this.props.get('model') && this.props.get('model').toDateString() == day.date.toDateString()) {
                day.selected = true;
            }

            // if (this.props.get('model') && this.props.get('model').toDateString() == day.date.toDateString()) {
            //     day.selected = true;
            // }

            if (minDate && day.date.setHours(0, 0, 0, 0) <= minDate.setHours(0, 0, 0, 0)) {
                day.inactive = true;
            }
            if (maxDate && day.date.setHours(0, 0, 0, 0) >= maxDate.setHours(0, 0, 0, 0)) {
                day.inactive = true;
            }
            days.push(day);
        }

        return days;
    }

    getCountOfDays() {
        let a = this.getDays(this.currentDate);
        // this.props.set('countOfDays', a);
        return a;
    }

}
