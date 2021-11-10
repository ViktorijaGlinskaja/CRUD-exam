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

    wrapChild = (htmlElement) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        wrapper.append(htmlElement);
        return wrapper;
    }

    init = () => {
        API.fetchApartments(this.saveData, this.showError);
        this.htmlElement.className = 'row g-3 justify-content-center';
        this.render();
    }

    render = () => {
        if (this.state.apartments.length === 0) {
            this.htmlElement.innerHTML = '<img src="assets/loading.gif" style="width: 400px" />';
        } else {
            this.htmlElement.innerHTML = '';
            const cards = this.state.apartments.map((cardProps) => new ApartmentCardComponent(cardProps));
            const cardElements = cards.map(component => component.htmlElement);
            const wrappedElements = cardElements.map(this.wrapChild);
            this.htmlElement.append(...wrappedElements);
        }
    }
}