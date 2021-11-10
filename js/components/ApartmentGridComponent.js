class ApartmentGridComponent {
    constructor() {
        this.htmlElement = document.createElement('div');
        this.state = {
            apartments: []
        };
        this.init();
    };
    saveData = (apartments) => {
        this.state.apartments = apartments;
        // this.render();
    }

    showError = error => {
        console.error(error);
    }

    init = () => {
        API.fetchApartments(this.saveData, this.showError);
        this.htmlElement.className = 'd-flex gap-3 justify-content-center';
        // this.render();
    }
}