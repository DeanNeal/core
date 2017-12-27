import { Component, Plugins, Decorators } from '../../../../core';
import Tpl from './chart.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-plugins-chart',
    template: Tpl,
    props: {
        chartData: {
            title: 'Programming languages',
            yAxis: {
                // min: 0,
                label: 'Popularity'
            },
            background: '#f0f0f0',
            series: [
                { name: 'JS', value: 6 },
                { name: 'JAVA', value: 5 },
                { name: 'PHP', value: 8 },
                { name: 'PYTHON', value: 10 },
                { name: 'C', value: 15 },
                { name: 'PERl', value: 5 },
                { name: 'C#', value: 20 }
            ],
            height: 300,
            width: 600,
            labelX: 300
        }
    }
})
export class PluginsChartComponent { 
    onInit() {


        // setInterval(() => {
        //     let data = this.props.get('chartData');

        //     data.series = [
        //         { name: '1', value: Math.ceil(11 * Math.random()) },
        //         { name: '2', value: Math.ceil(26 * Math.random()) },
        //         { name: '3', value: Math.ceil(8 * Math.random()) },
        //         { name: '4', value: Math.ceil(13 * Math.random()) },
        //         { name: '5', value: Math.ceil(15 * Math.random()) },
        //         { name: '1', value: Math.ceil(5 * Math.random()) },
        //         { name: '2', value: Math.ceil(30 * Math.random()) }
        //     ];
        //     this.props.set('chartData', data);
        // }, 1000);
    }
}