# Conceptos Fundamentales de HTTP

## 1. ¿Qué es HTTP?
**HTTP (HyperText Transfer Protocol)** es el protocolo de comunicación que permite la transferencia de información en la web. Funciona bajo el modelo cliente-servidor:  
- El **cliente** (generalmente un navegador) realiza una **petición**.  
- El **servidor** responde con los datos solicitados (páginas HTML, imágenes, videos, etc.).  

Es un protocolo sin estado, lo que significa que cada petición es independiente y no guarda información entre una y otra.



## 2. ¿Cuál es la estructura de una petición?
Una petición HTTP está compuesta por:

1. **Línea de petición**  
   - Contiene el método, la ruta (URL) y la versión del protocolo.  
   - Ejemplo:  
     ```
     GET /index.html HTTP/1.1
     ```

2. **Encabezados (Headers)**  
   - Información adicional sobre la petición.  
   - Ejemplo:  
     ```
     Host: www.ejemplo.com
     User-Agent: Mozilla/5.0
     ```

3. **Cuerpo (Body)** 
   - Usado principalmente en métodos como `POST` o `PUT` para enviar datos al servidor.  
   - Ejemplo:  
     ```json
     {
       "usuario": "star",
       "password": "1234"
     }
     ```



## 3. ¿Cuáles son los métodos más usados?
Los métodos definen la acción que el cliente quiere realizar sobre el recurso:

- **GET**: Solicita un recurso (no modifica datos).
- **POST**: Envía datos al servidor (por ejemplo, formularios).
- **PUT**: Reemplaza un recurso existente con nuevos datos.
- **DELETE**: Elimina un recurso específico.
- **PATCH**: Modifica parcialmente un recurso.
- **HEAD**: Igual que GET pero solo obtiene los encabezados de la respuesta.
- **OPTIONS**: Devuelve los métodos soportados por el servidor.


## 4. ¿Cuáles son los códigos de estado?
Los códigos de estado indican el resultado de la petición. Se agrupan en categorías:

- **1xx – Informativos**  
  Ejemplo: `100 Continue`  
- **2xx – Éxito**  
  Ejemplo: `200 OK`, `201 Created`  
- **3xx – Redirección**  
  Ejemplo: `301 Moved Permanently`, `302 Found`  
- **4xx – Error del cliente**  
  Ejemplo: `400 Bad Request`, `404 Not Found`, `401 Unauthorized`  
- **5xx – Error del servidor**  
  Ejemplo: `500 Internal Server Error`, `503 Service Unavailable`  



## 5. ¿Qué son los encabezados?
Los **encabezados (HTTP Headers)** son metadatos que se envían tanto en las peticiones como en las respuestas para proporcionar información adicional.  

Ejemplos:  
- `Content-Type: application/json` → Tipo de contenido.  
- `Authorization: Bearer <token>` → Credenciales de acceso.  
- `Cache-Control: no-cache` → Control de almacenamiento en caché.  



## 6. ¿Qué es y cuál es la estructura de una URL?
Una **URL (Uniform Resource Locator)** es la dirección única que identifica un recurso en la web.  

**Estructura general:**

```
protocolo://usuario:contraseña@host:puerto/ruta?parámetros#fragmento
```
**Ejemplo:**
```
https://user:1234@www.ejemplo.com:443/blog/articulo?id=10#comentarios
```

**Ejemplo explicado:**  

- **https://** → Protocolo  
- **user:1234@** → Usuario y contraseña (opcional)  
- **www.ejemplo.com** → Host o dominio  
- **:443** → Puerto (opcional, por defecto 80 para HTTP y 443 para HTTPS)  
- **/blog/articulo** → Ruta del recurso  
- **?id=10** → Parámetros de consulta (Query string)  
- **#comentarios** → Fragmento (navega dentro de la página)  

