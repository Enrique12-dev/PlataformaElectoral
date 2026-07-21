/*
=========================================
 STORAGE.JS
 Gestión de almacenamiento local
 Plataforma Web Electoral
=========================================
*/

const STORAGE_PREFIX =
"campania_";



/*
=========================================
 GUARDAR DATOS
=========================================
*/

function guardarStorage(
clave,
valor
){

localStorage.setItem(

    STORAGE_PREFIX + clave,

    JSON.stringify(valor)

);

}




/*
=========================================
 COMPATIBILIDAD CON LOS MÓDULOS
=========================================
*/

function guardarDato(
clave,
valor
){

guardarStorage(
clave,
valor
);

}




/*
=========================================
 OBTENER DATOS
=========================================
*/

function obtenerStorage(
clave
){

let dato =
localStorage.getItem(
STORAGE_PREFIX + clave
);

return dato
?
JSON.parse(dato)
:
null;

}




/*
=========================================
 ELIMINAR DATOS
=========================================
*/

function eliminarStorage(
clave
){

localStorage.removeItem(

STORAGE_PREFIX + clave

);

}




/*
=========================================
 LIMPIAR STORAGE
=========================================
*/

function limpiarStorage(){

Object.keys(
localStorage
)

.forEach(
key=>{

if(
key.startsWith(
STORAGE_PREFIX
)
){

localStorage.removeItem(
key
);

}

}

);

}