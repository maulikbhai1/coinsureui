var isShowAssetInfo = false;
var dropdownState = {
    chartType: false,
    chartPeriod: false,
    orderType: false,
    buySell: false,
};

function toggleAssetInfo () {
    isShowAssetInfo = !isShowAssetInfo;
    var tradingAssetInfo = document.getElementById('trading-asset-info-id');
    if (tradingAssetInfo) {
        if (isShowAssetInfo) {
            tradingAssetInfo.classList.add('trading-dropdown--open');
            tradingAssetInfo.classList.remove('trading-dropdown--hide');
        } else {
            tradingAssetInfo.classList.remove('trading-dropdown--open');
            tradingAssetInfo.classList.add('trading-dropdown--hide');
        }
    }
}

function toggleShow (what) {
    switch (what) {
        case 'chart-type':
            dropdownState.chartType = !dropdownState.chartType;
            var dropdown = document.getElementById('chart-type-dropdown-id');
            if (dropdown) {
                if (dropdownState.chartType) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;

        case 'chart-period':
            dropdownState.chartPeriod = !dropdownState.chartPeriod;
            var dropdown = document.getElementById('chart-period-dropdown-id');
            if (dropdown) {
                if (dropdownState.chartPeriod) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;

        case 'order-type':
            dropdownState.orderType = !dropdownState.orderType;
            var dropdown = document.getElementById('order-type-dropdown-id');
            if (dropdown) {
                if (dropdownState.orderType) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;

        case 'buy-sell':
            dropdownState.buySell = !dropdownState.buySell;
            var dropdown = document.getElementById('buy-sell-dropdown-id');
            if (dropdown) {
                if (dropdownState.buySell) {
                    dropdown.classList.add('select-dropdown-menu__list--open');
                    dropdown.classList.remove('select-dropdown-menu__list--hide');
                } else {
                    dropdown.classList.remove('select-dropdown-menu__list--open');
                    dropdown.classList.add('select-dropdown-menu__list--hide');
                }
            }
            break;
    }
}

function selectDropdownItem (dropdown, item) {
    toggleShow(dropdown);
}