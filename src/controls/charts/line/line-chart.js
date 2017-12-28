import * as Decorators from '../../../decorators';
import Tpl from './line-chart.html';

const colorsTheme = ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#7cb5ec", "#434348"];
const xOffset = 140;
const yOffset = 100;
const barWidth = 30;
@Decorators.ComponentDecorator({
    selector: 'ace-line-chart',
    template: Tpl,
    props: {
        tooltipCoords: {
            x: 0,
            y: 0
        },
        xGrid: [],
        xGroupLabels: [],
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
    }
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
        // setInterval(()=>{
        //     let series = this.props.get('series');
        //     series[0].value = 10 * Math.random();

        //     let svgHeight = this.getSvgHeight();
        //     let svgWidth = this.getSvgWidth();

        //     series = this.getChartData(svgHeight, svgWidth);

        //     this.props.set({
        //         series: series
        //     });
        // },2000)


    }

    // createFakeData() {
    //     // This function creates data that doesn't look entirely random
    //     const data = []
    //     for (let x = 0; x <= 30; x++) {
    //         const random = Math.random();
    //         const temp = data.length > 0 ? data[data.length - 1].y : 50;
    //         const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
    //         data.push({ x, y })
    //     }
    //     return data;
    // }

    makePath(qwerty) {
        const data = qwerty; //this.qwerty;

        let pathD = "M " + data[0].x + " " + (this.getSvgY(data[0].y, qwerty) + yOffset/2) + " ";
        pathD += data.map((point, i) => {
            return "L " + point.x + " " + (this.getSvgY(point.y, qwerty) +  yOffset/2) + " ";
        });
        return pathD;
    }

    // getSvgX(x, qwerty) {
    //     return x //(x / this.getMaxX(qwerty) * (this.props.get('width') - xOffset));
    // }
    getSvgY(y, qwerty) {
        const svgHeight = this.props.get('height') - yOffset;
        return svgHeight - (y / this.getMaxY(qwerty) * svgHeight);
    }

    // GET MAX & MIN X
    // getMinX() {
    //     const data = this.qwerty;
    //     return data[0].x;
    // }
    getMaxX(qwerty) {
        const data = qwerty;
        return data[data.length - 1].x;
    }
    // GET MAX & MIN Y
    getMinY() {
        const data = this.qwerty;
        return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
    }
    getMaxY(qwerty) {
        const data = qwerty;
        return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
    }

    mouseenter(e, item) {
        clearTimeout(this._tooltipInterval);
        this.props.set({
            tooltipIsShown: true,
            tooltipCoords: { x: item.x - 40 + 'px', y: item.y - 80 + 'px' },
            tooltipSelected: {
                value: ((item.value / this.props.get('series').reduce((a, b) => a + b.value, 0)) * 100).toFixed(2)
            }
        });
    }

    mouseleave(e) {
        if (this._tooltipInterval) {
            clearTimeout(this._tooltipInterval);
        }
        this._tooltipInterval = setTimeout(() => {
            this.props.set({ 'tooltipIsShown': false });
        }, 200);
    }

    draw() {
        let svgHeight = this.getSvgHeight();
        let svgWidth = this.getSvgWidth();

        // let series = this.getChartData(svgHeight, svgWidth);
        let xLabels = this.getXLabels(svgHeight, svgWidth);
        // let xGroupLabels = this.getXGroupLabels(series, svgHeight, svgWidth);
        let yLabels = this.getYLabels(svgHeight);

        let xGrid = this.getXGrid(svgHeight, svgWidth);

        this.props.set({
            // series: series,
            xLabels: xLabels,
            // xGroupLabels: xGroupLabels,
            yLabels: yLabels,
            xGrid: xGrid,
            yLabelX: 30,
            yLabelY: this.props.get('height') / 2,
            yLabelTransform: `translate(0,0) rotate(270 26.140625 ${this.props.get('height') / 2})`,
            labelX: this.props.get('width') / 2
        });


        let qwerty = this.getChartData(svgHeight, svgWidth);//this.createFakeData(); 
        // console.log(qwerty);
        // let path = this.makePath(qwerty);
        
        let series =  qwerty.map(r=> this.makePath(r));
        
        this.props.set(/*'d', path*/ 'series', series);
    }

    getSvgHeight() {
        return this.props.get('height') - yOffset;
    }

    getSvgWidth() {
        return this.props.get('width') - xOffset;
    }

    getXGrid(svgHeight, svgWidth) {
        let xGrid = [];
        let maxVal = this.getMaxValue(this.props.get('series').map(r => r.value));
        let count = this.props.get('stepCount') || this.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            xGrid.push({
                x1: xOffset / 2,
                x2: this.props.get('width') - xOffset / 2,
                y1: yOffset / 2 + i * stepHeight,
                y2: yOffset / 2 + i * stepHeight
            });
        }
        return xGrid;
    }

    getYLabels(svgHeight) {
        let result = [];
        // let maxVal = this.getMaxValue(this.props.get('series').map(r => r.value));
        let count = this.props.get('stepCount') || this.getModulo(maxVal);
        let stepHeight = svgHeight / count;


        let maxVal = this.getMaxSeriesVal();
        let min = this.getMinSeriesVal();

        for (var i = 0; i <= count; i++) {
            result.push({
                x: xOffset / 2 - 10,
                y: yOffset / 2 + i * stepHeight + 4, //svgHeight - i * stepHeight + 4,
                name: Math.abs((maxVal / count) * (i - count)).toFixed(1)
            });
        }

        return result;
    }

    getMaxSeriesVal() {
        const array = this.props.get('series').map(r=> r.value).reduce((a,b)=> a.concat(b), []);
        return Math.max(...array);
    }

    getMinSeriesVal() {
        const array = this.props.get('series').map(r=> r.value).reduce((a,b)=> a.concat(b), []);
        return Math.min(...array);
    }

    getChartData(svgHeight, svgWidth) {
        let max = this.getMaxSeriesVal();
        let min = this.getMinSeriesVal();
        let array = this.props.get('xAxis').categories;
        let length = array.length - 1;
        // return this.props.get('series')[0].value.map((r, i)=>{
            
        //     return {
        //         x: i * (svgWidth / length - barWidth / length) + xOffset / 2 ,
        //         y: r/max
        //     };
        // });
        return this.props.get('series').map(r =>{
            return r.value.map((r,i)=>{
                return {                
                    x: i * (svgWidth / length - barWidth / length) + xOffset / 2 ,
                    y: r/max
                }
            });
        });
     
    }

    getXLabels(svgHeight, svgWidth) {
        let array = this.props.get('xAxis').categories;
        let length = array.length - 1;
        return array.map((r, i) => {
            return {
                x: i * (svgWidth / length - barWidth / length) + xOffset / 2 ,
                y: svgHeight + yOffset /2 + 20,
                name: r
            };
        });
    }

    getXGroupLabels(series, svgHeight, svgWidth) {
        return series.map((r, i) => {
            return {
                x: r.x + 10,
                y: r.y - 4,
                name: r.value
            };
        });
    }


    getModulo(maxVal) {
        let modulo;

        switch (true) {
            case (maxVal % 6) === 0:
                console.log(6);
                modulo = 6;
                break;
            case (maxVal % 5) === 0:
                console.log(5);
                modulo = 5;
                break;
            case (maxVal % 4) === 0:
                console.log(4);
                modulo = 4;
                break;
            case (maxVal % 3) === 0:
                console.log(3);
                modulo = 3;
                break;
            case (maxVal % 2) === 0:
                console.log(2);
                modulo = 2;
                break;
            default:
                modulo = 2;
                break;
        }

        return modulo;
    }

    getMaxValue(array) {
        return Math.max.apply(null, array);
    }

    // onChange(f) {
    //     this.onChangeCallback = f;
    // }

    // setData(data) {

    // }

    // append(tag) {
    //     let elem;
    //     return elem;
    // }



}