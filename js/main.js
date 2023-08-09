/*BOTON MENU-------------------------*/

const menuBtn = document.querySelector('#menu-btn')
    /*console.log(menuBtn)*/

menuBtn.addEventListener('click', function () {
    document.body.classList.toggle('mobile-menu-active')
})


/* DESTACADO DE BOTONES---------------*/
const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const activeItem = document.querySelector('.active')
        activeItem.classList.remove('active')
        e.target.classList.add('active')
    });
})


/*boton modo nocturno*/

const cambioModoNocturno = document.querySelector('#modo-nocturno');

cambioModoNocturno.addEventListener('click', function () {
    document.body.classList.toggle('cambio-fondo');
});

const interaccionModoNocturno = document.querySelector('#modo-nocturno');

interaccionModoNocturno.addEventListener('click', function () {
    document.body.classList.toggle('mobile-modoNocturno-active')
})




/*Portafolio fotografico---------------*/
window.alert('¡Bienvenidos a nuestra pagina web!...❤✨ Recorre cada una de las secciones y descubre nuestros trabajos.');

let experiencias = [
    {
        tema: 'ARQUITECTURA',
        obra: 'Sistema de transporte Cable Tren, Caracas, Venezuela',
        trabajo: 'Revestimiento de fachadas internas de estaciones en sistema de paneles fachada ventilada Faveton',
        img: './img/1.2.jpg'
    },
    {
        tema: 'ARQUITECTURA',
        obra: 'Mausoleo Simón Bolívar, Caracas, Venezuela',
        trabajo: 'Revestimiento de fachadas externas en Faveton e internas en Swisspearl y acabado de pisos en mármol',
        img: './img/2.1.jpg'
    },
    {
        tema: 'ARQUITECTURA',
        obra: 'Estadio Polideportivo de Pueblo Nuevo, Táchira, Venezuela',
        trabajo: 'Acabados internos de techos, paredes y palcos presidenciales y cabinas de transmisión TV',
        img: './img/3.3.jpg'
    },
    {
        tema: 'MARKETING DIGITAL',
        obra: 'Ferretería Industrial MBJ srl, CABA, Argentina',
        trabajo: 'Ventas Online, Marketing Digital, Diseño de contenido, manejo de redes sociales',
        img: './img/4.1.jpg'
    },
    {
        tema: 'DISEÑO GRAFICO',
        obra: 'Il Duo Pizzas s.a., Táchira, Venezuela',
        trabajo: 'Diseño Identidad gráfica y corporativa de la empresa, diseño de logotipo, manual corporativo y artes gráficas',
        img: './img/5.1.jpg'
    },
    {
        tema: 'DISEÑO WEB',
        obra: 'MDM Designe',
        trabajo: 'Diseño de pagina web biografia',
        img: './img/6.jpg'
    },
];

//
function crearHTMLExperiencia(experiencia) {
    let temaExperiencia = document.createElement('h3');
    temaExperiencia.innerText = experiencia.tema;

    let obraExperiencia = document.createElement('p');
    obraExperiencia.innerText = experiencia.obra;

    let trabajoExperiencia = document.createElement('p');
    trabajoExperiencia.innerText = experiencia.trabajo;

    let imagenExperiencia = document.createElement('img');
    imagenExperiencia.src = experiencia.img;


    let listItem = document.createElement('li');
    listItem.appendChild(temaExperiencia);
    listItem.appendChild(obraExperiencia);
    listItem.appendChild(trabajoExperiencia);
    listItem.appendChild(imagenExperiencia);

    return listItem;
};

const listaExperiencias = document.querySelector('#experiencia-list');

/* */
experiencias.forEach(function (experiencia) {
    let experienciaListItem = crearHTMLExperiencia(experiencia);

    listaExperiencias.appendChild(experienciaListItem);
});


//timeline-------------//

const learning = [
    {
        year: "1997 - 2006",
        direction: "Táchira - Venezuela",
        name: "Formación en Arquitectura",
        description: "UNET Universidad Nacional Experimental del Táchira, Estudios Carrera de Arquitectura, duración de 6 años incluyendo 1 año de pasantías y 1 año de tesis, estudios de programas Autocad 2D y 3D, Inspección de obras, Administración de proyectos"
    },
    {
        year: "2006 - 2007",
        direction: "Táchira - Venezuela",
        name: "Gerente de Proyectos, Ingeniero Residente",
        description: "Empresa Deco-Instalaciones c.a. Arquitecto proyectista de sala de proyectos, obra: Reconstrucción y acondicionamiento de Estado Polideportivo de Pueblo Nuevo, Ingeniero Residente"
    },
    {
        year: "2007 - 2008",
        direction: "Táchira - Venezuela",
        name: "Supervisor de Obras Regionales",
        description: "Organismo UCER Unidad Coordinadora de Ejecución Regional sección Táchira, Arquitecto supervisor de obras educacionales de construcción, acondicionamiento, cambio de uso y otros"
    },
    {
        year: "2009",
        direction: "Táchira - Venezuela",
        name: "Arquitecto en jefe Dpto SUVI",
        description: "Organismo INAVI Instituto Nacional de la Vivienda sección Táchira, Arquitecto en jefe departamento de proyecto, sustitución de ranchos por viviendas y barrio adentro"
    },
    {
        year: "1999 - 2014",
        direction: "Táchira - Venezuela",
        name: "Diseño Gráfico / Community Manager",
        description: "Empresa Il Duo Pizzas s.a. Diseño de identidad gráfica, Manual corporativo, material POP, manejo de redes sociales y administración en general"
    },
    {
        year: "2013 - 2014",
        direction: "Táchira - Venezuela",
        name: "Gerente General / Arquitecto / Diseño Gráfico",
        description: "Empresa Desarrollo turístico Floryana c.a. Administración general de procesos hoteleros, diseño de áreas comunes y acondicionamiento de edificaciones existentes, creación de manual de normas y procedimientos, diseño de página WEB"
    },
    {
        year: "2014 - 2017",
        direction: "Caracas - Venezuela",
        name: "Arquitecto Comercial",
        description: "Empresa Desarrollos Koma GPC C.A. Arquitecto técnico comercial, diseño y construcción; representante de ventas de 5 marcas de materiales constructivos de acabados internacionales"
    },
    {
        year: "2018 - 2021",
        direction: "CABA - Argentina",
        name: "Supervisor de Mantenimiento",
        description: "Empresa Administración ColucciCosta recepción de solicitud de mantenimiento, gestión de contratación de obra para el mantenimiento de consorcios, control de obra ejecutada, "
    },
    {
        year: "2021 - Actualidad",
        direction: "CABA - Argentina",
        name: "Director de Ventas on-line / Marketing Digital / Diseño Grafico",
        description: "Empresa Ferretería Industrial MBJ, asesor técnico comercial para empresas del gremio de la construcción, representante de ventas on-line, diseño de página web y mantenimiento de redes sociales"
    },
    {
        year: "Actualidad",
        direction: "CABA - Argentina",
        name: "Formación Diseño Web Front End",
        description: "Eidos Global / Accenture  - Diseño y creación de páginas Web en lenguaje HTML, CSS y JS"
    }
]

//render html 

var html = "";
learning.forEach(e=>{
    html +="<div class='child'><div class='content'><h3>"+e.year+"</h3><h3>"+e.direction+"</h3><h3>"+e.name+"</h3><p>"+e.description+"</p></div> </div>"
})
timeline.innerHTML = html

