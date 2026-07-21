/*
=========================================
 locales.js
 Gestión de locales electorales
 RF-03
=========================================
*/





document.addEventListener(
"DOMContentLoaded",
()=>{


cargarLocales();



let formulario =
document.getElementById(
"formLocal"
);



if(formulario){


formulario.addEventListener(
"submit",
registrarLocal
);


}


});








function registrarLocal(e){



e.preventDefault();




let local = {



nombre:
document.getElementById(
"nombreLocal"
).value,



distrito:
document.getElementById(
"distrito"
).value,



provincia:
document.getElementById(
"provincia"
).value,



mesas:
Number(
document.getElementById(
"mesas"
).value
),



estado:
"Activo"



};








let locales =
JSON.parse(
localStorage.getItem(
"locales"
)
)
|| [];





locales.push(
local
);





localStorage.setItem(

"locales",

JSON.stringify(
locales
)

);





guardarDato(
"locales",
local
);





mostrarMensaje(
"Local registrado correctamente"
);



e.target.reset();



cargarLocales();



}








function cargarLocales(){



let tabla =
document.getElementById(
"tablaLocales"
);



if(!tabla)
return;




let locales =
JSON.parse(
localStorage.getItem(
"locales"
)
)
|| [];





tabla.innerHTML="";





locales.forEach(
(local)=>{



tabla.innerHTML +=
`

<tr>


<td>${local.nombre}</td>

<td>${local.distrito}</td>

<td>${local.provincia}</td>

<td>${local.mesas}</td>


</tr>


`;



});



}