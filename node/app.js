/*
    TODO: mysql2
    ? Concepto
    * mysql2 es un paquete de Node.js que proporciona una interfaz para interactuar 
    * con bases de datos MySQL. Es una biblioteca de cliente MySQL para Node.js que 
    * se basa en el paquete mysql original pero con varias mejoras y optimizaciones.
    * mysql2 ofrece un rendimiento superior en comparación con mysql, especialmente 
    * en escenarios con altas cargas de trabajo y consultas concurrentes. Utiliza la 
    * biblioteca C++ libmysqlclient para comunicarse directamente con el servidor 
    * MySQL, lo que permite una mayor eficiencia y velocidad.
*/

/*
    ? Caracteristicas
    * Rendimiento mejorado: mysql2 ha sido diseñado para proporcionar un 
    * rendimiento superior y un menor uso de recursos en comparación con mysql. Esto 
    * se logra mediante el uso de conexiones de socket TCP/IP más eficientes y un 
    * mejor manejo de la memoria.
    
    * Soporte para consultas preparadas: mysql2 permite utilizar consultas 
    * preparadas, lo que puede mejorar la seguridad y el rendimiento al ejecutar 
    * consultas repetidas con diferentes parámetros.
    
    * Manejo de resultados de consultas mejorado: mysql2 proporciona un manejo 
    * mejorado de los resultados de las consultas, lo que permite un procesamiento más 
    * eficiente de grandes conjuntos de resultados.
   
    * Compatibilidad con las últimas características de MySQL: mysql2 se mantiene 
    * actualizado con las últimas características y mejoras introducidas en MySQL.
    
    * Streams: mysql2 admite el uso de streams para la recuperación de resultados de 
    * consultas grandes. Esto significa que puedes leer y procesar los resultados en 
    * tiempo real a medida que se recuperan del servidor de MySQL, en lugar de 
    * esperar a que se complete toda la consulta.
    
    * Compatibilidad con promesas: A diferencia de mysql, mysql2 proporciona una 
    * API basada en promesas, lo que facilita el manejo de consultas asincrónicas y 
    * mejora la legibilidad del código
*/

// TODO: archivo conexion.js
import mysql from "mysql2";

// crea la conexion
let con = mysql.createPool({
    host: "...",
    user: "...",
    password: "...",
    database: "..."
})

export default con 


/*
    TODO: archivo router.js
*/
// supongamos que la configuracion de los middleware y express ya esta hecha
import co from "../database/conexion.js"

// dentro del metodo GET, POST ...
con.query(/* query, data?, middleware?, callback*/)
/*
    * query = consulta sql que se quiere hacer
    * data = parametro opcional, en caso de que la consulta necesite datos
    * middleware = si tienes dto puedes configurar los middleware para validacion de data
    * callback = proporciona funcion de devolucion, que tiene err, cuando termina la consulta 
*/







