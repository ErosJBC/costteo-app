export const URL_BASE: string = "https://script.google.com/macros/s/AKfycbza9R84fupE2Z3bFB54YU2R-8tPsCzz80BRW7ctOF37N_oh-HsE5_XgnyNVgw04W3iy/exec";

export const ITEMS_NAVBAR = [
    { path: "", name: "Precios" },
    { path: "proveedores", name: "Proveedores" },
    { path: "licitaciones", name: "Licitaciones" },
    { path: "mis-costos", name: "Mis costos" },
    { path: "contactos", name: "Contactos" },
];

export const ITEMS_PROVEEDORES = [
    { name: "Construcción", color: "bg-orange-custom" },
    { name: "Minería", color: "bg-blue-custom" },
    { name: "Logística y Transporte", color: "bg-blue-custom" },
    { name: "Telecomunicaciones", color: "bg-blue-custom" },
    { name: "Otros", color: "bg-blue-custom" },
];

export const SUBITEMS_PROVEEDORES = [
    { name: "Proveedores", color: "" },
    { name: "Materiales", color: "bg-orange-custom" },
    { name: "Equipos y Maquinarias", color: "bg-blue-custom" },
    { name: "Servicios", color: "bg-blue-custom" },
];

export const ITEMS_LICITACIONES = [
    { name: "Licitaciones Públicas", color: "bg-orange-custom" },
    { name: "Licitaciones de Clientes", color: "bg-blue-custom" },
    { name: "Crear Licitación", color: "bg-blue-custom" },
];

export const SUBITEMS_LICITACIONES = [
    { name: "Productos", color: "bg-blue-custom" },
    { name: "Servicios", color: "bg-orange-custom" },
    { name: "Adjudicados", color: "bg-blue-custom" },
];


export const ITEMS_CONTACTOS = [
    { name: "Clientes", color: "bg-orange-custom" },
    { name: "Proveedores", color: "bg-blue-custom" },
];

export const ITEMS_ASIDE_RIGHT_PROVEEDORES = [
    {
        title: "Materiales",
        subitems: [
            { title: "Agregados" },
            { title: "Aglomerantes" },
            { title: "Morteros" },
            { title: "Acero" },
            { title: "Madera" },
            { title: "Vidrios" },
            { title: "Perfiles" },
            { title: "Concreto" },
            { title: "Albañilería" },
            { title: "Pinturas" }
        ]
    },
    { title: "Equipos" },
    { title: "Maquinaria" },
    { title: "Herramientas" },
    {
        title: "Servicios",
        subitems: [
            { title: "Carpintería" },
            { title: "Albañilería" },
            { title: "Acabados" },
            { title: "Puertas" },
            { title: "Ventanas" },
            { title: "Mamparas" },
            { title: "Concreto Premezclado" },
            { title: "Prefabricados" },
            { title: "Carpintería metálica" }
        ]
    },
];

export const ITEMS_ASIDE_LEFT_PROVEEDORES = [
    {
        title: "Ubicación",
        subitems: [
            { title: "Departamento" },
            { title: "Provincia" },
            {
                title: "Distrito",
                subitems: [
                    { title: "ver en mapa" }
                ],
            }
        ]
    },
    { title: "Experiencia" },
    {
        title: "Garantía",
        subitems: [
            { title: "6 meses" },
            { title: "1 año" },
            { title: "Más ..." },
        ]
    },
    {
        title: "Forma de Pago",
        subitems: [
            { title: "Inmediato" },
            { title: "Crédito 15 días" },
            { title: "Crédito 30 días" },
            { title: "Más ..." },
        ]
    },
    { title: "Certificaciones" },
];

export const ITEMS_ASIDE_RIGHT_LICITACIONES = [
    {
        title: "Sector",
        subitems: [
            { title: "Construcción" },
            { title: "Industria y manufactura" },
            { title: "Minería" },
            { title: "Energías" },
            { title: "Telecomunicaciones" },
            { title: "Logísticas y transporte" },
            { title: "Sistemas y TI" },
        ]
    },
    {
        title: "Ubicación",
        subitems: [
            { title: "Departamento" },
            { title: "Provincia" },
            {
                title: "Distrito",
                subitems: [
                    { title: "ver en mapa" }
                ],
            }
        ]
    },
    {
        title: "Tipo de Entidad",
        subitems: [
            { title: "Pública" },
            { title: "Privada" },
        ]
    },
];

export const ITEMS_SEARCH_PROVIDERS = [
    { name: "Construccioneswill. S", description: "Pintor, Electricista, Carpintero, Gasfitero, Albañil, Construcción y Otros", logo: "", score: 3, calification: 6 },
    { name: "Artes Lucas Amoblados", description: "Carpintero, otros", logo: "", score: 3, calification: 3 },
    { name: "Multiservicios", description: "Pintor, gasfitero, albañil, otros, pequeños arreglos", logo: "", score: 3, calification: 68 },
    { name: "Jm Group Cold Systems Peru Sac", description: "Electricista, técnico de aire, técnico de electrodomésticos, otros, pequeños", logo: "", score: 3, calification: 30 },
    { name: "Taller De Servicios y Soluciones En", description: "Carpintero, techista, otros, drywall", logo: "", score: 3, calification: 18 },
];

export const ITEMS_CLIENTES_CONTACTOS = [
    { business_name: "Preconstruction S.A.C", address: "Av. Los Tulipanes Mz. F Lt. 12 - Carapongo, Lurigancho", telephone: "945617528 / 73977152", email: "ventas1@precon.comp.pe", logo: "", pending_quotation: "01", approved_quotation: "01" },
    { business_name: "Indra Perú S.A.C", address: "Av. Los Tulipanes Mz. F Lt. 12 - Carapongo, Lurigancho", telephone: "945617528 / 73977152", email: "informes@indracompany.comp", logo: "", pending_quotation: "03" },
    { business_name: "Preconstruction S.A.C", address: "Av. Los Tulipanes Mz. F Lt. 12 - Carapongo, Lurigancho", telephone: "945617528 / 73977152", email: "ventas1@precon.comp.pe", logo: "", messages: "Mensajes por responder" },
    { business_name: "Preconstruction S.A.C", address: "Av. Los Tulipanes Mz. F Lt. 12 - Carapongo, Lurigancho", telephone: "945617528 / 73977152", email: "ventas1@precon.comp.pe", logo: "", pending_quotation: "01" },
    { business_name: "Preconstruction S.A.C", address: "Av. Los Tulipanes Mz. F Lt. 12 - Carapongo, Lurigancho", telephone: "945617528 / 73977152", email: "ventas1@precon.comp.pe", logo: "", approved_quotation: "02" },
];
