
import { renderizarHead } from "/src/head.js";
import { renderizarMenu, renderizarLogo } from "/src/header.js";

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    const nav = document.querySelector(".nav")
    renderizarHead()
    nav.appendChild(renderizarMenu());
    logo.appendChild(renderizarLogo());
});

