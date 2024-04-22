
import { renderizarHead } from "/src/head.js";
import { renderizarMenu, renderizarLogo } from "/src/header.js";
import { renderizarFooter } from "./footer.js";
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    renderizarHead()
    if(nav)nav.appendChild(renderizarMenu());
    if(logo)logo.appendChild(renderizarLogo());
    if(footer)footer.appendChild(renderizarFooter());
});

