/*
=========================================
 presupuesto.js
 Control Presupuestario
 RF-05
=========================================
*/





document.addEventListener(
"DOMContentLoaded",
()=>{


actualizarPresupuesto();



let formulario =
document.querySelector(
"form"
);



if(formulario){


formulario.addEventListener(
"submit",
guardarPresupuesto
);


}



});







function guardarPresupuesto(e){


e.preventDefault();



let presupuesto = {


total:
Number(
document.getElementById(
"presupuestoTotal"
).value
),



ejecutado:0,



fecha:
new Date()
.toLocaleDateString()



};






localStorage.setItem(

"presupuesto",

JSON.stringify(
presupuesto
)

);





mostrarMensaje(
"Presupuesto actualizado"
);



actualizarPresupuesto();



}








function actualizarPresupuesto(){



let datos =

JSON.parse(
localStorage.getItem(
"presupuesto"
)
)
||
{

total:0,

ejecutado:0

};





let total =
document.querySelector(
"#totalPresupuesto"
);



let ejecutado =
document.querySelector(
"#ejecutadoPresupuesto"
);



let disponible =
document.querySelector(
"#disponiblePresupuesto"
);





if(total){


total.innerHTML =
formatoMoneda(
datos.total
);


}



if(ejecutado){


ejecutado.innerHTML =
formatoMoneda(
datos.ejecutado
);


}



if(disponible){


disponible.innerHTML =

formatoMoneda(

datos.total -
datos.ejecutado

);


}



}