[![Build Status](http://54.184.109.104:8080/api/badges/vickpalomo/api_seis10/status.svg)](http://54.184.109.104:8080/vickpalomo/api_seis10)
[![SonarQuebe](http://54.184.109.104:9000/api/project_badges/measure?project=vickpalomo%3Aapi_seis10&metric=alert_status)]

# Prueba de Programacion seis10

_Api desarrollada con node y express para resolver la prueba de programacion de la empresa seis10_

* El panel que consume esta api la puede encontrar en https://github.com/vickpalomo/seis10_spa

### Pre-requisitos 📋

* Docker version 19.03.11
* docker-compose version 1.11.2
* node ^v12.18
* npm ^6.14.4

## Comenzando 🚀

_Clona el repositorio del proyecto_
```
  git clone git@github.com:vickpalomo/api_seis10.git
```

### Configuración Nodejs 🔧

_Para ejecutar el proyecto con nodejs_

* Instalar dependencias del proyecto

```
  npm install
```
* Si tiene un servidor mysql funcionando cree la base de datos seis10

* Abra el archivo ./config/confid_database.js y llene sus datos de la conexion a mysql

* Ahora ejecute el siguiente comando para correr las migraciones, esto creara las tablas de la base de datos

```
  npm run migrations
```

* Ejecute el siguiente comando para llenar las tablas con datos ( los datos se crearon manualmente no se usaron librerias como Fake.js)

```
  npm run seeds
```

* Levantar el proyecto usando nodemon, este paquete le permitira reiniciar el servidor cada vez que detecte un cambio en los archivos

```
  npm run dev
```

### Configuración con Docker 🔧

* Dentro de la carpeta del proyecto ejecute

```
  docker-compose up --build
```
* Al terminar de crear los contenedores ejecute el siguiente comando para correr las migraciones, esto creara las tablas de la base de datos

```
  npm run migrations
```

* Ejecute el siguiente comando para llenar las tablas con datos ( los datos se crearon manualmente no se usaron librerias como Fake.js)

```
  npm run seeds
```

* El servidor se levanta en el puerto 3001
```
  http://localhost:3001
```

## Documentación de la API ⚙️

* La documentación de la API se encuentra el la siguiente URL

```
  GET http://localhost:3001/api-documentation/
```

## Construccion CD/CI 🛠️

_Implementacíon de analisis de codigo usando sonarquebe_

* [Drone](https://docs.drone.io/) - Servidor CI/CD.
* [Sonarqube](https://docs.sonarqube.org/latest/) - Servidor para analisis de Codigo y Seguridad.

## Autores ✒️

* **Victor Manuel Palomo Yama** - *Backend Developer* - [vickpalomo](http://github.com/vickpalomo)

