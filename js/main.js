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
/*window.alert('¡Bienvenidos! ❤✨');*/

let experiencias = [
    {
        tema: 'ARQUITECTURA_1',
        obra: 'Sistema de transporte Cable Tren, Caracas, Venezuela',
        trabajo: 'Revestimiento de fachadas internas de estaciones en sistema de paneles fachada ventilada Faveton',
        img: 'img/1.2.jpg'
    },
    {
        tema: 'ARQUITECTURA_2',
        obra: 'Mausoleo Simón Bolívar, Caracas, Venezuela',
        trabajo: 'Revestimiento de fachadas externas en Faveton e internas en Swisspearl y acabado de pisos en mármol',
        img: 'img/2.1.jpg'
    },
    {
        tema: 'ARQUITECTURA_3',
        obra: 'Estadio Polideportivo de Pueblo Nuevo, Táchira, Venezuela',
        trabajo: 'Acabados internos de techos, paredes y palcos presidenciales y cabinas de transmisión TV',
        img: 'img/3.3.jpg'
    },
    {
        tema: 'MARKETING DIGITAL',
        obra: 'Ferretería Industrial MBJ srl, CABA, Argentina',
        trabajo: 'Ventas Online, Marketing Digital, Diseño de contenido, manejo de redes sociales',
        img: 'img/4.1.jpg'
    },
    {
        tema: 'DISEÑO GRAFICO',
        obra: 'Il Duo Pizzas s.a., Táchira, Venezuela',
        trabajo: 'Diseño Identidad gráfica y corporativa de la empresa, diseño de logotipo, manual corporativo y artes gráficas',
        img: 'img/5.1.jpg'
    },
    {
        tema: 'DISEÑO WEB',
        obra: 'MDM Designe',
        trabajo: 'Diseño de pagina web biografia',
        img: 'img/6.jpg'
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
        name: "formacion en Arquitectura",
        description: "UNET Universidad Nacional Experimental del Táchira, Estudios Carrera de Arquitectura, duracion de 6 años incluyendo 1 año de pasantias y 1 año de tesis, estudios de programas autocad 2D y 3D, Inspeccion de obras, Administracion de proyectos"
    },
    {
        year: "2006 - 2007",
        direction: "Táchira - Venezuela",
        name: "Gerente de Proyectos, Ingeniero Residente",
        description: "Empresa Deco-Instalaciones c.a. Arquitecto proyectista de sala de proyectos, obra: Reconstruccion y acondicionamiento de Estado Polideportivo de Pueblo Nuevo, Ingeniero Residente"
    },
    {
        year: "2007 - 2008",
        direction: "Táchira - Venezuela",
        name: "Supervisor de Obras Regionales",
        description: "Organismo UCER Unidad Coordinadora de Ejecucion Regional seccion Táchira, Arquitecto supervisor de obras educacionales de construccion, acondicionamiento, cambio de uso y otros"
    },
    {
        year: "2009",
        direction: "Táchira - Venezuela",
        name: "Arquitecto en jefe Dpto SUVI",
        description: "Organismo INAVI Instituto Nacional de la Vivienda seccion Táchira, Arquitecto en jefe departamento de proyecto, sustitucion de ranchos por viviendas y barrio adentro"
    },
    {
        year: "1999 - 2014",
        direction: "Táchira - Venezuela",
        name: "Diseño Gráfico / Community Manager",
        description: "Empresa Il Duo Pizzas s.a. Diseño de identidad gráfica, Manual corporativo, material POP, manejo de redes sociales y administracion en general"
    },
    {
        year: "2013 - 2014",
        direction: "Táchira - Venezuela",
        name: "Gerente General / Arquitecto / Diseño Gráfico",
        description: "Empresa Desarrollo turistico Floryana c.a. Administracion general de procesos hoteleros, diseño de areas comunes y acondicionamiento de edificaciones eccistentes, creacion de manual de normas y procedimientos, diseño de pagina WEB"
    },
    {
        year: "2014 - 2017",
        direction: "Caracas - Venezuela",
        name: "Arquitecto Comercial",
        description: "Empresa Desarrollos Koma GPC C.A. Arquitecto tecnico comercial, diseño y construccion; representante de ventas de 5 marcas de mareriales constructivos de acabados internacionales"
    },
    {
        year: "2018 - 2021",
        direction: "CABA - Argentina",
        name: "Supervisor de Manteniminto",
        description: "Empresa Administracion ColucciCosta recepcion de solicitud de mantenimiento, gestion de contratacion de obra para el mantenimiento de consorcios, control de obra ejecutada, "
    },
    {
        year: "2021 - Actualidad",
        direction: "CABA - Argentina",
        name: "Director de Ventas on-line / Marketing Digital / Diseño Grafico",
        description: "Empresa Ferretería Industrial MBJ, asesor tecnico comercial para empresas del gremio de la construccion, representante de ventas on-line, diseño de pagina web y mantenimiento de redes sociales"
    },
    {
        year: "Actualidad",
        direction: "CABA - Argentina",
        name: "Formacion Diseño Web Front End",
        description: "Academia Eidos - Diseño y creacion de paginas Web en lenguaje HTML, CSS y JS"
    }
]

//render html 

var html = "";
learning.forEach(e=>{
    html +="<div class='child'><div class='content'><h3>"+e.year+"</h3><h3>"+e.direction+"</h3><h3>"+e.name+"</h3><p>"+e.description+"</p></div> </div>"
})
timeline.innerHTML = html

// animacion timeline
var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
       if(element.offssetTop < 300)
           element.classList.add('_show')
})

window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEasch(elem=>{
        if(elem.offsetTop - window.innerHeight /2 <scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }
    })
})