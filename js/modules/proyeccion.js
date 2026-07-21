/*
=========================================
 proyeccion.js
 Gestión de Proyección Social
 RF-02
=========================================
*/





document.addEventListener(
"DOMContentLoaded",
()=>{


cargarApoyos();



let formulario =
document.getElementById(
"formProyeccion"
);



if(formulario){


formulario.addEventListener(
"submit",
registrarApoyo
);



}



});









function registrarApoyo(e){



e.preventDefault();




let apoyo = {


beneficiario:

document.querySelector(
"#beneficiario"
)
?
document.querySelector(
"#beneficiario"
).value
:
"",



fecha:

document.querySelector(
"#fechaApoyo"
)
?
document.querySelector(
"#fechaApoyo"
).value
:
"",





tipo:

document.querySelector(
"#tipoApoyo"
)
?
document.querySelector(
"#tipoApoyo"
).value
:
"",





costo:

Number(

document.querySelector(
"#costoApoyo"
)
?
document.querySelector(
"#costoApoyo"
).value
:
0

)



};






let apoyos =

JSON.parse(
localStorage.getItem(
"proyeccion"
)
)
|| [];





apoyos.push(
apoyo
);





localStorage.setItem(

"proyeccion",

JSON.stringify(
apoyos
)

);






mostrarMensaje(
"Apoyo social registrado"
);



e.target.reset();



cargarApoyos();



}








function cargarApoyos(){



let tabla =
document.getElementById(
"tablaProyeccion"
);



if(!tabla)
return;





let apoyos =

JSON.parse(
localStorage.getItem(
"proyeccion"
)
)
|| [];





tabla.innerHTML="";





apoyos.forEach(
(a)=>{


tabla.innerHTML +=
`

<tr>

<td>${a.beneficiario}</td>

<td>${a.fecha}</td>

<td>${a.tipo}</td>

<td>
S/. ${a.costo}
</td>

</tr>

`;



});



}