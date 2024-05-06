import { renderizarHead } from "./head.js";
import { renderizarMenu, renderizarLogo } from "./header.js";
import { renderizarFooter } from "./footer.js";
import { menu } from "./menus.js";

// Función para extraer el modificador de una clase
const extraerModificadorElemento = (clase) => {
    const match = clase.match(/--(\w+)/);
    return match ? match[1] : null;
};
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    const navClass = nav ? extraerModificadorElemento(nav.classList.value) : null;
    const menuARenderizar = navClass && menu[navClass] ? menu[navClass] : menu.default;
    console.log(menuARenderizar);
    renderizarHead();
    // Renderizar el menú correspondiente
    if (nav) nav.appendChild(renderizarMenu(menuARenderizar));
    if (logo) logo.appendChild(renderizarLogo());
    if (footer) footer.appendChild(renderizarFooter());
});
