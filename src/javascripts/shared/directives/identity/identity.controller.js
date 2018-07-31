let _countryService = new WeakMap();

class IdentityCtrl {

    constructor (CountryService) {
        _countryService.set(this, CountryService);
        this.stateList = [];
        this.monthList = [];
        this.yearList = [];

        this.model = {
            firstname: '',
            lastname: '',
            birthday: {
                month: null,
                date: null,
                year: null
            },
            address: {
                street: '',
                city: '',
                country: null,
                state: null,
                postcode: ''
            }
        };

        this.setupCountries();
        this.setupDates();
    }

    setupCountries () {
        this.countryList = _countryService.get(this).getCountryList();
        this.countryList.forEach(country => {
            country.title = country.country;
        });

        this.model.address.country = this.countryList.filter(x => x.title === 'United States')[0];
        let temp = [];
        this.model.address.country.states.forEach(state => {
            temp.push({ title: state });
        });
        this.stateList = temp;
    }

    setupDates () {
        this.monthList = [
            { title: 'January', value: 0 },
            { title: 'February', value: 1 },
            { title: 'March', value: 2 },
            { title: 'April', value: 3 },
            { title: 'May', value: 4 },
            { title: 'June', value: 5 },
            { title: 'July', value: 6 },
            { title: 'August', value: 7 },
            { title: 'September', value: 8 },
            { title: 'October', value: 9 },
            { title: 'November', value: 10 },
            { title: 'December', value: 11 }
        ];

        for (let i = 1930; i < 2000; i++) {
            this.yearList.push({ title: i, value: i });

        }
    }

    selectCountry (index, country) {
        let temp = [];
        country.states.forEach(state => {
            temp.push({ title: state });
        });
        this.stateList = temp;
        this.model.address.state = null;
    }

    close () {
        this.onClose();
    }

    save () {
        this.close();
    }
}

IdentityCtrl.$inject = ['CountryCtrl'];
export { IdentityCtrl }
