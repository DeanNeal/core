class Chart {
    static get colorsTheme() {
        return ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#7cb5ec", "#434348"];
    }

    static get markerSize() {
        return 8;
    }

    static get xOffset() {
        return 140;
    }

    static get yOffset() {
        return 100;
    }

    static get barWidth() {
        return 30;
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

    getTrueLabelName(value) {
        let label;

        switch (true) {
            case (value >= 1000000000):
                label = (value / 1000000000).toFixed(1) + 'G'
                break;
            case (value >= 1000000):
                label = (value / 1000000).toFixed(1) + 'M'
                break;
            case (value >= 1000):
                label = (value / 1000).toFixed(1) + 'K';
                break;
            default:
                label = value.toFixed(1);
                break;
        }

        return label;
    }

    getMaxValue(array) {
        return Math.max.apply(null, array);
    }


    getSvgHeight() {
        return this.props.get('height') - Chart.yOffset;
    }

    getSvgWidth() {
        return this.props.get('width') - Chart.xOffset;
    }
}

export { Chart };