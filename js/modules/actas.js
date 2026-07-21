/*
=========================================
 actas.js
 Gestión de actas electorales

 RNF-04:
 - Respaldo digital de actas
 - Compresión de imágenes
 - Registro de usuario y rol
 - Identificación y eliminación de actas
=========================================
*/



document.addEventListener(
"DOMContentLoaded",
()=>{


    cargarActas();



    const formulario =
    document.getElementById(
        "formActa"
    );



    if(formulario){


        formulario.addEventListener(
            "submit",
            registrarActa
        );


    }


});









/*
=========================================
 REGISTRAR ACTA
=========================================
*/


async function registrarActa(e){


    e.preventDefault();




    const archivo =
    document.getElementById(
        "imagenActa"
    ).files[0];




    if(!archivo){


        mostrarMensaje(
            "Debe seleccionar una imagen",
            "danger"
        );


        return;


    }







    const imagenComprimida =
    await comprimirImagen(
        archivo
    );








    let acta = {


        id:

        generarID(),




        mesa:

        document.getElementById(
            "mesa"
        ).value,




        local:

        document.getElementById(
            "local"
        ).value,




        imagen:

        imagenComprimida,




        usuario:

        typeof obtenerUsuario === "function"

        ?

        obtenerUsuario()

        :

        "Usuario desconocido",




        rol:

        typeof obtenerRol === "function"

        ?

        obtenerRol()

        :

        "Sin rol",




        fecha:

        new Date()
        .toLocaleDateString(
            "es-PE"
        )



    };









    let actas =


    JSON.parse(

        localStorage.getItem(
            "actas"
        )

    )


    ||


    [];







    actas.push(
        acta
    );







    localStorage.setItem(

        "actas",

        JSON.stringify(
            actas
        )

    );








    mostrarMensaje(
        "Acta registrada correctamente"
    );








    e.target.reset();






    cargarActas();



}









/*
=========================================
 COMPRESIÓN DE IMAGEN

 Reduce tamaño de fotografía
=========================================
*/


function comprimirImagen(
archivo
){


return new Promise(
(resolve)=>{


    let lector =
    new FileReader();




    lector.onload =
    function(e){



        let imagen =
        new Image();




        imagen.onload =
        function(){



            let canvas =
            document.createElement(
                "canvas"
            );




            let maxWidth =
            900;




            let escala =

            maxWidth /

            imagen.width;





            if(escala > 1){

                escala = 1;

            }





            canvas.width =

            imagen.width *

            escala;





            canvas.height =

            imagen.height *

            escala;







            let contexto =

            canvas.getContext(
                "2d"
            );







            contexto.drawImage(

                imagen,

                0,

                0,

                canvas.width,

                canvas.height

            );








            resolve(


                canvas.toDataURL(

                    "image/jpeg",

                    0.7

                )


            );





        };





        imagen.src =

        e.target.result;



    };






    lector.readAsDataURL(
        archivo
    );



});


}









/*
=========================================
 CARGAR ACTAS
=========================================
*/


function cargarActas(){



    let tabla =

    document.getElementById(
        "tablaActas"
    );



    if(!tabla)

    return;






    let actas =


    JSON.parse(

        localStorage.getItem(
            "actas"
        )

    )


    ||


    [];







    tabla.innerHTML="";









    actas.forEach(
    (a)=>{





        tabla.innerHTML +=


        `

        <tr>


        <td>

        ${a.mesa}

        </td>





        <td>

        ${a.local}

        </td>





        <td>

        ${a.usuario}

        </td>





        <td>

        ${a.rol}

        </td>





        <td>

        ${a.fecha}

        </td>





        <td>


        <img

        src="${a.imagen}"

        width="80"

        class="img-thumbnail">


        </td>







        <td>


        <a

        href="${a.imagen}"

        target="_blank"

        class="btn btn-primary btn-sm mb-1">


        <i class="bi bi-eye"></i>

        Ver


        </a>





        <button

        class="btn btn-danger btn-sm"

        onclick="eliminarActa(${a.id})">


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
 ELIMINAR ACTA
=========================================
*/


function eliminarActa(id){



    let actas =


    JSON.parse(

        localStorage.getItem(
            "actas"
        )

    )


    ||


    [];






    let nuevasActas =


    actas.filter(

        a => a.id !== id

    );






    localStorage.setItem(

        "actas",

        JSON.stringify(
            nuevasActas
        )

    );






    mostrarMensaje(

        "Acta eliminada correctamente",

        "warning"

    );






    cargarActas();



}