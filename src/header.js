// Definir los elementos del menú
const defaultMenuItems = [
    {
        class: 'index',
        href: './index.html',
        icon: 'home',
        name: 'Inicio'
    },
    {
        class: 'nosotros',
        href: './nosotros.html',
        icon: 'users',
        name: 'Nosotros',
        submenu: [
            {
                class: 'mission',
                href: './nosotros.html#mission',
                icon: 'compass',
                name: 'misión'
            },
            {
                class: 'vision',
                href: './nosotros.html#vision',
                icon: 'glasses',
                name: 'vision'
            },
            {
                class: 'values',
                href: './nosotros.html#values',
                icon: 'puzzle-piece',
                name: 'valores'
            },
        ]
    },
    {
        class: 'ingresa',
        href: './ingresa.html',
        icon: 'sign-in-alt',
        name: 'Ingresa'
    },
    {
        class: 'constactanos',
        href: './contactanos.html',
        icon: 'envelope',
        name: 'Contáctanos'
    }
];

export function renderizarMenu(menuItems = defaultMenuItems) {

    const ul = document.createElement('ul');
    ul.classList.add('nav__list');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list__item');
        li.classList.add(`list__item--${item.class}`);

        const a = document.createElement('a');
        a.classList.add('item__link');
        a.setAttribute('href', item.href);

        const icon = document.createElement('i');
        icon.classList.add('fas');
        icon.classList.add(`fa-${item.icon}`);

        const span = document.createElement('span');
        span.classList.add('item__name');
        span.textContent = " " + item.name;

        a.appendChild(icon);
        a.appendChild(span);
        li.appendChild(a);

        if (item.submenu) {
            const submenu = renderizarMenu(item.submenu);
            li.appendChild(submenu)
        }

        ul.appendChild(li);
    });

    return ul
}
export function renderizarLogo() {
    // Crear el enlace del logo
    const logoLink = document.createElement('a');
    logoLink.classList.add('logo__link');
    logoLink.setAttribute('href', './index.html');

    // Crear el contenedor de la imagen
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img_container');

    // Crear la imagen del logo
    const logoImg = document.createElement('img');
    logoImg.classList.add('logo__img');
    logoImg.setAttribute('src', './media/img/logo/logo--1.png');
    logoImg.setAttribute('alt', 'logo Galeano Car Boutique');

    // Añadir la imagen al contenedor de la imagen
    imgContainer.appendChild(logoImg);

    // Añadir el contenedor de la imagen al enlace del logo
    logoLink.appendChild(imgContainer);

   return logoLink
}

