const botonMenuCarrito = document.querySelector('.barra__carrito');
const carritoDesplegable = document.querySelector('.car');

export default botonMenuCarrito.addEventListener('click', desplegarCarrito);

function desplegarCarrito() {
    carritoDesplegable.classList.contains("active") ?
    carritoDesplegable.classList.remove("active") :
    carritoDesplegable.classList.add("active");
}