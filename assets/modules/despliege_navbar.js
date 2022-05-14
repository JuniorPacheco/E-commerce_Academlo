const btnMenu = document.querySelector(".barra__menu");
const menuDesplegable = document.querySelector(".barra__nav");

export default btnMenu.addEventListener('click', desplegarMenu);

function desplegarMenu() {
   menuDesplegable.classList.contains("active") ?
   menuDesplegable.classList.remove("active") :
   menuDesplegable.classList.add("active");
}

