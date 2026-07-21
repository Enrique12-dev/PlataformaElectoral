/*
=========================================
 AUTH.JS
 Control de usuarios y permisos
 RNF-03 Seguridad y Roles
 Plataforma Electoral
=========================================
*/






/*
=========================================
 VALIDAR SESIÓN ACTIVA
=========================================
*/


function sesionActiva(){


    return (

        sessionStorage.getItem(
            "sesionActiva"
        )

        ===

        "true"

    );


}









/*
=========================================
 OBTENER USUARIO ACTIVO
=========================================
*/


function obtenerUsuarioActivo(){



    if(!sesionActiva()){


        return null;


    }






    return {


        usuario:

        sessionStorage.getItem(
            "usuario"
        ),




        rol:

        sessionStorage.getItem(
            "rol"
        )



    };



}









/*
=========================================
 OBTENER USUARIO
=========================================
*/


function obtenerUsuario(){



    let usuario =

    obtenerUsuarioActivo();




    if(usuario){


        return usuario.usuario;


    }




    return null;



}









/*
=========================================
 OBTENER ROL
=========================================
*/


function obtenerRol(){



    let usuario =

    obtenerUsuarioActivo();




    if(usuario){


        return usuario.rol;


    }




    return null;



}









/*
=========================================
 VALIDAR PERMISOS POR MÓDULO
=========================================
*/


function tienePermiso(
modulo
){



    let rol =

    obtenerRol();






    /*
    =========================
    ADMINISTRADOR
    =========================
    */


    if(
        rol === "Administrador"
    ){


        return true;


    }









    /*
    =========================
    CANDIDATO
    =========================
    */


    if(
        rol === "Candidato"
    ){


        return true;


    }









    /*
    =========================
    TESORERO
    =========================
    */


    if(
        rol === "Tesorero"
    ){



        return (

            modulo === "aportantes"

            ||

            modulo === "publicidad"

            ||

            modulo === "reportes"

            ||

            modulo === "eventos"


        );



    }









    /*
    =========================
    PERSONERO GENERAL
    =========================
    */


    if(
        rol === "Personero General"
    ){



        return (


            modulo === "personeros"

            ||

            modulo === "refrigerios"

            ||

            modulo === "actas"



        );



    }









    return false;



}









/*
=========================================
 PROTEGER PÁGINAS
=========================================
*/


function protegerPagina(
modulo
){





    /*
    Sin sesión
    */


    if(
        !sesionActiva()
    ){



        alert(
            "Debe iniciar sesión."
        );



        window.location.href =

        "../index.html";



        return;


    }









    /*
    Sin permisos
    */


    if(
        !tienePermiso(
            modulo
        )
    ){



        alert(

            "No tiene permisos para acceder a este módulo."

        );



        window.location.href =

        "../dashboard.html";



        return;


    }





}