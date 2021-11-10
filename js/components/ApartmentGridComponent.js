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
        this.render();
    }

    showError = error => {
        console.error(error);
    }

    init = () => {
        API.fetchApartments(this.saveData, this.showError);
        this.htmlElement.className = 'd-flex gap-3 justify-content-center';
        this.render();
    }
    render = () => {
        if (this.state.apartments.length === 0) {
            this.htmlElement.innerHTML = 'siunčiama...';
        } else {
            this.htmlElement.innerHTML = 'parsiųsta!';
            // const cards = this.state.apartments.map(({ id, ...cardProps }) => new CarCardComponent({
            //     ...cardProps,
            //     onDelete: () => this.deleteApartment(id)
            // }));
            // const cardElements = cards.map(component => component.htmlElement);
            // this.htmlElement.append(...cardElements);
        }
    }
}