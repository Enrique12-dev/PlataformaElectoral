/*
=========================================
 ROUTER.JS
 Navegación SPA Simple
=========================================
*/


const rutas = {


    aportantes:
    "pages/aportantes.html",


    eventos:
    "pages/eventos.html",


    personeros:
    "pages/personeros.html",


    locales:
    "pages/locales.html",


    presupuesto:
    "pages/presupuesto.html",


    publicidad:
    "pages/publicidad.html",


    refrigerios:
    "pages/refrigerios.html",


    reportes:
    "pages/reportes.html"



};






function cargarPagina(
pagina
){



let contenido =
document.getElementById(
    "contenido"
);




if(
rutas[pagina]
){


fetch(
    rutas[pagina]
)


.then(
respuesta=>respuesta.text()
)


.then(
html=>{


contenido.innerHTML =
html;


})


.catch(
error=>{


console.error(
"Error cargando página",
error
);


});



}



}







/*
=========================================
 CAMBIO DE VISTA
=========================================
*/


document.addEventListener(
"click",
function(e){


let enlace =
e.target.closest(
"[data-page]"
);



if(enlace){


e.preventDefault();



cargarPagina(
enlace.dataset.page
);



}



});