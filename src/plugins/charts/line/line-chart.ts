import { ComponentDecorator } from '../../../core';
import * as Tpl from './line-chart.html';
import { Chart } from '../chart';

@ComponentDecorator({
    selector: 'line-chart',
    template: Tpl,
    // super: Chart
})
export class LineChartComponent {
    _tooltipInterval;
    tooltipCoords: any = {
        x: 0,
        y: 0
    };
    tooltipSelected: any = null;
    xGrid = [];
    xLabels = [];
    yLabels = [];
    yLabelX = 0;
    yLabelY = 0;
    yLabelTransform;
    labelX;
    _series: any = [{
        d: 'TEXT',
        value: [1,2,3,1,5,6]
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

    constructor() {

    }


    onInit() {
        this.draw();
    }

    makePath(series) {
        let pathD = "M " + series[0].x + " " + (this.getSvgY(series[0].y) + Chart.yOffset / 2) + " ";
        pathD += series.map((point, i) => {
            return "L " + point.x + " " + (this.getSvgY(point.y) + Chart.yOffset / 2) + " ";
        });

        return pathD;
    }

    getSvgY(y, maxVal?) {
        const svgHeight = this.height - Chart.yOffset;
        // console.log(y);
        return svgHeight - (y * svgHeight);
    }

    getMaxX(series) {
        const data = series;
        return data[data.length - 1].x;
    }

    getMaxY(series) {
        return series.reduce((max, p) => p.y > max ? p.y : max, series[0].y);
    }

    mouseenter(e, item) {
        clearTimeout(this._tooltipInterval);
// console.log(item, e.target.getBoundingClientRect());
        const {left, top} = e.target.getBoundingClientRect();

        this.tooltipIsShown = true;
        this.tooltipCoords = { x: left - 33 + 'px', y: top - 80 + 'px' };
        this.tooltipSelected = {
            value: item.value.toFixed(2)
        };
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


        let xLabels = this.getXLabels(svgHeight, svgWidth);
        let yLabels = this.getYLabels(svgHeight);
        let xGrid = this.getXGrid(svgHeight, svgWidth);
        let series = this.getChartData(svgHeight, svgWidth);
        let markers = this.getMarkers(svgHeight, svgWidth);

        this.series = series;
        this.xLabels = xLabels;
        this.yLabels = yLabels;
        this.xGrid = xGrid;
        this.yLabelX = 30;
        this.markers = markers;
        this.yLabelY = this.height / 2;
        this.yLabelTransform = `translate(0,0) rotate(270 26.140625 ${this.height / 2})`;
        this.labelX = this.width / 2;
    }

    getXGrid(svgHeight, svgWidth) {
        let xGrid = [];
        let maxVal = Math.max(...this._series.map(r => r.value));//this.getMaxValue(this.series.map(r => r.value));
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
        let maxVal = this.getMaxSeriesVal();
        let min = this.getMinXSeriesVal();

        let result = [];
        let count = this.stepCount || Chart.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            result.push({
                x: Chart.xOffset / 2 - 10,
                y: Chart.yOffset / 2 + i * stepHeight + 4,
                name: Chart.getTrueLabelName(Math.abs((maxVal / count) * (i - count))) //Math.abs((maxVal / count) * (i - count)).toFixed(1)
            });
        }

        return result;
    }

    getMaxSeriesVal() {
        const array = this._series.map(r => r.value).reduce((a, b) => a.concat(b), []);
        return Math.max(...array);
    }

    getMinXSeriesVal() {
        const array = this._series.map(r => r.value).reduce((a, b) => a.concat(b), []);
        return Math.min(...array);
    }

    getChartData(svgHeight, svgWidth) {
        let max = this.getMaxSeriesVal();
        let min = this.getMinXSeriesVal();
        let array = this.xAxis.categories;
        let length = array.length - 1;

        return this._series.map((seria, index) => {
            let series = seria.value.map((r, i) => {
                return {
                    x: i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2,
                    y: r / max
                }
            });
            return {
                d: this.makePath(series),
                stroke: Chart.colorsTheme[index]
            }
        });

    }

    getMarkers(svgHeight, svgWidth) {
        let max = this.getMaxSeriesVal();
        let min = this.getMinXSeriesVal();
        let array = this.xAxis.categories;
        let length = array.length - 1;

        return this._series.map((seria, i) => {
            return {
                items: seria.value.map((r, i) => {
                    return {
                        x: i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2 - Chart.markerSize / 2,
                        y: svgHeight - (r / max * svgHeight) + Chart.yOffset / 2 - Chart.markerSize / 2,
                        height: Chart.markerSize,
                        width: Chart.markerSize,
                        fill: '#aaa',
                        value: r
                    }
                })
            };
        });
    }

    getXLabels(svgHeight, svgWidth) {
        let array = this.xAxis.categories;
        let length = array.length - 1;
        return array.map((r, i) => {
            ``
            return {
                x: i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2,
                y: svgHeight + Chart.yOffset / 2 + 20,
                name: r
            };
        });
    }

}