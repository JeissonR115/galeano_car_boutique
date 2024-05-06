export const menu = {
    default:[
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
    ],
    module:[    {
        class: 'index',
        href: './index.html',
        icon: 'home',
        name: 'Inicio'
    },],

}