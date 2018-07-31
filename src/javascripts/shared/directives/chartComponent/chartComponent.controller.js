class ChartComponentCtrl {

    constructor() {
        this.chartTypeList = [
            { id: 0, title: 'Candle' },
            { id: 1, title: 'Line' },
            { id: 2, title: 'Depth' }
        ];
        this.periodList = [
            { id: 0, title: '1d' },
            { id: 1, title: '5d' },
            { id: 2, title: '1m' },
            { id: 3, title: '3m' },
            { id: 4, title: '6m' },
            { id: 5, title: '1y' },
            { id: 6, title: '5y' },
            { id: 7, title: 'All' },
        ];
    }

    changeChartType (item) {
        console.log(item);
    }

    changePeriod (item) {
        console.log(item);
    }
}

ChartComponentCtrl.$inject = [];
export { ChartComponentCtrl }
