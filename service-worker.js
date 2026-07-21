/* ==========================================
   SERVICE WORKER
   Plataforma Campaña Electoral

   Función:
   - Cache offline
   - Carga sin conexión
========================================== */


const CACHE_NAME = "campania-electoral-v1";



const ARCHIVOS_CACHE = [


    "./",

    "./index.html",

    "./dashboard.html",


    "./css/login.css",

    "./css/dashboard.css",


    "./js/login.js",

    "./js/dashboard.js",


    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",

    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css",

    "https://cdn.jsdelivr.net/npm/chart.js"



];





/*
    Instalación del Service Worker
*/


self.addEventListener(
"install",
evento => {


    evento.waitUntil(


        caches.open(CACHE_NAME)

        .then(cache => {


            return cache.addAll(
                ARCHIVOS_CACHE
            );


        })


    );


});







/*
    Activación
*/


self.addEventListener(
"activate",
evento=>{


    evento.waitUntil(

        caches.keys()

        .then(
            nombres=>{


                return Promise.all(


                    nombres.map(nombre=>{


                        if(
                            nombre !== CACHE_NAME
                        ){

                            return caches.delete(
                                nombre
                            );

                        }


                    })


                );


            }

        )

    );


});








/*
    Interceptar solicitudes

    Si existe en cache:
    carga offline.

    Si no:
    busca en internet.
*/


self.addEventListener(
"fetch",
evento=>{


    evento.respondWith(


        caches.match(
            evento.request
        )

        .then(respuesta=>{


            return respuesta ||


            fetch(
                evento.request
            );


        })


    );


});