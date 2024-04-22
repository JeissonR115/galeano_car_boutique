const defaultRedes = [
    { url: '#', icono: 'facebook-f' },
    { url: '#', icono: 'twitter' },
    { url: '#', icono: 'instagram' },
    { url: '#', icono: 'linkedin-in' }
];
const defaultInfoContacto = [
    { label: 'Dirección', valor: 'Calle Principal, Ciudad, País' },
    { label: 'Teléfono', valor: '+123456789' },
    { label: 'Correo electrónico', valor: 'info@example.com' }
];


function renderizarContenidoContacto(infoContacto = defaultInfoContacto) {
    // Contenido de la sección de contacto
    const contactoDiv = document.createElement('div');
    contactoDiv.classList.add('footer-contenido');

    const contactoTitulo = document.createElement('h3');
    contactoTitulo.classList.add('footer-titulo');
    contactoTitulo.textContent = 'Contacto';

    const infoContactoItems = infoContacto.map(info => {
        const item = document.createElement('p');
        item.classList.add('footer-info');
        item.textContent = `${info.label}: ${info.valor}`;
        return item;
    });

    contactoDiv.appendChild(contactoTitulo);
    infoContactoItems.forEach(item => {
        contactoDiv.appendChild(item);
    });

    return contactoDiv;
}


function renderizarRedesSociales(redesSociales = defaultRedes) {
    // Contenido de la sección de redes sociales
    const redesSocialesDiv = document.createElement('div');
    redesSocialesDiv.classList.add('footer-contenido');

    const redesSocialesTitulo = document.createElement('h3');
    redesSocialesTitulo.classList.add('footer-titulo');
    redesSocialesTitulo.textContent = 'Redes Sociales';

    const redesSocialesLista = document.createElement('ul');
    redesSocialesLista.classList.add('footer-redes');

    redesSociales.forEach(redSocial => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', redSocial.url);
        const icon = document.createElement('i');
        icon.classList.add('fab');
        icon.classList.add(`fa-${redSocial.icono}`);
        link.appendChild(icon);
        listItem.appendChild(link);
        redesSocialesLista.appendChild(listItem);
    });

    redesSocialesDiv.appendChild(redesSocialesTitulo);
    redesSocialesDiv.appendChild(redesSocialesLista);

    return redesSocialesDiv;
}


export function renderizarFooter() {
    // Crear el contenedor del footer
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');

    // Renderizar contenido de contacto
    const contactoDiv = renderizarContenidoContacto();

    // Renderizar contenido de redes sociales
    const redesSocialesDiv = renderizarRedesSociales();

    // Añadir contenido al footer
    footerContainer.appendChild(contactoDiv);
    footerContainer.appendChild(redesSocialesDiv);

    return footerContainer;
}
