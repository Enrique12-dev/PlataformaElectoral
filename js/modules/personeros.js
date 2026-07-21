/*
=========================================
 personeros.js
 Gestión de Personeros Electorales
 RF-03

 Plataforma Web de Gestión
 Campaña Electoral MVP
=========================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


cargarLocales();


cargarMesas();


cargarPersoneros();





const formulario =

document.getElementById(
"formPersonero"
);



if(formulario){


formulario.addEventListener(
"submit",
registrarPersonero
);


}






const tipo =

document.getElementById(
"tipoPersonero"
);



if(tipo){


tipo.addEventListener(
"change",
controlarMesa
);


}




});









/*
=========================================
 LOCALES ELECTORALES
=========================================
*/


function cargarLocales(){



const select =

document.getElementById(
"localPersonero"
);




if(!select)
return;





const locales = [


"Universidad Nacional de Piura",


"Universidad de Piura",


"Universidad César Vallejo - Piura",


"Universidad Tecnológica del Perú - Piura",


"Instituto Superior Tecnológico Almirante Miguel Grau",


"IE San Miguel de Piura",


"IE Nuestra Señora de Fátima",


"IE José Olaya Balandra",


"IE Enrique López Albújar",


"Colegio Salesiano Don Bosco",


"Colegio de Ingenieros de Piura",


"Municipalidad Provincial de Piura",


"Municipalidad Distrital de Castilla",


"Centro de Salud Castilla",


"Hospital Santa Rosa de Piura"


];






select.innerHTML =

`
<option value="">
Seleccione local electoral
</option>

`;







locales.forEach(

(local)=>{


select.innerHTML +=


`
<option value="${local}">
${local}
</option>

`;


});



}











/*
=========================================
 GENERAR MESAS 001 - 300
=========================================
*/


function cargarMesas(){



const select =

document.getElementById(
"mesaPersonero"
);





if(!select)
return;





select.innerHTML =

`
<option value="">
Seleccione mesa
</option>

`;






for(
let i = 1;
i <= 300;
i++
){



let numero =

String(i)
.padStart(
3,
"0"
);





select.innerHTML +=


`
<option value="${numero}">
Mesa ${numero}
</option>

`;



}



}












/*
=========================================
 CONTROL DE MESA SEGÚN CARGO
=========================================
*/


function controlarMesa(){



const cargo =

document.getElementById(
"tipoPersonero"
).value;





const mesa =

document.getElementById(
"mesaPersonero"
);





if(
cargo === "Personero de Mesa"
){


mesa.required = true;


}

else{


mesa.required = false;


mesa.value = "";


}



}












/*
=========================================
 REGISTRAR PERSONERO
=========================================
*/


function registrarPersonero(e){



e.preventDefault();





const nombre =

document.getElementById(
"nombrePersonero"
).value.trim();






const dni =

document.getElementById(
"dniPersonero"
).value.trim();







const cargo =

document.getElementById(
"tipoPersonero"
).value;








const local =

document.getElementById(
"localPersonero"
).value;







const mesa =

document.getElementById(
"mesaPersonero"
).value;








if(
dni.length !== 8 ||
isNaN(dni)
){


mostrarMensaje(
"DNI debe tener 8 dígitos"
);


return;


}








if(
cargo==="Personero de Mesa"
&&
mesa===""

){


mostrarMensaje(
"Seleccione número de mesa"
);


return;


}







let lista =

JSON.parse(

localStorage.getItem(
"personeros"
)

)

|| [];









let existe =

lista.some(

(p)=>{


let dniGuardado = p.dni;



if(
typeof descifrarDNI === "function"
){


dniGuardado =
descifrarDNI(
p.dni
);


}



return dniGuardado === dni;


}

);







if(existe){


mostrarMensaje(
"El DNI ya se encuentra registrado"
);


return;


}








let personero = {



nombre:nombre,






dni:

typeof cifrarDNI === "function"

?

cifrarDNI(dni)

:

dni,







cargo:cargo,







local:

local ||

"Sin asignar",







mesa:

mesa ||

"-",







estado:

"Activo"




};









lista.push(
personero
);








localStorage.setItem(

"personeros",

JSON.stringify(
lista
)

);









mostrarMensaje(

"Personero registrado correctamente"

);







e.target.reset();






cargarPersoneros();



}













/*
=========================================
 MOSTRAR PERSONEROS
=========================================
*/


function cargarPersoneros(){



const tabla =

document.getElementById(
"tablaPersoneros"
);





if(!tabla)
return;








const lista =


JSON.parse(

localStorage.getItem(
"personeros"
)

)

|| [];








tabla.innerHTML="";








lista.forEach(

(p)=>{



let dni = p.dni;





if(
typeof descifrarDNI === "function"
){


dni =

descifrarDNI(
p.dni
);


}







tabla.innerHTML +=


`
<tr>


<td>
${p.nombre}
</td>



<td>
${dni}
</td>



<td>
${p.cargo}
</td>



<td>
${p.local}
</td>



<td>
${p.mesa}
</td>



<td>

<span class="badge bg-success">

${p.estado}

</span>

</td>



</tr>

`;



});



}