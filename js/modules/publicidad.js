/*
=========================================
 publicidad.js
 Gestión de gastos de publicidad
 RF-05
 Plataforma Electoral
=========================================
*/



document.addEventListener(
"DOMContentLoaded",
()=>{


cargarPublicidad();

actualizarResumenPublicidad();




const formulario =

document.getElementById(
"formPublicidad"
);





if(formulario){


formulario.addEventListener(
"submit",
registrarPublicidad
);


}



});









/*
=========================================
 REGISTRAR GASTO PUBLICITARIO
=========================================
*/


function registrarPublicidad(e){


e.preventDefault();






let gasto = {



categoria:

document.getElementById(
"categoriaPublicidad"
).value,





proveedor:

document.getElementById(
"proveedorPublicidad"
).value,





fecha:

document.getElementById(
"fechaPublicidad"
).value,





monto:

Number(

document.getElementById(
"montoPublicidad"
).value

),





estado:

"Registrado"



};








let gastos =


JSON.parse(

localStorage.getItem(
"publicidad"
)

)

|| [];








gastos.push(
gasto
);








localStorage.setItem(

"publicidad",

JSON.stringify(
gastos
)

);








mostrarMensaje(

"Gasto publicitario registrado correctamente"

);








e.target.reset();








cargarPublicidad();

actualizarResumenPublicidad();



}









/*
=========================================
 CARGAR TABLA
=========================================
*/


function cargarPublicidad(){



const tabla =

document.getElementById(
"tablaPublicidad"
);





if(!tabla){

return;

}






let gastos =


JSON.parse(

localStorage.getItem(
"publicidad"
)

)

|| [];







tabla.innerHTML="";








gastos.forEach(

(g)=>{





tabla.innerHTML +=


`
<tr>


<td>
${g.categoria}
</td>



<td>
${g.proveedor}
</td>



<td>
${g.fecha}
</td>



<td>
S/. ${g.monto.toFixed(2)}
</td>



<td>

<span class="badge bg-success">

${g.estado}

</span>

</td>



</tr>
`;



});



}









/*
=========================================
 ACTUALIZAR RESUMEN
=========================================
*/


function actualizarResumenPublicidad(){



let gastos =


JSON.parse(

localStorage.getItem(
"publicidad"
)

)

|| [];







let total =


gastos.reduce(

(
suma,
gasto
)=>

suma +

Number(
gasto.monto
),

0

);








let cantidad =

gastos.length;









const totalElemento =

document.getElementById(
"totalPublicidad"
);





const cantidadElemento =

document.getElementById(
"cantidadPublicidad"
);








if(totalElemento){



if(typeof formatoMoneda === "function"){


totalElemento.innerHTML =

formatoMoneda(
total
);


}

else{


totalElemento.innerHTML =

"S/. " +

total.toFixed(2);


}



}








if(cantidadElemento){


cantidadElemento.innerHTML =

cantidad;


}



}