class SelectMenuCtrl {

    constructor($scope) {
        this.$scope = $scope;
        this.selectedItem = {};
        this.isShow = false;
        this._itemList = [];

        Object.defineProperty(this, 'itemList', {
            get: () => {
                return  this._itemList;
            },

            set: (newVal) => {
                if (newVal) {
                    this._itemList = newVal;
                    this.selectedItem = newVal[0];
                }
            }
        });
    }

    toggleShow () {
        this.isShow = !this.isShow;
    }

    selectItem (item) {
        this.toggleShow();
        this.selectedItem = item;
        this.onSelectItem({ item:item });
    }
}

SelectMenuCtrl.$inject = ['$scope'];
export { SelectMenuCtrl }
