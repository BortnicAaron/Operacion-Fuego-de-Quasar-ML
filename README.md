# Operacion-Fuego-de-Quasar-ML

Proyecto tecnico realizado para entrevista en Mercado-Pago.

### Instalación 🔧

_Primero_

```
clonar el proyecto
```
_Después dentro de la carpeta api_
```
npm install
```
_Y por último_

```
npm run start
```
## Desafío 🚀

### Nivel 1:
#### func GetLocation(distances ...float32) (x, y float32).
```
No pude realizarlo. No encontré la solución al problema.
```
#### func GetMessage(messages ...[]string) (msg string)
```
Consigna lograda. Dejo la ubicacion de la función. 
```
```Ubicación: api\app\function\secretFunction.js```
##
### Nivel 2
#### Crear una API REST, hostear esa API en un cloud computing libre:
```
Creé una API REST, pero no pude hostear esa API en un cloud computing libre, intenté realizarlo en DigitalOcean (no lo adjunto).
```
#### Crear el servicio /topsecret/ en donde se pueda obtener la ubicación de la nave y el mensaje que emite:
```
Consigna lograda. Pueden probarla a través de Postman.
Para hacerlo, hay que cargar con anterioridad los satéllites, con sus nombres y ubicaciones.
Abajo adjunto la secuencia.
```
<img src="https://github.com/BortnicAaron/Operacion-Fuego-de-Quasar-ML/blob/main/static/f2.png"><img>
<img src="https://github.com/BortnicAaron/Operacion-Fuego-de-Quasar-ML/blob/main/static/f1.png"><img>
```Ubicacion de la ruta: \api\app\routes\topsecret.route.js```
```Ubicacion de la controller: \api\app\routes\topsecret.controller.js```
##
### Nivel 3
#### Crear el servicio /topsecret_split/ en donde podra recibir en diferentes POST la informacion de cada nave, y si es posible obtener la ubicación de la nave emisora y el mensaje que emite, respetando la misma firma que antes:
```
Consigna lograda. Pueden probarla a través de Postman.
Para hacerlo, hay que cargar con anterioridad los satéllites, con sus nombres y ubicaciones.
Abajo adjunto la secuencia.
```
<img src="https://github.com/BortnicAaron/Operacion-Fuego-de-Quasar-ML/blob/main/static/f3.png"><img>
#### Tambien el servicio /topsecret_split/ debera poder aceptar GET, en el cual indicara la posición y el mensaje de la nave, en caso que sea posible determinarlo.
```
Consigna lograda. Pueden probarla a través de Postman.
Para hacerlo, hay que cargar con anterioridad los satéllites, con sus nombres y ubicaciones.
Abajo adjunto la secuencia.
```
<img src="https://github.com/BortnicAaron/Operacion-Fuego-de-Quasar-ML/blob/main/static/f4.png"><img>
## UML

<img src="https://github.com/BortnicAaron/Operacion-Fuego-de-Quasar-ML/blob/main/static/UML.png"><img>

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_





