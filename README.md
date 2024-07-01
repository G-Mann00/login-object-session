# Login Object Session

<img src="https://img.shields.io/badge/STATUS-DEVELOPING%20-green">

## Overview

Login Object Session (LOS o login-object-session) es un pequeño proyecto desarrollado con React y Tailwind CSS para la asignatura de Desarrollo de Aplicaciones Web 2, cuyo propósito es el estudio del manejo de sesiones de usuarios, desde la autentificación, hasta el tiempo de inactividad de la sesión antes de caducar. Este proyecto busca cómo implementar las buenas prácticas de seguridad mientras mantiene una presentación agradable y que pueda realizar las siguientes funciones:

- Inicio de Sesión con verificación
- Registro de usuario
- Consulta de los datos de la sesión
- Protección de rutas

## Vista Previa

![LOS-login](https://github.com/G-Mann00/login-object-session/assets/103607877/9f73a50f-0f73-49ad-8f22-f789f28d7163)

## Usos del Proyecto

Este proyecto fue creado mediante la herramienta de construcción (build tool) Vite y hace uso de las siguientes librerías:

- Tailwind CSS
- Material Tailwind
- React Router
- React Icons
- Axios
- Express
- Mongoose
- CORS
- Body-parser
- Bcrypt
- Jsonwebtoken
- Nodemon

## Prototipos con Figma

https://www.figma.com/design/sVkYFKVwYGW3quqw6XGCgv/Login-Object-Session?node-id=18-109&t=lZlvPpOyOTsnxNav-1

## Instalar Dependencias

Una vez clonado el repositorio, se deben ejecutar los siguientes comandos en la terminal del IDE de su preferencia para instalar las dependencias necesarias de la aplicación.

### Dependencias del Frontend

Para instalar las dependencias del frontend, navega a la carpeta frontend y ejecuta:

```bash
cd ./frontend
npm install
```

### Dependencias del Backend

Para instalar las dependencias del backend, navega a la carpeta backend y ejecuta:

```bash
cd ./backend
npm install
```

## Ejecutar la Aplicación

Para el funcionamiento correcto de la aplicación, se deben ejecutar tanto el backend como el frontend.

### Ejecución del Backend

El backend se ejecutara en http://localhost:3007

```bash
cd ./backend
npm start
```

### Ejecución del Frontend

El frontend se ejecutara en http://localhost:5173

```bash
cd ./frontend
npm run dev
```
