/*
=========================================
 usuarios.js
 Gestión de Usuarios del Sistema

 RNF-03:
 Roles y Seguridad

 Plataforma Electoral MVP
=========================================
*/


document.addEventListener(

"DOMContentLoaded",

()=>{


cargarUsuarios();



const formulario =

document.getElementById(
"formUsuario"
);




if(formulario){


formulario.addEventListener(

"submit",

registrarUsuario

);


}



});









/*
=========================================
 PERMISOS POR ROL
=========================================
*/


function obtenerPermisos(rol){


const permisos = {



"Administrador":[

"todos"

],





"Candidato":[

"finanzas",

"reportes",

"personeros",

"eventos"

],





"Tesorero":[

"aportantes",

"eventos",

"publicidad",

"reportes"

],





"Personero General":[

"personeros",

"locales",

"refrigerios",

"actas"

]



};



return permisos[rol] || [];


}









/*
=========================================
 REGISTRAR USUARIO
=========================================
*/


function registrarUsuario(e){


e.preventDefault();




const rolSeleccionado =

document.getElementById(
"rolUsuario"
).value;





let usuario = {


id:

Date.now(),





nombre:

document.getElementById(
"nombreUsuario"
).value.trim(),





usuario:

document.getElementById(
"usuario"
).value.trim(),





password:

document.getElementById(
"password"
).value.trim(),





rol:

rolSeleccionado,





estado:

"Activo",





permisos:

obtenerPermisos(
rolSeleccionado
),





ultimoAcceso:

"Nunca"

};









let lista =


JSON.parse(

localStorage.getItem(
"usuarios"
)

)

|| [];









let existe =

lista.some(

(u)=>

u.usuario === usuario.usuario

);







if(existe){


alert(

"El usuario ya existe."

);


return;


}








lista.push(usuario);







localStorage.setItem(

"usuarios",

JSON.stringify(lista)

);








mostrarMensaje(

"Usuario registrado correctamente"

);








e.target.reset();







cargarUsuarios();




}

/*
=========================================
 CARGAR TABLA DE USUARIOS
=========================================
*/


function cargarUsuarios(){



const tabla =

document.getElementById(
"tablaUsuarios"
);





if(!tabla){

return;

}






let lista =


JSON.parse(

localStorage.getItem(
"usuarios"
)

)

|| [];







tabla.innerHTML="";








lista.forEach(

(u)=>{





tabla.innerHTML +=


`

<tr>


<td>

${u.nombre}

</td>




<td>

${u.usuario}

</td>





<td>

<span class="badge bg-primary">

${u.rol}

</span>

</td>





<td>

${
u.estado === "Activo"

?

`

<span class="badge bg-success">

Activo

</span>

`

:

`

<span class="badge bg-danger">

Inactivo

</span>

`

}

</td>





<td>

${u.ultimoAcceso || "Nunca"}

</td>





<td>



<button

class="btn btn-warning btn-sm me-1"

onclick="cambiarEstadoUsuario(${u.id})">


<i class="bi bi-person-check"></i>


Estado


</button>





<button

class="btn btn-danger btn-sm"

onclick="eliminarUsuario(${u.id})">


<i class="bi bi-trash"></i>


Eliminar


</button>



</td>




</tr>


`;




});



}









/*
=========================================
 CAMBIAR ESTADO
 ACTIVO / INACTIVO
=========================================
*/


function cambiarEstadoUsuario(id){



let lista =


JSON.parse(

localStorage.getItem(
"usuarios"
)

)

|| [];







lista =

lista.map(

(u)=>{



if(

u.id === id

){



u.estado =

u.estado === "Activo"

?

"Inactivo"

:

"Activo";



}



return u;



}

);









localStorage.setItem(

"usuarios",

JSON.stringify(lista)

);








cargarUsuarios();







mostrarMensaje(

"Estado del usuario actualizado"

);



}









/*
=========================================
 ELIMINAR USUARIO
=========================================
*/


function eliminarUsuario(id){



let lista =


JSON.parse(

localStorage.getItem(
"usuarios"
)

)

|| [];








let usuarioEliminar =


lista.find(

(u)=>

u.id === id

);









if(

usuarioEliminar &&

usuarioEliminar.rol === "Administrador"

){



alert(

"No se puede eliminar el usuario Administrador."

);



return;



}









lista =

lista.filter(

(u)=>

u.id !== id

);









localStorage.setItem(

"usuarios",

JSON.stringify(lista)

);








cargarUsuarios();








mostrarMensaje(

"Usuario eliminado correctamente"

);



}









/*
=========================================
 MENSAJE
=========================================
*/


function mostrarMensaje(texto){



if(

typeof mostrarMensajeSistema === "function"

){



mostrarMensajeSistema(texto);



}

else{



alert(texto);



}



}