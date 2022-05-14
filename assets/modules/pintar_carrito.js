import { carrito } from '/assets/modules/agregar_carrito.js';

const carItems = document.querySelector('.car__items');
const total = document.querySelector('.car__total p span');

export default function pintarCarrito() {
    let precioTotal = 0;
    let templateItemsCarritoHTML = '';
    Object.values(carrito).forEach((item) => {
        templateItemsCarritoHTML += `
        <article data-id-item-car="${item.id}" class="itemC">

            <div class="itemC__imagen">
                <img loading="lazy" src="${item.imagen}" alt="imagen producto">
            </div>
            <div class="itemC__info">
                <p class="itemC__nombre">${item.nombre}</p>
                <p class="itemC__precio">Precio c/u: $<span>${item.precio}</span></p>
                <p class="itemC__subtotal">Subtotal: $<span>${item.precio * item.cantidad}</span></p>
            </div>
            <div class="itemC__actions">
                <div class="itemC__btnMenos">
                    <i data-id-item-car="${item.id}" class='bx bxs-minus-circle'></i>
                </div>
                <p class="itemC__cantidad">${item.cantidad} unidad</p>
                <div class="itemC__btnMas">
                    <i data-id-item-car="${item.id}" class='bx bxs-plus-circle'></i>
                </div>
            </div>
            <div class="itemC__deleteAll">
                <i data-id-item-car="${item.id}" class='bx bxs-message-square-x'></i>
            </div>

        </article>
        `;
        precioTotal += (item.precio * item.cantidad);
    })
    total.innerHTML = precioTotal;
    carItems.innerHTML = templateItemsCarritoHTML;
    if(Object.values(carrito).length === 0){
        carItems.insertAdjacentHTML('afterbegin', `
        <div class="car__vacio">
            <img src="assets/img/carVacio.png" alt="Caja vacia">
            <figcaption>Carrito Vacio</figcaption>
        </div>
        `); 
    }
}