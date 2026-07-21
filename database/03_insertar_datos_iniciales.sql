/*
====================================================
 DATOS INICIALES
====================================================
*/


-- ROLES

INSERT INTO roles(nombre)
VALUES

('Administrador'),

('Candidato'),

('Tesorero'),

('Personero General');




-- USUARIO ADMINISTRADOR

INSERT INTO usuarios
(
nombre,
usuario,
password,
rol_id
)

VALUES

(
'Administrador Sistema',
'admin',
'123456',
1
);



-- CANDIDATO

INSERT INTO usuarios
(
nombre,
usuario,
password,
rol_id
)

VALUES

(
'Candidato Principal',
'candidato',
'123456',
2
);



-- TESORERO

INSERT INTO usuarios
(
nombre,
usuario,
password,
rol_id
)

VALUES

(
'Tesorero Campaña',
'tesorero',
'123456',
3
);



-- PERSONERO GENERAL

INSERT INTO usuarios
(
nombre,
usuario,
password,
rol_id
)

VALUES

(
'Personero General',
'pgeneral',
'123456',
4
);
