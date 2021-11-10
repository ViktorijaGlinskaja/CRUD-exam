class ApartmentCardComponent {
    constructor(props) {
        this.props = props;
        this.htmlElement = document.createElement('article');
        this.init();
    }

    init = () => {
        this.htmlElement.className = 'card p-4 shadow-sm position-relative gap-3';
        this.htmlElement.innerHTML = 'Korteles turinys'
    }
}