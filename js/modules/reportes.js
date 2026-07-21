/*
=========================================
 reportes.js
 Reportes generales
 Plataforma Electoral
=========================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


generarResumen();



/*
=========================================
 BOTÓN GUARDAR ACTA
=========================================
*/

const botonGuardar =
document.getElementById(
"guardarActa"
);


if(botonGuardar){

botonGuardar.addEventListener(
"click",
guardarActaSeleccionada
);

}



/*
=========================================
 BOTONES DE REPORTES
=========================================
*/


const botonFinanciero =
document.getElementById(
"reporteFinanciero"
);


if(botonFinanciero){

botonFinanciero.addEventListener(
"click",
generarReporteFinanciero
);

}





const botonPersoneros =
document.getElementById(
"reportePersoneros"
);


if(botonPersoneros){

botonPersoneros.addEventListener(
"click",
generarReportePersoneros
);

}





const botonGeneral =
document.getElementById(
"reporteGeneral"
);


if(botonGeneral){

botonGeneral.addEventListener(
"click",
exportarReporte
);

}



});





/*
=========================================
 GENERAR RESUMEN GENERAL
=========================================
*/


function generarResumen(){


let aportes =

JSON.parse(
localStorage.getItem(
"aportantes"
)
)
|| [];




let eventos =

JSON.parse(
localStorage.getItem(
"eventos"
)
)
|| [];




let gastos =

JSON.parse(
localStorage.getItem(
"publicidad"
)
)
|| [];





let totalIngresos =


aportes.reduce(
(
suma,
a
)=>

suma + Number(a.valor || 0),

0

)

+

eventos.reduce(
(
suma,
e
)=>

suma + Number(e.ganancia || 0),

0

);






let totalEgresos =


gastos.reduce(
(
suma,
g
)=>

suma + Number(g.monto || 0),

0

);





mostrarDato(
"totalIngresos",
totalIngresos
);



mostrarDato(
"totalEgresos",
totalEgresos
);



mostrarDato(
"balance",
totalIngresos-totalEgresos
);



/*
Cantidad de personeros
*/


let personeros =

JSON.parse(
localStorage.getItem(
"personeros"
)
)
|| [];



let elementoPersoneros =

document.getElementById(
"totalPersoneros"
);



if(elementoPersoneros){

elementoPersoneros.innerHTML =
personeros.length;

}



}






/*
=========================================
 MOSTRAR DATOS
=========================================
*/


function mostrarDato(
id,
valor
){


let elemento =
document.getElementById(
id
);



if(elemento){


elemento.innerHTML =
formatoMoneda(
valor
);


}


}








/*
=========================================
 REPORTE FINANCIERO
=========================================
*/


function generarReporteFinanciero(){


let reporte = {


titulo:
"Reporte Financiero",


fecha:
new Date()
.toLocaleDateString(),



ingresos:
document.getElementById(
"totalIngresos"
)?.innerHTML,



egresos:
document.getElementById(
"totalEgresos"
)?.innerHTML,



balance:
document.getElementById(
"balance"
)?.innerHTML



};



descargarArchivo(

reporte,

"reporte_financiero.json"

);



}







/*
=========================================
 REPORTE PERSONEROS
=========================================
*/


function generarReportePersoneros(){


let personeros =

JSON.parse(
localStorage.getItem(
"personeros"
)
)
|| [];




let reporte = {


titulo:
"Reporte de Personeros",


fecha:
new Date()
.toLocaleDateString(),



cantidad:
personeros.length,



datos:
personeros



};



descargarArchivo(

reporte,

"reporte_personeros.json"

);



}







/*
=========================================
 REPORTE GENERAL
=========================================
*/


function exportarReporte(){



let reporte = {


titulo:
"Reporte General del Sistema",



fecha:
new Date()
.toLocaleDateString(),



ingresos:
document.getElementById(
"totalIngresos"
)?.innerHTML,



egresos:
document.getElementById(
"totalEgresos"
)?.innerHTML,



balance:
document.getElementById(
"balance"
)?.innerHTML,



personeros:
document.getElementById(
"totalPersoneros"
)?.innerHTML



};





descargarArchivo(

reporte,

"reporte_general.json"

);



}







/*
=========================================
 DESCARGAR ARCHIVO JSON
=========================================
*/


function descargarArchivo(
datos,
nombre
){


let archivo =

new Blob(

[
JSON.stringify(
datos,
null,
2
)
],

{
type:
"application/json"
}

);




let enlace =

document.createElement(
"a"
);



enlace.href =

URL.createObjectURL(
archivo
);



enlace.download =
nombre;



enlace.click();



mostrarMensaje(
"Reporte generado correctamente"
);



}







/*
=========================================
 RESPALDO DE ACTAS
 RNF-04
=========================================
*/


function guardarActaSeleccionada(){


const input =

document.getElementById(
"acta"
);



if(!input || input.files.length===0){


mostrarMensaje(

"Seleccione una fotografía del acta.",

"warning"

);


return;


}



const archivo =
input.files[0];



const lector =
new FileReader();



lector.onload = function(){



guardarActa(

archivo.name,

lector.result

);



mostrarMensaje(

"Acta respaldada correctamente."

);





const mensaje =

document.getElementById(
"mensajeActa"
);



if(mensaje){


mensaje.innerHTML =


`
<div class="alert alert-success mt-3">

<i class="bi bi-check-circle-fill"></i>

Acta guardada correctamente.

</div>
`;

}



};



lector.readAsDataURL(
archivo
);



}