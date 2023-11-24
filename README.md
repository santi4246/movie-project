# Project - Movie

## Objetivos del Proyecto

- Construir una App a partir de un esquema de Base de Datos relacional

## Qué se necesita para correr la aplicación

 1. Instalar el administrador de paquetes de Node (NPM)
 2. Tener una conexión de Base de Datos (Postgresql)

A continuación un `boilerplate` con la estructura general tanto del servidor como de cliente.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

Para verificar que versión está instalada:

```bash
node -v
npm -v
```

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
PORT = 3001
DB_URL = postgres://postgres.[USER]:[PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver las distintas películas disponibles junto con información relevante de los mismas y a partir de ella poder, entre otras cosas:

- Mostrar películas
- Agregar nuevas películas

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Express
- [ ] Sequelize - Postgres

## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades:

<p align="right">
  <img height="400" wide="400" src="./IMG-20231122-WA0000.jpg" />
</p>

## Backend

Se ha desarrollado un servidor en Node/Express con las siguientes rutas:

ver documentación: 

https://documenter.getpostman.com/view/30575886/2s9YeD7sez