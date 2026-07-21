/*
=========================================
 UTILS.JS

 Incluye:
 - Validaciones
 - Formatos
 - Alertas
 - Finanzas
 - Cifrado demostrativo
 - Respaldo de actas
=========================================
*/



/*
=========================================
 VALIDACIONES
=========================================
*/

function validarDNI(dni){

return /^\d{8}$/.test(dni);

}


function validarCelular(celular){

return /^\d{9}$/.test(celular);

}


function validarCampo(valor){

return valor !== ""
&& valor !== null
&& valor !== undefined;

}



/*
=========================================
 FORMATOS
=========================================
*/

function formatoMoneda(valor){

return new Intl.NumberFormat(
"es-PE",
{
style:"currency",
currency:"PEN"
}
).format(valor);

}


function formatoFecha(fecha){

let fechaObj =
new Date(fecha);

return fechaObj.toLocaleDateString("es-PE");

}



/*
=========================================
 ALERTAS
=========================================
*/

function mostrarMensaje(
mensaje,
tipo="success"
){

let alerta =
document.createElement("div");

alerta.className =
`alert alert-${tipo} position-fixed top-0 end-0 m-3`;

alerta.innerHTML =
mensaje;

document.body.appendChild(alerta);

setTimeout(
()=>{
alerta.remove();
},
3000
);

}



/*
=========================================
 GENERAR ID
=========================================
*/

function generarID(){

return Date.now();

}



/*
=========================================
 CÁLCULOS FINANCIEROS
=========================================
*/

function calcularGanancia(
ingreso,
gasto
){

return ingreso-gasto;

}


function calcularPorcentaje(
actual,
total
){

if(total===0)
return 0;

return (actual*100)/total;

}



/*
=========================================
 CONFIRMACIONES
=========================================
*/

function confirmarAccion(
mensaje
){

return confirm(
mensaje
);

}



/*
=========================================
 CIFRADO DEMOSTRATIVO
=========================================
*/

function cifrarTexto(texto){

try{

return btoa(
unescape(
encodeURIComponent(
texto
)
)
);

}
catch(e){

return texto;

}

}


function descifrarTexto(texto){

try{

return decodeURIComponent(

escape(

atob(texto)

)

);

}
catch(e){

return texto;

}

}


function cifrarDNI(dni){

return cifrarTexto(dni);

}


function descifrarDNI(dni){

return descifrarTexto(dni);

}


function cifrarCelular(celular){

return cifrarTexto(celular);

}


function descifrarCelular(celular){

return descifrarTexto(celular);

}



/*
=========================================
 RESPALDO DE ACTAS
=========================================
*/

function guardarActa(
nombreArchivo,
imagenBase64
){

let actas =
JSON.parse(
localStorage.getItem("actas")
)
||
[];

let acta={

id:generarID(),

archivo:nombreArchivo,

imagen:imagenBase64,

fecha:new Date().toLocaleString()

};

actas.push(acta);

localStorage.setItem(
"actas",
JSON.stringify(actas)
);

return acta;

}


function obtenerActas(){

return JSON.parse(
localStorage.getItem("actas")
)
||
[];

}


function eliminarActa(id){

let actas=
obtenerActas();

actas=
actas.filter(
a=>a.id!==id
);

localStorage.setItem(
"actas",
JSON.stringify(actas)
);

}



/*
=========================================
 CONVERTIR IMAGEN A BASE64
=========================================
*/

function convertirImagenBase64(
archivo,
callback
){

let lector=
new FileReader();

lector.onload=
function(e){

callback(
e.target.result
);

};

lector.readAsDataURL(
archivo
);

}