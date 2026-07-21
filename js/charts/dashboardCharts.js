/*
=========================================
 dashboardCharts.js
 Gráficos principales del Dashboard
 Plataforma Electoral
=========================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


    cargarGraficoResumen();


    cargarGraficoPersoneros();


});








/*
=========================================
 GRÁFICO FINANCIERO GENERAL
=========================================
*/


function cargarGraficoResumen(){


let canvas =
document.getElementById(
"graficoResumen"
);



if(!canvas)
return;



new Chart(
canvas,
{

type:"doughnut",


data:{


labels:[

"Ingresos",

"Egresos",

"Disponible"

],



datasets:[{


data:[

6500,

3500,

3000

]


}]



},



options:{


responsive:true,


plugins:{


legend:{


position:"bottom"


}


}


}


}

);



}









/*
=========================================
 GRÁFICO DE PERSONEROS
=========================================
*/


function cargarGraficoPersoneros(){


let canvas =
document.getElementById(
"graficoPersoneros"
);



if(!canvas)
return;




new Chart(
canvas,
{


type:"bar",



data:{


labels:[

"Asignados",

"Pendientes",

"Confirmados"

],



datasets:[{


label:
"Personeros",



data:[

250,

40,

210

]



}]


},



options:{


responsive:true,


scales:{


y:{


beginAtZero:true


}


}



}



}

);



}