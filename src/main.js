import { renderizarHead } from "/src/head.js";
import { renderizarMenu } from "/src/header.js";

renderizarHead()

const nav = document.querySelector(".nav")
const menu = renderizarMenu()
nav.appendChild(menu);
