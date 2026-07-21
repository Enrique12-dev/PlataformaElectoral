/* =====================================
   REGISTRO SERVICE WORKER
===================================== */


if ("serviceWorker" in navigator) {


navigator.serviceWorker.register(

"service-worker.js"

)

.then(()=>{


console.log(
"Service Worker registrado"
);


})

.catch(error=>{


console.log(error);


});


}









/* =====================================
   LOGIN
   RNF-03: ROLES Y SEGURIDAD

   Plataforma Electoral MVP
===================================== */


document.addEventListener(

"DOMContentLoaded",

()=>{






const loginForm =

document.getElementById(
"loginForm"
);





const passwordInput =

document.getElementById(
"password"
);





const togglePassword =

document.getElementById(
"togglePassword"
);





const usuarioInput =

document.getElementById(
"usuario"
);





const recordar =

document.getElementById(
"recordar"
);






if(!loginForm){

return;

}









/*
=====================================
 USUARIOS BASE DEL SISTEMA
=====================================

Estos usuarios existen por defecto.

Administrador:
Acceso total

Candidato:
Gestión política

Tesorero:
Gestión financiera

Personero General:
Control electoral

*/


const usuariosBase = [



{


usuario:"admin",


password:"123456",


nombre:"Administrador Principal",


rol:"Administrador",


estado:"Activo",


permisos:[

"todos"

]


},





{


usuario:"candidato",


password:"123456",


nombre:"Candidato",


rol:"Candidato",


estado:"Activo",


permisos:[

"finanzas",

"reportes",

"personeros",

"eventos"

]


},





{


usuario:"tesorero",


password:"123456",


nombre:"Tesorero",


rol:"Tesorero",


estado:"Activo",


permisos:[

"aportantes",

"eventos",

"publicidad",

"reportes"

]


},





{


usuario:"pgeneral",


password:"123456",


nombre:"Personero General",


rol:"Personero General",


estado:"Activo",


permisos:[

"personeros",

"locales",

"refrigerios",

"actas"

]


}



];









/*
=====================================
 CARGAR USUARIOS REGISTRADOS
=====================================
*/


let usuariosRegistrados =


JSON.parse(

localStorage.getItem(
"usuarios"
)

)

|| [];









/*
=====================================
 COMPLETAR DATOS
 USUARIOS NUEVOS
=====================================
*/


usuariosRegistrados =


usuariosRegistrados.map(

(usuario)=>{



return{


estado:

usuario.estado || "Activo",



permisos:

usuario.permisos || [],



...usuario



};



}

);









/*
=====================================
 UNIFICAR USUARIOS

Usuarios registrados tienen prioridad
=====================================
*/


const usuarios = [



...usuariosRegistrados,



...usuariosBase.filter(

(base)=>


!usuariosRegistrados.some(

(registrado)=>


registrado.usuario === base.usuario


)

)



];











/*
=====================================
 MOSTRAR / OCULTAR PASSWORD
=====================================
*/


if(togglePassword){



togglePassword.addEventListener(

"click",

()=>{



if(

passwordInput.type === "password"

){



passwordInput.type="text";



togglePassword.innerHTML=

`

<i class="bi bi-eye-slash-fill"></i>

`;



}

else{



passwordInput.type="password";



togglePassword.innerHTML=

`

<i class="bi bi-eye-fill"></i>

`;



}



}

);


}









/*
=====================================
 RECORDAR USUARIO
=====================================
*/


const usuarioGuardado =


localStorage.getItem(
"usuario"
);





if(usuarioGuardado){



usuarioInput.value =

usuarioGuardado;



recordar.checked =

true;



}









/*
=====================================
 VALIDAR LOGIN
=====================================
*/


loginForm.addEventListener(

"submit",

(e)=>{



e.preventDefault();





const usuario =

usuarioInput.value.trim();





const password =

passwordInput.value.trim();







if(

usuario === "" ||

password === ""

){



alert(

"Debe completar todos los campos."

);



return;

}



 





/*
 Buscar usuario
*/


const usuarioEncontrado =


usuarios.find(

(u)=>


u.usuario === usuario

&&

u.password === password

);



 




if(!usuarioEncontrado){



alert(

"Usuario o contraseña incorrectos."

);



return;



}









/*
=====================================
 VALIDAR ESTADO
=====================================
*/


if(

usuarioEncontrado.estado === "Inactivo"

){



alert(

"El usuario se encuentra deshabilitado."

);



return;



}









/*
=====================================
 RECORDAR USUARIO
=====================================
*/


if(recordar.checked){



localStorage.setItem(

"usuario",

usuarioEncontrado.usuario

);



}

else{


localStorage.removeItem(

"usuario"

);


}









/*
=====================================
 ACTUALIZAR ÚLTIMO ACCESO
=====================================
*/


if(

usuariosRegistrados.some(

(u)=>

u.usuario === usuarioEncontrado.usuario

)

){



usuariosRegistrados =


usuariosRegistrados.map(

(u)=>{


if(

u.usuario === usuarioEncontrado.usuario

){


u.ultimoAcceso =

new Date()
.toLocaleString();


}



return u;



}

);




localStorage.setItem(

"usuarios",

JSON.stringify(

usuariosRegistrados

)

);



}









/*
=====================================
 CREAR SESIÓN
=====================================
*/


sessionStorage.setItem(

"sesionActiva",

"true"

);





sessionStorage.setItem(

"usuario",

usuarioEncontrado.usuario

);





sessionStorage.setItem(

"nombre",

usuarioEncontrado.nombre ||

usuarioEncontrado.usuario

);





sessionStorage.setItem(

"rol",

usuarioEncontrado.rol

);





sessionStorage.setItem(

"permisos",

JSON.stringify(

usuarioEncontrado.permisos

)

);





sessionStorage.setItem(

"inicioSesion",

new Date()

);









/*
=====================================
 REDIRECCIÓN
=====================================
*/


window.location.href =

"dashboard.html";





});






});