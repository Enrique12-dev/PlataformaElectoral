/* ==========================================
   DASHBOARD.JS
   Plataforma Web de Gestión de Campaña Electoral

   RNF-03:
   Roles y Seguridad

   MVP:
   HTML + CSS + JavaScript
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


/*
==========================================
 VALIDAR SESIÓN
==========================================
*/


if(
sessionStorage.getItem(
"sesionActiva"
)!=="true"
){


window.location.href =
"index.html";


return;


}



/*
==========================================
 SEGURIDAD
==========================================
*/


aplicarSeguridad();




/*
==========================================
 CARGAR INFORMACIÓN
==========================================
*/


cargarDashboard();




generarGraficoFinanciero();




mostrarUsuario();




actualizarInformacionExtra();




const botonSalir =

document.querySelector(
".profile .btn-danger"
);



if(botonSalir){


botonSalir.addEventListener(

"click",

()=>{


sessionStorage.clear();


window.location.href =
"index.html";


}

);


}



});







/*
==========================================
 SEGURIDAD POR ROLES
==========================================
*/


function aplicarSeguridad(){


const rol =

sessionStorage.getItem(
"rol"
);



const permisos =

JSON.parse(

sessionStorage.getItem(
"permisos"
)

)

|| [];





if(
permisos.includes(
"todos"
)
){

return;

}





document.querySelectorAll(
".menu a"
)

.forEach(

(enlace)=>{


const ruta =

enlace.getAttribute(
"href"
);




if(
!tienePermisoRuta(
ruta,
rol
)
){


enlace.parentElement.style.display =
"none";


}



});


}








function tienePermisoRuta(
ruta,
rol
){


const permisosRuta = {


"pages/aportantes.html":[

"Administrador",
"Candidato",
"Tesorero"

],



"pages/eventos.html":[

"Administrador",
"Candidato",
"Tesorero"

],



"pages/publicidad.html":[

"Administrador",
"Tesorero"

],



"pages/proyeccion-social.html":[

"Administrador",
"Candidato"

],



"pages/personeros.html":[

"Administrador",
"Candidato",
"Personero General"

],



"pages/refrigerios.html":[

"Administrador",
"Personero General"

],



"pages/reportes.html":[

"Administrador",
"Candidato",
"Tesorero"

],



"pages/usuarios.html":[

"Administrador"

]


};




if(
!permisosRuta[ruta]
){

return true;

}



return permisosRuta[ruta]
.includes(
rol
);


}








/*
==========================================
 MOSTRAR USUARIO
==========================================
*/


function mostrarUsuario(){



const usuario =

sessionStorage.getItem(
"usuario"
);



const rol =

sessionStorage.getItem(
"rol"
);





const nombre =

document.querySelector(
".profile strong"
);




const descripcion =

document.querySelector(
".profile small"
);





if(nombre){

nombre.textContent =

usuario || "Administrador";

}





if(descripcion){

descripcion.textContent =

rol || "Administrador";

}



}








/*
==========================================
 CARGAR DASHBOARD
==========================================
*/


function cargarDashboard(){



let aportantes =

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




let publicidad =

JSON.parse(

localStorage.getItem(
"publicidad"
)

)

|| [];




let personeros =

JSON.parse(

localStorage.getItem(
"personeros"
)

)

|| [];




let locales =

JSON.parse(

localStorage.getItem(
"locales"
)

)

|| [];




let refrigerios =

JSON.parse(

localStorage.getItem(
"refrigerios"
)

)

|| [];




let totalIngresos =


aportantes.reduce(

(total,item)=>

total +

Number(
item.valor || 0
),

0

)

+

eventos.reduce(

(total,item)=>

total +

Number(
item.ganancia || 0
),

0

);





let totalEgresos =


publicidad.reduce(

(total,item)=>

total +

Number(
item.monto || 0
),

0

);





let refrigeriosEntregados =

refrigerios.filter(

(r)=>

r.estado === "Entregado"

).length;





actualizarTarjetas(

totalIngresos,

totalEgresos,

personeros.length,

locales.length,

refrigeriosEntregados

);



}

/*
==========================================
 ACTUALIZAR TARJETAS
==========================================
*/


function actualizarTarjetas(

ingresos,

egresos,

personeros,

locales,

refrigerios

){



const totalIngresos =

document.getElementById(
"totalIngresos"
);



const totalEgresos =

document.getElementById(
"totalEgresos"
);



const totalPersoneros =

document.getElementById(
"totalPersoneros"
);



const totalLocales =

document.getElementById(
"totalLocales"
);



const totalRefrigerios =

document.getElementById(
"totalRefrigerios"
);






if(totalIngresos){

totalIngresos.textContent =

"S/. " +

ingresos.toFixed(2);

}





if(totalEgresos){

totalEgresos.textContent =

"S/. " +

egresos.toFixed(2);

}





if(totalPersoneros){

totalPersoneros.textContent =

personeros;

}





if(totalLocales){

totalLocales.textContent =

locales;

}





if(totalRefrigerios){

totalRefrigerios.textContent =

refrigerios;

}



}









/*
==========================================
 INFORMACIÓN EXTRA
==========================================
*/


function actualizarInformacionExtra(){



let publicidad =

JSON.parse(

localStorage.getItem(
"publicidad"
)

)

|| [];





let refrigerios =

JSON.parse(

localStorage.getItem(
"refrigerios"
)

)

|| [];





let totalPublicidad =


publicidad.reduce(

(total,item)=>

total +

Number(
item.monto || 0
),

0

);






const publicidadElemento =

document.getElementById(
"ejecutadoPublicidad"
);





if(publicidadElemento){


publicidadElemento.textContent =

"S/. " +

totalPublicidad.toFixed(2);


}






const refrigeriosElemento =

document.getElementById(
"refrigeriosDiaD"
);





if(refrigeriosElemento){



let entregados =


refrigerios.filter(

(r)=>

r.estado === "Entregado"

).length;





refrigeriosElemento.textContent =

entregados;



}





actualizarActividad();



}









/*
==========================================
 ACTIVIDAD RECIENTE
==========================================
*/


function actualizarActividad(){



const lista =

document.getElementById(
"actividadReciente"
);





if(!lista){

return;

}





let actividades = [];





let aportantes =

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




let personeros =

JSON.parse(

localStorage.getItem(
"personeros"
)

)

|| [];




let publicidad =

JSON.parse(

localStorage.getItem(
"publicidad"
)

)

|| [];




let refrigerios =

JSON.parse(

localStorage.getItem(
"refrigerios"
)

)

|| [];






if(aportantes.length){


actividades.push(

"Nuevo aportante registrado"

);


}





if(eventos.length){


actividades.push(

"Evento creado"

);


}





if(personeros.length){


actividades.push(

"Personero asignado"

);


}





if(publicidad.length){


actividades.push(

"Gasto publicitario registrado"

);


}





if(refrigerios.length){


actividades.push(

"Entrega de refrigerios registrada"

);


}







lista.innerHTML = "";






actividades.forEach(

(item)=>{


lista.innerHTML +=


`

<li class="list-group-item">

${item}

</li>

`;


});


}









/*
==========================================
 GRÁFICO FINANCIERO
==========================================
*/


function generarGraficoFinanciero(){



const canvas =

document.getElementById(
"graficoFinanciero"
);





if(!canvas){

return;

}





let aportantes =

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





let publicidad =

JSON.parse(

localStorage.getItem(
"publicidad"
)

)

|| [];







let ingresos =


aportantes.reduce(

(total,item)=>

total +

Number(
item.valor || 0
),

0

)

+

eventos.reduce(

(total,item)=>

total +

Number(
item.ganancia || 0
),

0

);







let egresos =


publicidad.reduce(

(total,item)=>

total +

Number(
item.monto || 0
),

0

);








new Chart(

canvas,

{


type:"bar",




data:{


labels:[

"Ingresos",

"Egresos"

],




datasets:[

{


label:

"Resumen Financiero",



data:[

ingresos,

egresos

]


}

]


},





options:{


responsive:true,



plugins:{


legend:{


display:false


}


}



}



}


);



}