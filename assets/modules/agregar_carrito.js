import pintarCarrito from '/assets/modules/pintar_carrito.js';
import baseDeDatos from '/assets/dataBase/dataBase.js'

export default document.addEventListener('click', atraparBotones);

export let carrito = {};

function atraparBotones(e) {
   if (e.target.getAttribute("data-id")) {
      agregarAlCarrito(e.target.getAttribute("data-id"));
   }
}

function agregarAlCarrito(dataId) {
   baseDeDatos.forEach((producto) => {
      if (producto.id === parseInt(dataId)) {
         if (carrito[producto.id]) {
            carrito[producto.id].cantidad += 1;
         } else {
            carrito[producto.id] = {
               categoria: producto.categoria,
               nombre: producto.nombre,
               precio: producto.precio,
               imagen: producto.imagen,
               cantidad: 1,
               id: producto.id
            }
         }
      }
   })
   pintarCarrito();
}