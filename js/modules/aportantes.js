/*
=========================================
 aportantes.js
 Gestión de aportantes
 RF-01
=========================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


cargarAportantes();


const formulario =
document.getElementById(
"formAportante"
);



if(formulario){


formulario.addEventListener(
"submit",
registrarAportante
);


}


});










function registrarAportante(e){


e.preventDefault();



let aportante = {


dni:
cifrarDNI(
document.getElementById(
"dni"
).value
),


nombre:
document.getElementById(
"nombre"
).value,


celular:
cifrarCelular(
document.getElementById(
"celular"
).value
),


tipo:
document.getElementById(
"tipoAporte"
).value,


valor:
Number(
document.getElementById(
"valor"
).value
),



comprobante:
document.getElementById(
"comprobante"
).value,



fecha:
new Date()
.toLocaleDateString()



};





if(
aportante.valor <= 0
){


mostrarMensaje(
"El valor del aporte debe ser mayor a cero",
"danger"
);


return;


}





let aportantes =
JSON.parse(
localStorage.getItem(
"aportantes"
)
)
|| [];



aportantes.push(
aportante
);



localStorage.setItem(

"aportantes",

JSON.stringify(
aportantes
)

);





guardarDato(
"aportantes",
aportante
);





mostrarMensaje(
"Aportante registrado correctamente"
);



e.target.reset();



cargarAportantes();


}










function cargarAportantes(){



let tabla =
document.getElementById(
"tablaAportantes"
);



if(!tabla)
return;





let datos =
JSON.parse(
localStorage.getItem(
"aportantes"
)
)
|| [];



tabla.innerHTML="";



datos.forEach(
(aportante)=>{



tabla.innerHTML +=
`

<tr>

<td>${descifrarDNI(aportante.dni)}</td>

<td>${aportante.nombre}</td>

<td>${aportante.tipo}</td>

<td>S/. ${aportante.valor}</td>

<td>

<span class="estado-activo">
Registrado
</span>

</td>

</tr>

`;


});


}