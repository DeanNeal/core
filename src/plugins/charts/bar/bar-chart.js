import {Decorators} from '@dean_neal/core';
import {Chart} from '../chart';
import Tpl from './bar-chart.html';

@Decorators.ComponentDecorator({
    selector: 'ace-bar-chart',
    template: Tpl,
    props: ()=> {
        return {
            tooltipCoords: {
                x: 0,
                y: 0
            },
            xGrid: [],
            xGroupLabels: [],
            yLabels: [],
            tooltipIsShown: false,
            title: 'test chart',
            colors: [],
            background: '#eee',
            yAxis: {
                // min: 0,
                label: ''
            },
            stepCount: 5,
            series: [],
            height: 300,
            width: 600
        }
    },
    super: Chart
})
export class BarChartComponent {
    INPUT(params) {
        let newParams = {};
        for (let key in this.props.getData()) {
            if (params.data[key]) {
                newParams[key] = params.data[key];
            }
        }

        this.props.set(newParams);
        this.draw();
    }

    onInit() {

    }

    mouseenter(e, item) {
        clearTimeout(this._tooltipInterval);
        this.props.set({ 
            tooltipIsShown: true, 
            tooltipCoords: { x: item.x - 40 + 'px', y: item.y - 80  + 'px' },
            tooltipSelected: {
                name: item.name,
                value:  ((item.value / this.props.get('series').reduce((a,b) => a + b.value, 0)) * 100).toFixed(2)
            }
        });
    }

    mouseleave(e) {
        if(this._tooltipInterval) {
            clearTimeout(this._tooltipInterval);
        }
        this._tooltipInterval = setTimeout(() => {
            this.props.set({ 'tooltipIsShown': false });
        }, 200);
    }

    draw() {
        let svgHeight = this.getSvgHeight();
        let svgWidth = this.getSvgWidth();

        let series = this.getChartData(svgHeight, svgWidth);
        // let xLabels = this.getXLabels(svgHeight, svgWidth);
        let xGroupLabels = this.getXGroupLabels(series, svgHeight, svgWidth);
        let yLabels = this.getYLabels(svgHeight);

        let xGrid = this.getXGrid(svgHeight, svgWidth);

        this.props.set({
            series: series,
            // xLabels: xLabels,
            xGroupLabels: xGroupLabels,
            yLabels: yLabels,
            xGrid: xGrid,
            yLabelX: 30,
            yLabelY: this.props.get('height') / 2,
            yLabelTransform: `translate(0,0) rotate(270 26.140625 ${this.props.get('height') / 2})`,
            labelX: this.props.get('width') / 2
        });
    }

    getXGrid(svgHeight, svgWidth) {
        let xGrid = [];
        let maxVal = this.getMaxValue(this.props.get('series').map(r => r.value));
        let count = this.props.get('stepCount') || this.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            xGrid.push({
                x1: Chart.xOffset / 2,
                x2: this.props.get('width') - Chart.xOffset / 2,
                y1: Chart.yOffset / 2 + i * stepHeight,
                y2: Chart.yOffset / 2 + i * stepHeight
            });
        }
        return xGrid;
    }

    getYLabels(svgHeight) {
        let result = [];
        let maxVal = this.getMaxValue(this.props.get('series').map(r => r.value));
        let count = this.props.get('stepCount') || this.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            result.push({
                x: Chart.xOffset / 2 - 10,
                y: Chart.yOffset / 2 + i * stepHeight + 4, //svgHeight - i * stepHeight + 4,
                name: this.getTrueLabelName(Math.abs((maxVal / count) * (i - count)))
            });
        }

        return result;
    }

    getChartData(svgHeight, svgWidth) {
        let maxVal = this.getMaxValue(this.props.get('series').map(r => r.value));
        let count = this.props.get('stepCount') || this.getModulo(maxVal);
        let stepHeight = svgHeight / (count + 1);


        let length = this.props.get('series').length - 1;
        return this.props.get('series').map((r, i) => {
            // let a = ((svgWidth) / this.props.get('series').length) / (this.props.get('series').length);
            return {
                x: i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2,
                y: svgHeight - svgHeight * (r.value / maxVal) + Chart.yOffset / 2,
                // stroke: '#ffffff',
                stroeWidth: 1,
                fill: Chart.colorsTheme[i] || '#5699dc',
                width: Chart.barWidth,
                height: svgHeight * (r.value / maxVal),
                value: r.value
            };
        });
    }

    // getXLabels(svgHeight, svgWidth) {
    //     svgWidth = svgWidth - 40;
    //     return this.props.get('series').map((r, i) => {
    //         return {
    //             x: i * (svgWidth / this.props.get('series').length) + 20,
    //             y: svgHeight + 15,
    //             name: r.value
    //         };
    //     });
    // }

    getXGroupLabels(series, svgHeight, svgWidth) {
        return series.map((r, i) => {
            return {
                x: r.x + 0,
                y: r.y - 4,
                name: ((r.value / this.props.get('series').reduce((a,b) => a + b.value, 0)) * 100).toFixed(2) + '%'
            };
        });
    }

}