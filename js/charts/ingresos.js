/*
=========================================
 ingresos.js
 Control gráfico de ingresos
 Plataforma Electoral
=========================================
*/





function cargarGraficoIngresos(){



let canvas =
document.getElementById(
"graficoIngresos"
);



if(!canvas)
return;






new Chart(
canvas,
{


type:"line",



data:{


labels:[


"Enero",

"Febrero",

"Marzo",

"Abril",

"Mayo"

],



datasets:[{


label:
"Ingresos de campaña",



data:[

1200,

2500,

1800,

3200,

4500

]



}]



},



options:{


responsive:true,


plugins:{


legend:{


display:true


}


}


}



}

);



}








/*
=========================================
 INGRESOS POR CATEGORÍA
=========================================
*/


function cargarGraficoTiposIngreso(){



let canvas =
document.getElementById(
"tiposIngreso"
);



if(!canvas)
return;




new Chart(
canvas,
{


type:"pie",



data:{


labels:[


"Aportes",

"Eventos",

"Donaciones"

],



datasets:[{


data:[

60,

30,

10

]


}]


}



}

);



}






document.addEventListener(
"DOMContentLoaded",
()=>{


cargarGraficoIngresos();


cargarGraficoTiposIngreso();


});