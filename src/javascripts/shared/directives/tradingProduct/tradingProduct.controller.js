class TradingProductCtrl {

    constructor() {
        this.isShowAssetInfo = false;
        this.assetChangeList = [
            { id: 0, asset: 'BTC / USD', lastPrice: '8,885.93', change: '0.84' },
            { id: 1, asset: 'BTC / EUR', lastPrice: '8,885.93', change: '0.84' },
            { id: 2, asset: 'BTC / GBP', lastPrice: '8,885.93', change: '0.84' },
            { id: 3, asset: 'BCH / USD', lastPrice: '8,885.93', change: '0.84' },
            { id: 4, asset: 'BCH / BTC', lastPrice: '8,885.93', change: '0.84' },
            { id: 5, asset: 'BCH / EUR', lastPrice: '8,885.93', change: '0.84' },
            { id: 6, asset: 'ETH / USD', lastPrice: '8,885.93', change: '0.84' },
            { id: 7, asset: 'ETH / BTC', lastPrice: '8,885.93', change: '0.84' },
            { id: 8, asset: 'ETH / EUR', lastPrice: '8,885.93', change: '0.84' }
        ];
    }

    toggleAssetInfo () {
        this.isShowAssetInfo = !this.isShowAssetInfo;
    }
}

TradingProductCtrl.$inject = [];
export { TradingProductCtrl }
