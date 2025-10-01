# Arquitectura de una Aplicación Web

La arquitectura de una aplicación web se refiere a la forma en la que se organizan sus partes y cómo se comunican entre ellas. Básicamente es el “diseño” que define cómo funciona la app por dentro, cómo interactúan el cliente y el servidor, y cómo se acomoda el código para que sea más fácil de mantener y escalar.

## Tipos de Arquitectura

### De acuerdo a cómo se comunican las partes

#### Cliente-Servidor
- Es el modelo más común en la web.
- El cliente (navegador) pide información o un servicio.
- El servidor recibe esa petición, la procesa y manda una respuesta.
- Ejemplo: cuando entras a una página y el servidor te devuelve los datos.

#### Punto a Punto (P2P)
- No hay un servidor central.
- Cada dispositivo funciona como cliente y servidor al mismo tiempo.
- Se usa mucho en apps de intercambio de archivos.
- Ejemplo: torrents.

### De acuerdo a cómo se organiza el código

#### Monolito
- Todo el código está junto en un solo bloque.
- Es más fácil de hacer al inicio, pero se vuelve complicado de mantener cuando crece.

#### En Capas
- El código se divide en capas con funciones específicas:
  - Presentación (lo que ve el usuario).
  - Lógica de negocio (procesos).
  - Acceso a datos (la base de datos).
- Da más orden y facilita el mantenimiento.

#### Microservicios
- La aplicación se separa en varios servicios pequeños que funcionan por su cuenta.
- Se comunican entre sí por medio de APIs.
- Ejemplo: un servicio solo para usuarios y otro solo para pagos.

#### Serverless
- El código se divide en funciones pequeñas que solo se ejecutan cuando se necesitan.
- Todo lo de los servidores lo maneja la nube.
- Se paga solo por lo que se usa.
- Es práctico y escalable, aunque depende del proveedor en la nube.

## Conclusión
La arquitectura de una aplicación web trata de cómo se construye y organiza para que funcione bien. Según el tipo de comunicación y la forma de organizar el código, se puede usar un modelo más simple o uno más complejo, dependiendo de las necesidades del proyecto.
