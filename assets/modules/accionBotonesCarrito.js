import { carrito } from '/assets/modules/agregar_carrito.js';
import pintarCarrito from '/assets/modules/pintar_carrito.js';

document.addEventListener('click', accionesBotones);

export default function accionesBotones(e) {
    if(e.target.classList.contains("bx")){
        if(e.target.classList.contains("bxs-plus-circle")) {
            carrito[e.target.getAttribute('data-id-item-car')].cantidad++;
        }else if(e.target.classList.contains("bxs-minus-circle")) {
            carrito[e.target.getAttribute('data-id-item-car')].cantidad === 1 ?
            delete carrito[e.target.getAttribute('data-id-item-car')] :
            carrito[e.target.getAttribute('data-id-item-car')].cantidad--;
        }else if(e.target.classList.contains("bxs-message-square-x")){
            delete carrito[e.target.getAttribute('data-id-item-car')];
        }
    }else if(e.target.classList.contains("car__buttonDeleteAll")){
        for(let i = Object.values(carrito).length - 1; i >= 0 ; i--){
            delete carrito[Object.values(carrito)[i].id];
        }
    }
    pintarCarrito();
}