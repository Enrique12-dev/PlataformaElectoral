/*
=========================================
 proyeccion-social.js
 Gestión de Proyección Social
 Plataforma Electoral

 RF:
 Registro de apoyo comunitario
 Control de gastos sociales
=========================================
*/



document.addEventListener(
"DOMContentLoaded",
()=>{


cargarApoyos();




const formulario =

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









/*
=========================================
 REGISTRAR APOYO SOCIAL
=========================================
*/


function registrarApoyo(e){


e.preventDefault();





let apoyo = {



beneficiario:

document.getElementById(
"beneficiario"
).value,




fecha:

document.getElementById(
"fecha"
).value,




tipo:

document.getElementById(
"tipoApoyo"
).value,




costo:

Number(

document.getElementById(
"costo"
).value

),




estado:

"Registrado"



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

"Apoyo social registrado correctamente"

);









e.target.reset();








cargarApoyos();



}









/*
=========================================
 CARGAR HISTORIAL
=========================================
*/


function cargarApoyos(){



const tabla =

document.getElementById(
"tablaProyeccion"
);





if(!tabla){

return;

}







let apoyos =


JSON.parse(

localStorage.getItem(
"proyeccion"
)

)

|| [];








tabla.innerHTML = "";








apoyos.forEach(

(apoyo)=>{





tabla.innerHTML +=


`
<tr>

<td>
${apoyo.beneficiario}
</td>


<td>
${apoyo.fecha}
</td>


<td>
${apoyo.tipo}
</td>


<td>
S/. ${apoyo.costo.toFixed(2)}
</td>


<td>
<span class="badge bg-success">
${apoyo.estado}
</span>
</td>


</tr>
`;



});



}