/*
    TODO: File System (fs) 
    ? Concepto
    * El módulo fs (File System) en Node.js proporciona una amplia gama de métodos 
    * para interactuar con el sistema de archivos del sistema operativo. A continuación, 
    * se mencionan algunos de los métodos más utilizados del módulo fs:
*/
/* 
    ? Metodos de File System
*/
import fs from "fs";

let ra = fs.readFile(/*path, options, callback*/) // * lectura de archivos de forma asincrónica
/* 
    * path = ruta del archivo, ruta relativa.
    * options = opciones de lectura, como la condificacion.
    * callback = Funcion de devolucion, de llamada que recibe err y data, (contenido del archivo)
*/
let r = fs.readFileSync(/*path, options*/) // * lectura de archivo de forma sincrona (bloqueante)
/* 
    * path = ruta del archivo, ruta relativa.
    * options = opciones de lectura, como la condificacion. Devuelve contenido del archivo.
*/

let wa = fs.writeFile(/*file, data, options, callback*/) // * escritura de archivos de forma asincrónica
/* 
    * path o file = ruta del archivo, ruta relativa, Donde se escribiran los datos.
    * data = datos que se escribiran en el archivo.     
    * options = opciones de escritura, como la condificacion.
    * callback = Funcion de devolucion, de llamada que recibe err, (cuando se completa la escritura)
*/


let w = fs.writeSync(/*file, data, options*/) // * escritura de archivos de forma sincrona (bloqueante)
/* 
    * path o file = ruta del archivo, ruta relativa, Donde se escribiran los datos.
    * data = datos que se escribiran en el archivo.     
    * options = opciones de escritura, como la condificacion.
*/

let af = fs.appendFile(/* file, data, options, callback */) // * agregar al final contenido al final del archivo de manera asincrónica
/*
    * file = ruta del archivo 
    * data = informacion que se quiere agregar (data).
    * options = opciones de escritura, como la condificacion.
    * callback = funcion de devolucion, de llamada que recibe err, cuando se completa la operacion
*/

let afS = fs.appendFileSync(/* file, data, options*/) // * agregar al final contenido al final del archivo de manera sincrona (bloqueante)
/*
    * file = ruta del archivo 
    * data = informacion que se quiere agregar (data).
    * options = opciones de escritura, como la condificacion.
*/

let rd = fs.readdir(/*path, callback*/) // * lectura de directorios de forma asincrónica 
/*
    * path = ruta del directorio, ruta relativa
    * callback = function de devolucion, que recibe err y files (array de nombres de archivos en el directorio)
*/

let rdS = fs.readdirSync(/*path*/) // * lectura de directorios de forma sincrona (bloqueante)
/*
    * path = ruta del directorio, ruta relativa
*/

let cd = fs.mkdir(/* path, options, callback */) // * Crea un directorio de forma asincrónica
/*
    * path: Ruta del directorio a crear.
    * options: Opciones para la creación del directorio
    * callback: Función de devolución de llamada que recibe err (error) cuando se completa la creación.
 */

let cdS = fs.mkdirSync(/* path, options*/) // * Crea un directorio de forma sincrona (bloqueante)
/*
    * path: Ruta del directorio a crear.
    * options: Opciones para la creación del directorio
 */

let rmd = fs.rmdir(/*path, callback*/) // * Elimina un directorio de forma asincrónica 
/*
    * path: Ruta del directorio a eliminar. 
    * callback: Función de devolución de llamada que recibe err (error) cuando se completa la eliminación.
 */

let rmdS = fs.rmdirSync(/*path*/) // * Elimna un directorio de forma sincrona (bloqueante)
/*
    * path: Ruta del directorio a eliminar. 
*/