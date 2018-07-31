class TipCtrl {

    constructor() {
        this.isShowTip = false;
    }

    toggleTip () {
        this.isShowTip = !this.isShowTip;
    }
}

TipCtrl.$inject = [];
export { TipCtrl }
