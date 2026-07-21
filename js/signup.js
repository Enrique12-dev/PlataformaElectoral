/*
=========================================
 signup.js
 Registro de Usuarios
 RNF-03: Roles y Seguridad

 Plataforma Web de Gestión
 de Campaña Electoral

 MVP:
 HTML + CSS + JavaScript
=========================================
*/



document.addEventListener(
"DOMContentLoaded",
()=>{





const formulario =

document.getElementById(
"signupForm"
);





const botonPassword =

document.getElementById(
"mostrarPassword"
);





const password =

document.getElementById(
"password"
);





/*
=========================================
 MOSTRAR / OCULTAR PASSWORD
=========================================
*/



if(botonPassword){


botonPassword.addEventListener(

"click",

()=>{


if(
password.type === "password"
){


password.type="text";


botonPassword.innerHTML =

`
<i class="bi bi-eye-slash-fill"></i>
`;


}

else{


password.type="password";


botonPassword.innerHTML =

`
<i class="bi bi-eye-fill"></i>
`;



}


}


);


}









/*
=========================================
 REGISTRO
=========================================
*/


if(formulario){


formulario.addEventListener(

"submit",

registrarUsuario

);


}



});












/*
=========================================
 REGISTRAR USUARIO
=========================================
*/



function registrarUsuario(e){


e.preventDefault();







const nombre =

document.getElementById(
"nombre"
).value.trim();





const dni =

document.getElementById(
"dni"
).value.trim();





const usuario =

document.getElementById(
"usuario"
).value.trim();





const correo =

document.getElementById(
"correo"
).value.trim();





const password =

document.getElementById(
"password"
).value.trim();





const confirmPassword =

document.getElementById(
"confirmPassword"
).value.trim();









/*
=========================================
 VALIDACIONES
=========================================
*/



if(
nombre === "" ||
dni === "" ||
usuario === "" ||
correo === "" ||
password === ""
){


alert(

"Debe completar todos los campos."

);


return;


}









if(!/^\d{8}$/.test(dni)){


alert(

"El DNI debe contener 8 números."

);


return;


}









if(password !== confirmPassword){


alert(

"Las contraseñas no coinciden."

);


return;


}









/*
=========================================
 OBTENER USUARIOS EXISTENTES
=========================================
*/



let usuarios =


JSON.parse(

localStorage.getItem(
"usuarios"
)

)

|| [];









/*
=========================================
 VALIDAR DUPLICADOS
=========================================
*/



const existe =

usuarios.some(

(u)=>


u.usuario === usuario

||

u.dni === dni


);









if(existe){


alert(

"El usuario o DNI ya se encuentra registrado."

);


return;


}









/*
=========================================
 CREAR USUARIO
=========================================
*/



const nuevoUsuario = {


id:

Date.now(),




nombre:

nombre,




dni:

dni,




usuario:

usuario,




correo:

correo,




password:

password,





rol:

"Usuario Registrado",





permisos:

[],





estado:

"Activo",





fechaRegistro:

new Date()
.toLocaleDateString()



};












usuarios.push(
nuevoUsuario
);









localStorage.setItem(

"usuarios",

JSON.stringify(
usuarios
)

);









alert(

"Usuario registrado correctamente."

);









window.location.href =

"index.html";



}