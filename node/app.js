/*
    TODO: http Request (hypertext transfer protocol)
    ? Concepto
    * En Node.js, el objeto request (solicitud) es un objeto proporcionado por el módulo 
    * http o https que representa la solicitud HTTP recibida por el servidor. Proporciona 
    * información sobre la solicitud realizada por el cliente, como la URL, los 
    * encabezados, los parámetros de consulta y el cuerpo de la solicitud.

*/
/* 
    ? Metodos de http Request
*/

import { createServer } from "http";

let server = createServer((req, res) => {
    /*
        * req.url: La URL de la solicitud.
        * req.method: El método HTTP utilizado en la solicitud (GET, POST, etc.).
        * req.headers: Un objeto que contiene los encabezados de la solicitud.
        * req.params: Los parámetros de ruta si estás utilizando un enrutador.
        * req.query: Los parámetros de consulta si están presentes en la URL.
        * req.body: El cuerpo de la solicitud (datos enviados en una solicitud POST o PUT)
    */
})


