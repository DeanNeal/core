import { Component, Plugins, Decorators } from '../../../../core';
import Tpl from './chart.component.html';


@Decorators.ComponentDecorator({
    selector: 'app-plugins-chart',
    template: Tpl,
    props: () =>{
        return {
             barChartData: {
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
             },
             lineChartData: {
                 title: 'Programming languages',
                 yAxis: {
                     // min: 0,
                     label: 'Popularity'
                 },
                 background: '#f0f0f0',
                 series: [
                     { name: 'JS', value: [10, 20, 300, 50, 30] },
                     { name: 'JAVA', value: [100, 200, 300, 500, 300] },
                     { name: 'PHP', value: [1000, 500, 500, 400, 20] }
                 ],
                 xAxis: {
                     categories: ['2010', '2011', '2012', '2013', '2014']
                 },
                 height: 300,
                 width: 600,
                 labelX: 300
             }   
        }
    }
})
export class PluginsChartComponent {
    onInit() {


            // setInterval(() => {
            //     let barChartData = this.props.get('barChartData');
            //     let lineChartData = this.props.get('lineChartData');

            //     barChartData.series = [
            //         { name: 'JS', value: 6 * Math.random()},
            //         { name: 'JAVA', value: 5 * Math.random()},
            //         { name: 'PHP', value: 8 * Math.random()},
            //         { name: 'PYTHON', value: 10 * Math.random()},
            //         { name: 'C', value: 15 * Math.random()},
            //         { name: 'PERl', value: 5 * Math.random()},
            //         { name: 'C#', value: 20 * Math.random()}
            //     ];

            //     lineChartData.series = [
            //         { name: 'JS', value: [10 * Math.random(), 20 * Math.random(),300 * Math.random(), 50 * Math.random(), 300 * Math.random()] },
            //         { name: 'JAVA', value: [100 * Math.random(), 200 * Math.random(), 300 * Math.random(), 500 * Math.random(), 300 * Math.random()] },
            //         { name: 'PHP', value: [2000 * Math.random(),500 * Math.random(),500 * Math.random(),400 * Math.random(),20 * Math.random()] }
            //     ];
            //     this.props.set({lineChartData, barChartData});
            // }, 2000);
    }
}