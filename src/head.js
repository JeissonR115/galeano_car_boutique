function crearMetaElemento(nombre, contenido) {
    const metaElemento = document.createElement('meta');
    metaElemento.setAttribute('name', nombre);
    metaElemento.setAttribute('content', contenido);
    return metaElemento;
}

function crearLinkElemento(rel, href, type) {
    const linkElemento = document.createElement('link');
    linkElemento.setAttribute('rel', rel);
    linkElemento.setAttribute('href', href);
    if (type) {
        linkElemento.setAttribute('type', type);
    }
    return linkElemento;
}

export function renderizarHead() {
    const head = document.getElementsByTagName('head')[0];

    // Metas
    head.appendChild(crearMetaElemento('charset', 'UTF-8'));
    head.appendChild(crearMetaElemento('viewport', 'width=device-width, initial-scale=1.0'));

    // Favicon
    head.appendChild(crearLinkElemento('shortcut icon', '/media/img/logo/icon.png', 'image/x-icon'));

    // Estilos
    const estilos = [
        '../styles/styles.css',
        '../styles/menu.css'
    ];

    estilos.forEach(estilo => {
        head.appendChild(crearLinkElemento('stylesheet', estilo));
    });

    // Fuentes
    head.appendChild(crearLinkElemento('preconnect', 'https://fonts.googleapis.com'));
    head.appendChild(crearLinkElemento('preconnect', 'https://fonts.gstatic.com', ''));
    head.appendChild(crearLinkElemento('stylesheet', 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Noto+Sans+KR:wght@100..900&family=Shadows+Into+Light+Two&display=swap'));

    // Font Awesome
    const scriptFontAwesome = document.createElement('script');
    scriptFontAwesome.setAttribute('src', 'https://kit.fontawesome.com/d91e5581b0.js');
    scriptFontAwesome.setAttribute('crossorigin', 'anonymous');
    head.appendChild(scriptFontAwesome);
}

