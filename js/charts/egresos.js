/*
=========================================
 egresos.js
 Control gráfico de gastos
 Plataforma Electoral
=========================================
*/







function cargarGraficoEgresos(){



let canvas =
document.getElementById(
"graficoEgresos"
);



if(!canvas)
return;







new Chart(
canvas,
{


type:"bar",



data:{


labels:[


"Publicidad",

"Logística",

"Eventos",

"Refrigerios"

],



datasets:[{


label:
"Gastos Ejecutados",



data:[

4500,

2300,

1800,

900

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








/*
=========================================
 DISTRIBUCIÓN DE EGRESOS
=========================================
*/


function cargarDistribucionEgresos(){



let canvas =
document.getElementById(
"distribucionEgresos"
);



if(!canvas)
return;






new Chart(
canvas,
{


type:"doughnut",



data:{


labels:[


"Publicidad",

"Eventos",

"Personal",

"Otros"


],



datasets:[{


data:[

45,

25,

20,

10

]


}]


},



options:{


responsive:true


}



}

);



}








document.addEventListener(
"DOMContentLoaded",
()=>{


cargarGraficoEgresos();


cargarDistribucionEgresos();


});