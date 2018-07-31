class CustomDropdownCtrl {

    constructor() {}

    toggleShow () {
        this.show = !this.show;
    }

    selectItem (index, item) {
        this.toggleShow();
        this.currentValue = item;
        this.onSelectItem({index, item});
    }
}

CustomDropdownCtrl.$inject = [];
export { CustomDropdownCtrl }
