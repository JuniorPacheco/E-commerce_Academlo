import baseDeDatos from "../database/database.js"

const contenedorProductos = document.querySelector(".productos__container");

let productsTemplateHTML = '';
baseDeDatos.forEach((elemento) => {

    productsTemplateHTML += `
    <article class="producto__item">
    
    <div class="producto__imagen">
        <img loading="lazy" src="${elemento.imagen}" alt="producto imagen">
    </div>
    <div class="producto__description">
        <p>${elemento.nombre}</p>
        <p>${elemento.categoria}</p>
    </div>
    
    <div class="product__compra">
        <p>$ ${elemento.precio}</p>
        <button class="producto__boton" data-id="${elemento.id}"><i class='bx bxs-shopping-bag-alt'></i> Agregar al carrito</button>
    </div>
    
    </article>
    `;
})

export default contenedorProductos.insertAdjacentHTML('beforeend', productsTemplateHTML);