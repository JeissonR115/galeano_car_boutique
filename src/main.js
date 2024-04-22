
import { renderizarHead } from "/src/head.js";
import { renderizarMenu, renderizarLogo } from "/src/header.js";
import { renderizarFooter } from "./footer.js";
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');

    if(logo)logo.appendChild(renderizarLogo());

});

