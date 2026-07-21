/*
====================================================
 TABLAS DEL SISTEMA
====================================================
*/


-- ==========================================
-- TABLA ROLES
-- ==========================================

CREATE TABLE roles (

    id SERIAL PRIMARY KEY,

    nombre VARCHAR(50) UNIQUE NOT NULL

);



-- ==========================================
-- TABLA USUARIOS
-- ==========================================

CREATE TABLE usuarios (

    id SERIAL PRIMARY KEY,

    nombre VARCHAR(150) NOT NULL,

    usuario VARCHAR(50) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    rol_id INTEGER,

    estado BOOLEAN DEFAULT TRUE,

    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    CONSTRAINT fk_usuario_rol

    FOREIGN KEY(rol_id)

    REFERENCES roles(id)

);



-- ==========================================
-- TABLA APORTANTES
-- ==========================================


CREATE TABLE aportantes (

    id SERIAL PRIMARY KEY,

    dni_ruc VARCHAR(20),

    nombre VARCHAR(150) NOT NULL,

    celular VARCHAR(20),

    tipo_aporte VARCHAR(50),

    valor NUMERIC(10,2),

    comprobante VARCHAR(200),

    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- ==========================================
-- TABLA EVENTOS
-- ==========================================


CREATE TABLE eventos (

    id SERIAL PRIMARY KEY,

    nombre VARCHAR(150),

    descripcion TEXT,

    fecha DATE,

    ubicacion VARCHAR(150),

    costo NUMERIC(10,2),

    ingreso NUMERIC(10,2),

    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



-- ==========================================
-- TABLA PUBLICIDAD
-- ==========================================


CREATE TABLE publicidad (

    id SERIAL PRIMARY KEY,

    tipo VARCHAR(100),

    descripcion TEXT,

    monto NUMERIC(10,2),

    fecha DATE,

    proveedor VARCHAR(150)

);



-- ==========================================
-- TABLA PROYECCIÓN SOCIAL
-- ==========================================


CREATE TABLE proyeccion_social (

    id SERIAL PRIMARY KEY,

    actividad VARCHAR(150),

    descripcion TEXT,

    fecha DATE,

    beneficiarios INTEGER,

    costo NUMERIC(10,2)

);



-- ==========================================
-- TABLA PERSONEROS
-- ==========================================


CREATE TABLE personeros (

    id SERIAL PRIMARY KEY,

    dni VARCHAR(15),

    nombres VARCHAR(150),

    celular VARCHAR(20),

    provincia VARCHAR(100),

    distrito VARCHAR(100),

    cargo VARCHAR(50),

    local_asignado VARCHAR(150)

);



-- ==========================================
-- TABLA LOCALES ELECTORALES
-- ==========================================


CREATE TABLE locales (

    id SERIAL PRIMARY KEY,

    nombre VARCHAR(150),

    direccion VARCHAR(200),

    provincia VARCHAR(100),

    distrito VARCHAR(100),

    mesas INTEGER

);



-- ==========================================
-- TABLA REFRIGERIOS
-- ==========================================


CREATE TABLE refrigerios (

    id SERIAL PRIMARY KEY,

    cantidad INTEGER,

    fecha DATE,

    destino VARCHAR(150),

    estado VARCHAR(30)

);



-- ==========================================
-- TABLA ACTAS ELECTORALES
-- ==========================================


CREATE TABLE actas (

    id SERIAL PRIMARY KEY,

    local_id INTEGER,

    mesa VARCHAR(50),

    estado VARCHAR(50),

    observacion TEXT,


    FOREIGN KEY(local_id)

    REFERENCES locales(id)

);



-- ==========================================
-- TABLA AUDITORIA
-- ==========================================


CREATE TABLE auditoria (

    id SERIAL PRIMARY KEY,

    usuario VARCHAR(50),

    accion VARCHAR(100),

    tabla_afectada VARCHAR(100),

    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
