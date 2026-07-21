/*
====================================================
 CONSULTAS DE PRUEBA
====================================================
*/


-- Ver usuarios

SELECT 

u.id,

u.nombre,

u.usuario,

r.nombre AS rol

FROM usuarios u

INNER JOIN roles r

ON u.rol_id = r.id;



-- Total ingresos

SELECT 

SUM(valor)

AS total_aportes

FROM aportantes;



-- Total gastos publicidad

SELECT

SUM(monto)

AS total_publicidad

FROM publicidad;



-- Cantidad de personeros

SELECT

COUNT(*)

FROM personeros;



-- Cantidad de locales

SELECT

COUNT(*)

FROM locales;
