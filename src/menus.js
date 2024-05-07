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
                    name: 'misión',
                    submenu: [
                        {
                            class: 'mission',
                            href: './nosotros2.html#mission',
                            icon: 'compass',
                            name: 'misión'
                        },
                        {
                            class: 'vision',
                            href: './nosotros2.html#vision',
                            icon: 'glasses',
                            name: 'vision'
                        },
                        {
                            class: 'values',
                            href: './nosotros2.html#values',
                            icon: 'puzzle-piece',
                            name: 'valores'
                        },
                    ]
                },
                {
                    class: 'vision',
                    href: './nosotros.html#vision',
                    icon: 'glasses',
                    name: 'vision',
                    submenu:[
                        {
                            class: 'mission',
                            href: './nosotros.html#mission',
                            icon: 'compass',
                            name: 'misión',
                            submenu: [
                                {
                                    class: 'mission',
                                    href: './nosotros2.html#mission',
                                    icon: 'compass',
                                    name: 'misión'
                                },
                                {
                                    class: 'vision',
                                    href: './nosotros2.html#vision',
                                    icon: 'glasses',
                                    name: 'vision'
                                },
                                {
                                    class: 'values',
                                    href: './nosotros2.html#values',
                                    icon: 'puzzle-piece',
                                    name: 'valores'
                                },
                            ]
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
    modulo:[    {
        class: 'index',
        href: './modulos.html',
        icon: 'home',
        name: 'Modulos'
    },
    {
        class: 'nosotros',
        href: './nosotros2.html',
        icon: 'users',
        name: 'Nosotros',
        submenu: [
            {
                class: 'mission',
                href: './nosotros2.html#mission',
                icon: 'compass',
                name: 'misión'
            },
            {
                class: 'vision',
                href: './nosotros2.html#vision',
                icon: 'glasses',
                name: 'vision'
            },
            {
                class: 'values',
                href: './nosotros2.html#values',
                icon: 'puzzle-piece',
                name: 'valores'
            },
        ]
    },
    {
        class: 'salir',
        href: './ingresa.html',
        icon: 'sign-in-alt',
        name: 'salir'
    },
    ],

}