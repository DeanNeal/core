const colorsTheme = ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#7cb5ec", "#434348"];
class BarChart {
    constructor(options) {
        this.options = options;
        this.height = options.height || 250;
        this.width = options.width || 250;
        this.resultData = null;
        this.onChangeCallback = () => {};
    }

    draw() {
        let svgHeight = this.getSvgHeight();
        let svgWidth = this.getSvgWidth();

        let chartData = this.getChartData(svgHeight, svgWidth);
        let xLabels = this.getXLabels(svgHeight, svgWidth);
        let xGroupLabels = this.getXGroupLabels(chartData, svgHeight, svgWidth);
        let yLabels = this.getYLabels(svgHeight);

        let xGrid = this.getXGrid(svgHeight);

        this.onChangeCallback.call(this, { chartData, yLabels, xLabels, xGrid, xGroupLabels });
    }

    getSvgHeight() {
        return this.height - 100;
    }

    getSvgWidth() {
        return this.width - 100;
    }

    getXGrid(svgHeight) {
        let xGrid = [];
        let maxVal = this.getMaxValue(this.options.data.map(r => r.value));
        let count = this.options.stepCount || this.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            xGrid.push({
                x1: 40,
                x2: this.width - 40,
                y1: 50 + i * stepHeight,
                y2: 50 + i * stepHeight
            });
        }
        return xGrid;
    }

    getYLabels(svgHeight) {
        let result = [];
        let maxVal = this.getMaxValue(this.options.data.map(r => r.value));
        let count = this.options.stepCount || this.getModulo(maxVal);
        let stepHeight = svgHeight / count;

        for (var i = 0; i <= count; i++) {
            result.push({
                x: 30,
                y: 50 + i * stepHeight + 4, //svgHeight - i * stepHeight + 4,
                name: Math.abs((maxVal / count) * (i - count)).toFixed(1)
            });
        }

        return result;
    }


    getChartData(svgHeight, svgWidth) {
        let maxVal = this.getMaxValue(this.options.data.map(r => r.value));
        let count = this.options.stepCount || this.getModulo(maxVal);
        let stepHeight = svgHeight / (count + 1);


        return this.options.data.map((r, i) => {
            return {
                x: i * (svgWidth / this.options.data.length) + 50,
                y: svgHeight - svgHeight * (r.value / maxVal) + 50,
                // stroke: '#ffffff',
                stroeWidth: 1,
                fill: colorsTheme[i] || '#5699dc',
                width: 30,
                height: svgHeight * (r.value / maxVal),
                value: r.value
            };
        });
    }

    getXLabels(svgHeight, svgWidth) {
        svgWidth = svgWidth - 40;
        return this.options.data.map((r, i) => {
            return {
                x: i * (svgWidth / this.options.data.length) + 20,
                y: svgHeight + 15,
                name: r.value
            };
        });
    }

    getXGroupLabels(array, svgHeight, svgWidth) {
        return array.map((r, i) => {
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

    onChange(f) {
        this.onChangeCallback = f;
    }

    setData(data) {
        this.options.data = [
            { name: '4', value: 10 },
            { name: '5', value: 15 },
            { name: '6', value: 25 }
        ];

        let svgHeight = this.getSvgHeight();
        let svgWidth = this.getSvgWidth();
        let maxVal = this.getMaxValue(this.options.data.map(r => r.value));

        let chartData = this.getChartData(svgHeight, svgWidth, maxVal);
        // this.draw();
        let xGrid = [];

        for (var i = 0; i <= 5; i++) {
            xGrid.push({ x1: 40, x2: this.width - 40, y1: svgHeight - i * 40, y2: svgHeight - i * 40 });
        }

        this.onChangeCallback.call(this, { chartData, yLabels, xLabels, xGrid });
    }

    append(tag) {
        let elem;
        return elem;
    }
}
export default BarChart;