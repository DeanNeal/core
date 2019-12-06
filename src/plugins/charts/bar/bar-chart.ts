import { Component } from '../../../core';
import { Chart } from '../chart';
import * as Tpl from './bar-chart.html';

@Component({
    selector: 'bar-chart',
    template: Tpl
})

export class BarChartComponent {
    title = 'Title goes here';
    background = '#eee';
    _tooltipInterval;
    tooltipCoords: any = {
        x: 0,
        y: 0
    };
    tooltipSelected: any = null;
    xGrid = [];
    xGroupLabels = [];
    xLabels = [];
    yLabels = [];
    yLabelX = 0;
    yLabelY = 0;
    yLabelTransform;
    labelX = 30;
    _series: any = [{
        title: 'september',
        value: 1
    }, {
        title: 'october',
        value: 4
    }, {
        title: 'november',
        value: 3
    }];
    series: any = [];
    markers = [];
    height = 300;
    width = 600;
    tooltipIsShown = false;
    stepCount = 5;
    xAxis = {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };
    yAxis = {
        // min: 0,
        label: ''
    };


    onInit() {
        this.draw();
    }

    mouseenter(e, item) {
        clearTimeout(this._tooltipInterval);

        const { left, top } = e.target.getBoundingClientRect();

        this.tooltipIsShown = true;
        // this.tooltipCoords = { x: left - 33 + 'px', y: top - 80 + 'px' };
        this.tooltipSelected = {
            value: ((item.value / this.series.reduce((a, b) => a + b.value, 0)) * 100).toFixed(2)
        };

        const { width, height } = this['$refs'].tooltip.getBoundingClientRect();

        this.tooltipCoords = { x: left - width / 2 + 15 + 'px', y: top - height - 15 + 'px' };
        
    }


    mouseleave(e) {
        if (this._tooltipInterval) {
            clearTimeout(this._tooltipInterval);
        }
        this._tooltipInterval = setTimeout(() => {
            this.tooltipIsShown = false;
        }, 200);
    }

    draw() {
        let svgHeight = this.height - Chart.yOffset;//this.getSvgHeight();
        let svgWidth = this.width - Chart.xOffset;//this.getSvgWidth();

        let series = this.getChartData(svgHeight, svgWidth);
        let xLabels = this.getXLabels(series, svgHeight, svgWidth);
        let xGroupLabels = this.getXGroupLabels(series, svgHeight, svgWidth);
        let yLabels = this.getYLabels(svgHeight);

        let xGrid = this.getXGrid(svgHeight, svgWidth);

        this.series = series;
        this.xGroupLabels = xGroupLabels;
        this.xLabels = xLabels;
        this.yLabels = yLabels;
        this.xGrid = xGrid;
        this.yLabelX = 30;
        // this.markers = markers;
        this.yLabelY = this.height / 2;
        this.yLabelTransform = `translate(0,0) rotate(270 26.140625 ${this.height / 2})`;
        this.labelX = this.width / 2;
    }

    getXGrid(svgHeight, svgWidth) {
        let xGrid = [];
        let maxVal = Math.max(...this._series.map(r => r.value));//Chart.getMaxValue(this.props.get('series').map(r => r.value));
        let count = this.stepCount || Chart.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            xGrid.push({
                x1: Chart.xOffset / 2,
                x2: this.width - Chart.xOffset / 2,
                y1: Chart.yOffset / 2 + i * stepHeight,
                y2: Chart.yOffset / 2 + i * stepHeight
            });
        }
        return xGrid;
    }

    getYLabels(svgHeight) {
        let result = [];
        let maxVal = Math.max(...this._series.map(r => r.value));
        let count = this.stepCount || Chart.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            result.push({
                x: Chart.xOffset / 2 - 10,
                y: Chart.yOffset / 2 + i * stepHeight + 4, //svgHeight - i * stepHeight + 4,
                name: Chart.getTrueLabelName(Math.abs((maxVal / count) * (i - count)))
            });
        }

        return result;
    }

    getChartData(svgHeight, svgWidth) {
        let maxVal = Math.max(...this._series.map(r => r.value));
        let count = this.stepCount || Chart.getModulo(maxVal);
        let stepHeight = svgHeight / (count + 1);


        let length = this._series.length - 1;
        return this._series.map((r, i) => {
            // let a = ((svgWidth) / this.props.get('series').length) / (this.props.get('series').length);
            
            return {
                x: i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2,
                y: svgHeight - svgHeight * (r.value / maxVal) + Chart.yOffset / 2,
                // stroke: '#ffffff',
                stroeWidth: 1,
                fill: Chart.colorsTheme[i] || '#5699dc',
                width: Chart.barWidth,
                height: svgHeight * (r.value / maxVal),
                value: r.value,
                title: r.title
            };
        });
    }

    getXLabels(series, svgHeight, svgWidth) {
        // svgWidth = svgWidth - 40;
        // return this._series.map((r, i) => {
        //     return {
        //         x: r.x,//i * (svgWidth / this._series.length) + 20,
        //         y: r.y,//svgHeight + 15,
        //         name: r.d
        //     };
        // });
        return series.map((r, i) => {
            return {
                x: r.x + 0,
                y: this.height - Chart.yOffset/2 + 15,
                name: r.title
            };
        });
    }

    getXGroupLabels(series, svgHeight, svgWidth) {
        return series.map((r, i) => {
            return {
                x: r.x + 0,
                y: r.y - 4,
                name: ((r.value / this._series.reduce((a, b) => a + b.value, 0)) * 100).toFixed(2) + '%'
            };
        });
    }

}