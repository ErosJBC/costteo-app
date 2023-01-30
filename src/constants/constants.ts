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

export const ITEMS_SEARCH_PROVIDERS = [
    { name: "Construccioneswill. S", description: "Pintor, Electricista, Carpintero, Gasfitero, Albañil, Construcción y Otros", logo: "", score: 3, calification: 6 },
    { name: "Artes Lucas Amoblados", description: "Carpintero, otros", logo: "", score: 3, calification: 3 },
    { name: "Multiservicios", description: "Pintor, gasfitero, albañil, otros, pequeños arreglos", logo: "", score: 3, calification: 68 },
    { name: "Jm Group Cold Systems Peru Sac", description: "Electricista, técnico de aire, técnico de electrodomésticos, otros, pequeños", logo: "", score: 3, calification: 30 },
    { name: "Taller De Servicios y Soluciones En", description: "Carpintero, techista, otros, drywall", logo: "", score: 3, calification: 18 },
]
