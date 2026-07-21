# Plataforma Web de Gestión de Campaña Electoral

## Control Político y Financiero

---

## 1. Descripción del Proyecto

La Plataforma Web de Gestión de Campaña Electoral es un MVP desarrollado para centralizar y optimizar la administración de una campaña política, permitiendo controlar de manera transparente la información financiera, logística y organizacional.

El sistema permite gestionar aportes, eventos, gastos, personeros electorales y actividades del día de elección mediante una interfaz web dinámica, adaptable y preparada para funcionamiento offline.

---

# 2. Objetivo

Desarrollar una plataforma web que facilite:

- La gestión de ingresos y egresos de campaña.
- El control de aportantes.
- La administración jerárquica de personeros.
- La organización logística del día electoral.
- El seguimiento del presupuesto de campaña.

---

# 3. Tecnologías Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript ES6+
- Bootstrap 5
- Bootstrap Icons
- Chart.js


## Almacenamiento Local

- LocalStorage
- IndexedDB (próxima implementación)


## Aplicación Web Progresiva

- Service Worker
- Web App Manifest (PWA)

---

# 4. Características Principales

## Gestión Financiera

Permite:

- Registrar aportantes.
- Registrar aportes monetarios y no monetarios.
- Controlar ingresos.
- Registrar gastos.
- Visualizar presupuesto ejecutado.

Relacionado con:

- RF-01
- RF-05


---

## Gestión Electoral

Permite:

- Registrar locales de votación.
- Administrar personeros generales.
- Administrar personeros de mesa.
- Organizar asignaciones electorales.

Relacionado con:

- RF-03


---

## Gestión Logística

Permite:

- Registrar eventos.
- Controlar actividades sociales.
- Gestionar entrega de refrigerios.
- Monitorear estado del día electoral.

Relacionado con:

- RF-02
- RF-04


---

# 5. Requerimientos No Funcionales

## Funcionamiento Offline

Implementado mediante:

- Service Worker.
- Cache del navegador.
- Preparación para IndexedDB.


## Diseño Responsive

La plataforma está diseñada para funcionar en:

- Computadoras.
- Tablets.
- Smartphones.


## Seguridad

La versión MVP contempla:

- Control básico de sesión.
- Separación de módulos.
- Preparación para implementación de roles.


---

# 6. Estructura del Proyecto

PlataformaCampañaElectoral/

│
├── index.html
├── dashboard.html
├── manifest.json
├── service-worker.js
│
├── css/
│ ├── login.css
│ └── dashboard.css
│
├── js/
│ ├── login.js
│ ├── dashboard.js
│ └── modules/
│
├── pages/
│ ├── aportantes.html
│ ├── eventos.html
│ ├── personeros.html
│ ├── refrigerios.html
│ └── publicidad.html
│
├── assets/
│ ├── img/
│ └── icons/
│
└── README.md


---

# 7. Instalación y Ejecución

## Opción 1: Abrir directamente

1. Descargar o copiar el proyecto.
2. Abrir:
	index.html en un navegador web

---

# Opción 2: Usar servidor local

Recomendado:

- Visual Studio Code.
- Extensión Live Server.


Pasos:

1. Abrir la carpeta del proyecto.
2. Ejecutar Live Server.
3. Acceder mediante:
	http://localhost:5500

---

# 8. Usuario de Prueba


Usuario:
	admin
Contraseña:
	123456


---

# 9. Módulos del Sistema

| Módulo | Estado |
|---|---|
| Inicio de sesión | Implementado |
| Dashboard | Implementado |
| Gestión de aportantes | Pendiente |
| Eventos | Pendiente |
| Proyección social | Pendiente |
| Personeros | Pendiente |
| Refrigerios | Pendiente |
| Publicidad | Pendiente |
| Reportes | Pendiente |
| IndexedDB | Pendiente |


---

# 10. Próximas Implementaciones

- Base de datos IndexedDB.
- Sistema completo de usuarios y roles.
- Sincronización automática offline/online.
- Encriptación de información sensible.
- Carga de fotografías de actas electorales.
- Generación de reportes financieros.
- Exportación de información.


---

# 11. Versión

**Versión:** 1.0 MVP

**Tipo:** Aplicación Web Progresiva (PWA)

**Arquitectura:** Frontend modular basado en HTML, CSS y JavaScript.

---
