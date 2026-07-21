/*
=========================================
 APP.JS
 Plataforma Web de Gestión Electoral
=========================================
*/


// Inicialización del sistema

document.addEventListener(
"DOMContentLoaded",
()=>{


    console.log(
        "Sistema de Gestión Electoral iniciado"
    );


    iniciarAplicacion();


});





function iniciarAplicacion(){


    registrarServiceWorker();


    inicializarBaseDatos();


    cargarUsuario();


}






/*
=========================================
 SERVICE WORKER
 Funcionamiento Offline
=========================================
*/


function registrarServiceWorker(){


    if(
        "serviceWorker" in navigator
    ){


        navigator.serviceWorker.register(
            "service-worker.js"
        )


        .then(()=>{


            console.log(
                "Service Worker registrado correctamente"
            );


        })


        .catch(error=>{


            console.error(
                "Error Service Worker:",
                error
            );


        });



    }


}







/*
=========================================
 BASE DE DATOS LOCAL
=========================================
*/


function inicializarBaseDatos(){


    if(
        typeof iniciarIndexedDB === "function"
    ){


        iniciarIndexedDB();


    }


}






/*
=========================================
 USUARIO ACTUAL
=========================================
*/


function cargarUsuario(){


    let usuario =
    localStorage.getItem(
        "usuarioActivo"
    );



    if(usuario){


        console.log(
            "Usuario:",
            usuario
        );


    }


}