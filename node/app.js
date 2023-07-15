/*
    TODO: http (hypertext transfer protocol)
    ? Concepto
    * El módulo https en Node.js proporciona una API para realizar solicitudes HTTP 
    * seguras (HTTPS). A continuación, se mencionan algunos de los métodos más 
    * utilizados del módulo https
*/
/* 
    ? Metodos de http
*/
import http from "http";

let get = http.get(/* options, callback */) // * Realiza la solicitud http get a traves de https
/*
* options: Opciones de la solicitud, como la URL y los encabezados.
* callback: Función de devolución de llamada que se ejecuta cuando se completa la respuesta. Recibe el objeto de respuesta.
*/

let request = http.request(/* options, callback */) // *inicia una solicitud http PERSONALIZADA a traves de HTTPS
/*
    * options: Opciones de la solicitud, como la URL, los encabezados y el método HTTP.
    * callback: Función de devolución de llamada que se ejecuta cuando se completa la respuesta. Recibe el objeto de respuesta.
 */

let server = http.createServer(/* options, requestListener */) // * crea un servidor HTTPS
/*
    * options: Opciones para la creación del servidor, como el certificado y la clave privada
    * requestListener: Función que se ejecuta cuando se recibe una solicitud en el servidor
*/
