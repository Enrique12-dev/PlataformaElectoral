/*
=========================================
 INDEXEDDB
 Almacenamiento Offline
=========================================
*/


let db;


const nombreDB =
"CampañaElectoralDB";



const versionDB =
1;





function iniciarIndexedDB(){



let solicitud =
indexedDB.open(
    nombreDB,
    versionDB
);





solicitud.onupgradeneeded =
function(event){



    db =
    event.target.result;



    /*
    Tabla de aportantes
    */


    if(
        !db.objectStoreNames.contains(
            "aportantes"
        )
    ){


        db.createObjectStore(
            "aportantes",
            {
                keyPath:"id",
                autoIncrement:true
            }
        );


    }





    /*
    Tabla personeros
    */


    if(
        !db.objectStoreNames.contains(
            "personeros"
        )
    ){


        db.createObjectStore(
            "personeros",
            {
                keyPath:"id",
                autoIncrement:true
            }
        );


    }






    /*
    Tabla refrigerios
    */


    if(
        !db.objectStoreNames.contains(
            "refrigerios"
        )
    ){


        db.createObjectStore(
            "refrigerios",
            {
                keyPath:"id",
                autoIncrement:true
            }
        );


    }



};







solicitud.onsuccess =
function(event){


    db =
    event.target.result;


    console.log(
        "IndexedDB lista"
    );


};






solicitud.onerror =
function(error){


    console.error(
        "Error IndexedDB",
        error
    );


};



}









/*
=========================================
 INSERTAR DATOS
=========================================
*/


function guardarDato(
tabla,
dato
){



let transaccion =
db.transaction(
    tabla,
    "readwrite"
);



let almacen =
transaccion.objectStore(
    tabla
);



almacen.add(dato);



}







/*
=========================================
 OBTENER DATOS
=========================================
*/


function obtenerDatos(
tabla,
callback
){


let transaccion =
db.transaction(
    tabla,
    "readonly"
);



let almacen =
transaccion.objectStore(
    tabla
);



let solicitud =
almacen.getAll();




solicitud.onsuccess =
function(){


    callback(
        solicitud.result
    );


};



}