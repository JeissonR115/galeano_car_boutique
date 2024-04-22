
import { renderizarHead } from "/src/head.js";
import { renderizarMenu, renderizarLogo } from "/src/header.js";
import { renderizarFooter } from "./footer.js";
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    const nav = document.querySelector(".nav");
    const footer = document.querySelector(".footer");
    renderizarHead()
    nav.appendChild(renderizarMenu());
    logo.appendChild(renderizarLogo());
    footer.appendChild(renderizarFooter());
});

