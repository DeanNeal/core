import * as Decorators from '../../../decorators';
import Tpl from './line-chart.html';
import {Chart} from './../chart';

@Decorators.ComponentDecorator({
    selector: 'ace-line-chart',
    template: Tpl,
    props: {
        tooltipCoords: {
            x: 0,
            y: 0
        },
        xGrid: [],

        yLabels: [],
        xLabels: [],
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
        xAxis: {
               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        height: 300,
        width: 600
    },
    super: Chart
})
export class LineChartComponent {
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

    makePath(series) {
        let pathD = "M " + series[0].x + " " + (this.getSvgY(series[0].y) + Chart.yOffset/2) + " ";
        pathD += series.map((point, i) => {
            return "L " + point.x + " " + (this.getSvgY(point.y) +  Chart.yOffset/2) + " ";
        });

        return pathD;
    }

    getSvgY(y, maxVal) {
        const svgHeight = this.props.get('height') - Chart.yOffset;
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
        this.props.set({ 
            tooltipIsShown: true, 
            tooltipCoords: { x: item.x - 40 + 'px', y: item.y - 80  + 'px' },
            tooltipSelected: {
                value: item.value.toFixed(2)
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


        let xLabels = this.getXLabels(svgHeight, svgWidth);
        let yLabels = this.getYLabels(svgHeight);
        let xGrid = this.getXGrid(svgHeight, svgWidth);
        let series = this.getChartData(svgHeight, svgWidth);
        let markers = this.getMarkers(svgHeight, svgWidth);

        this.props.set({
            series: series,
            xLabels: xLabels,
            yLabels: yLabels,
            xGrid: xGrid,
            yLabelX: 30,
            markers: markers,
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
        let count = this.props.get('stepCount') || this.getModulo(maxVal);
        let stepHeight = svgHeight / count;


        let maxVal = this.getMaxSeriesVal();
        let min = this.getMinXSeriesVal();

        for (var i = 0; i <= count; i++) {
            result.push({
                x: Chart.xOffset / 2 - 10,
                y: Chart.yOffset / 2 + i * stepHeight + 4,
                name: this.getTrueLabelName(Math.abs((maxVal / count) * (i - count))) //Math.abs((maxVal / count) * (i - count)).toFixed(1)
            });
        }

        return result;
    }

    getMaxSeriesVal() {
        const array = this.props.get('series').map(r=> r.value).reduce((a,b)=> a.concat(b), []);
        return Math.max(...array);
    }

    getMinXSeriesVal() {
        const array = this.props.get('series').map(r=> r.value).reduce((a,b)=> a.concat(b), []);
        return Math.min(...array);
    }

    getChartData(svgHeight, svgWidth) {
        let max = this.getMaxSeriesVal();
        let min = this.getMinXSeriesVal();
        let array = this.props.get('xAxis').categories;
        let length = array.length - 1;

       return this.props.get('series').map((seria, index) =>{
            let series = seria.value.map((r,i)=>{
                return {                
                    x: i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2 ,
                    y: r/max
                }
            });
            return {
                d: this.makePath(series),
                stroke: Chart.colorsTheme[index]
            }
        });

    }

    getMarkers(svgHeight, svgWidth)  {
        let max = this.getMaxSeriesVal();
        let min = this.getMinXSeriesVal();
        let array = this.props.get('xAxis').categories;
        let length = array.length - 1;

       return this.props.get('series').map((seria, i) =>{
            return {items: seria.value.map((r,i)=>{
                return {                
                    x:  i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2 - Chart.markerSize/2,
                    y: svgHeight - (r/max * svgHeight) + Chart.yOffset/2 - Chart.markerSize/2,
                    height: Chart.markerSize,
                    width: Chart.markerSize,
                    fill: '#aaa',
                    value: r
                }
            })};
        });
    }

    getXLabels(svgHeight, svgWidth) {
        let array = this.props.get('xAxis').categories;
        let length = array.length - 1;
        return array.map((r, i) => {
            return {
                x: i * (svgWidth / length - Chart.barWidth / length) + Chart.xOffset / 2 ,
                y: svgHeight + Chart.yOffset /2 + 20,
                name: r
            };
        });
    }

}