class OrderListCtrl {

    constructor() {
        this.orderTypeList = [
            { id: 0, title: 'Open' },
            { id: 1, title: 'Filled' }
        ];
        this.orderList = [
            { id: 0, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: null },
            { id: 1, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: null },
            { id: 2, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: null },
            { id: 3, size: '2.0000', filled: '1.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: null },
            { id: 4, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: 'Cancelled' },
            { id: 5, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: null },
            { id: 6, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: 'Not Filled' },
            { id: 7, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: null },
            { id: 8, size: '2.0000', filled: '0.0000', price_usd: '7689.90', fee: '0.00000', time: '17:12:55', status: null }
        ];
    }

    changeOrderType (item) {
        console.log(item);
    }
}

OrderListCtrl.$inject = [];
export { OrderListCtrl }
