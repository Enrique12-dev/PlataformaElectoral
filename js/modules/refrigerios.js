/*
=========================================
 refrigerios.js
 Control de refrigerios Día D
 RF-04
 Plataforma Electoral
=========================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


cargarLocales();

cargarMesas();

cargarRefrigerios();



const formulario =
document.getElementById(
"formRefrigerio"
);



if(formulario){


formulario.addEventListener(
"submit",
registrarEntrega
);


}



});







/*
=========================================
 LOCALES ELECTORALES
=========================================
*/


function cargarLocales(){



const select =
document.getElementById(
"localRefrigerio"
);



if(!select)
return;



const locales=[


"Universidad Nacional de Piura",

"Colegio San Miguel de Piura",

"I.E. Nuestra Señora de Fátima",

"I.E. José Joaquín Inclán",

"I.E. Miguel Cortés",

"Colegio Montessori Piura",

"Colegio Turicará",

"Universidad de Piura",

"Universidad César Vallejo",

"Instituto Superior Tecnológico Piura"


];



locales.forEach(
(local)=>{


select.innerHTML +=


`
<option value="${local}">
${local}
</option>

`;


});


}









/*
=========================================
 GENERAR MESAS 001 - 300
=========================================
*/


function cargarMesas(){



const select =
document.getElementById(
"mesaRefrigerio"
);



if(!select)
return;



for(
let i=1;
i<=300;
i++
){



let numero =
String(i)
.padStart(3,"0");



select.innerHTML +=


`
<option value="${numero}">
Mesa ${numero}
</option>

`;



}


}









/*
=========================================
 REGISTRAR ENTREGA
=========================================
*/


function registrarEntrega(e){


e.preventDefault();



let refrigerio={



local:

document.getElementById(
"localRefrigerio"
).value,



mesa:

document.getElementById(
"mesaRefrigerio"
).value,



tipo:

document.getElementById(
"tipoRefrigerio"
).value,



estado:

document.getElementById(
"estadoRefrigerio"
).value,



fecha:

new Date()
.toLocaleDateString(),



hora:

new Date()
.toLocaleTimeString()



};






let lista =

JSON.parse(

localStorage.getItem(
"refrigerios"
)

)

|| [];




lista.push(
refrigerio
);





localStorage.setItem(

"refrigerios",

JSON.stringify(
lista
)

);






mostrarMensaje(

"Entrega registrada correctamente"

);





e.target.reset();




cargarRefrigerios();



}









/*
=========================================
 MOSTRAR REGISTROS
=========================================
*/


function cargarRefrigerios(){



const tabla =
document.getElementById(
"tablaRefrigerios"
);



if(!tabla)
return;



let datos =

JSON.parse(

localStorage.getItem(
"refrigerios"
)

)

|| [];




tabla.innerHTML="";





datos.forEach(
(r)=>{


tabla.innerHTML +=


`
<tr>


<td>
${r.local}
</td>


<td>
${r.mesa}
</td>


<td>
${r.tipo}
</td>


<td>


${
r.estado==="Entregado"

?

`
<span class="badge bg-success">
${r.estado}
</span>
`

:

`
<span class="badge bg-warning">
${r.estado}
</span>
`

}


</td>



<td>
${r.fecha}
</td>


</tr>

`;


});


}









/*
=========================================
 PENDIENTES
=========================================
*/


function pendientesRefrigerios(){



let entregas =


JSON.parse(

localStorage.getItem(
"refrigerios"
)

)

|| [];





return entregas.filter(

(r)=>

r.estado !== "Entregado"

).length;



}