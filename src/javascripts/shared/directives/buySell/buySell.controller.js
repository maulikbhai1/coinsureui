class BuySellCtrl {

    constructor() {
        this.optionList = [
            { id: 0, title: 'Buy' },
            { id: 1, title: 'Sell' }
        ];
        this.selectedOption = this.optionList[0];
    }

    changeOption (item) {
        this.selectedOption = item;
    }
}

BuySellCtrl.$inject = [];
export { BuySellCtrl }
