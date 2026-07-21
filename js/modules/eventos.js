/*
=========================================
 eventos.js
 Gestión de eventos
 RF-02
 Plataforma Electoral
=========================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


cargarEventos();



const formulario =

document.getElementById(
"formEvento"
);



if(formulario){


formulario.addEventListener(
"submit",
registrarEvento
);


}



});








/*
=========================================
 REGISTRAR EVENTO
=========================================
*/


function registrarEvento(e){


e.preventDefault();





let costo =

Number(
document.getElementById(
"costoEvento"
).value
);



let entradas =

Number(
document.getElementById(
"entradasEvento"
).value
);



let recaudacion =

Number(
document.getElementById(
"recaudacionEvento"
).value
);







let evento = {


nombre:

document.getElementById(
"nombreEvento"
).value,



tipo:

document.getElementById(
"tipoEvento"
).value,



costo:costo,



entradas:entradas,



recaudacion:recaudacion,



ganancia:

recaudacion - costo,



fecha:

new Date()
.toLocaleDateString()



};








let eventos =


JSON.parse(

localStorage.getItem(
"eventos"
)

)

|| [];







eventos.push(
evento
);






localStorage.setItem(

"eventos",

JSON.stringify(
eventos
)

);







mostrarMensaje(

"Evento registrado correctamente"

);






e.target.reset();






cargarEventos();



}









/*
=========================================
 CARGAR TABLA DE EVENTOS
=========================================
*/


function cargarEventos(){



const tabla =

document.getElementById(
"tablaEventos"
);



if(!tabla){

return;

}






let eventos =


JSON.parse(

localStorage.getItem(
"eventos"
)

)

|| [];







tabla.innerHTML="";







eventos.forEach(

(evento)=>{



tabla.innerHTML +=



`
<tr>

<td>
${evento.nombre}
</td>


<td>
${evento.tipo}
</td>


<td>
S/. ${evento.costo.toFixed(2)}
</td>


<td>
S/. ${evento.recaudacion.toFixed(2)}
</td>


<td>
S/. ${evento.ganancia.toFixed(2)}
</td>


</tr>
`;



});



}