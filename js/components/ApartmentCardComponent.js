class ApartmentCardComponent {
    static USD_EUR = 0.86;
    constructor(props) {
        this.props = props;
        this.htmlElement = document.createElement('article');
        this.init();
    }

    convertPrice = (amount, currency) => {
        if (currency === "€") {
            return amount;
        } else {
            return Math.round(amount * ApartmentCardComponent.USD_EUR)
        }
    };

    init = () => {
        const { type, address, roomCount, squares, owner, price, imgSrc, onDelete } = this.props;
        const addressApartment = `${address.street}-${address.number}, ${address.city}, ${address.country} `
        const name = `${owner.fullname}`;
        const mobile = `${owner.phone}`;
        const mail = `${owner.email}`;
    
        this.htmlElement.className = 'bg-gradient-light card p-4 shadow-sm position-relative gap-3';
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title h5"> ${addressApartment}</h2>
          <span class="card-text h6 fw-light"><strong>Room count: </strong>${roomCount}</span>
          <span class="card-text h6 fw-light"><strong>  Size: </strong>${squares} m²</span>
          <p class="card-text fw-light"><strong>Type: </strong> ${type}</p>
          <p class="fw-light"><strong>Owner: </strong> ${name}</p>
          <p class="fw-light"><strong>Phone: </strong> ${mobile}</p>
          <p class="fw-light"><strong>Email: </strong> ${mail}</p>


          <span class="text-success">${this.convertPrice(price.amount, price.currency)} € </span>
          <button class="btn btn-sm btn-danger position-absolute top-0 end-0 mt-4 me-4">✕</button>
        </div> `
        const del = this.htmlElement.querySelector('.btn');
        del.addEventListener('click', onDelete);
    }
}