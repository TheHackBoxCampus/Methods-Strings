/*
    TODO: Dotenv()
    ? Concepto
    * Las variables de entorno en Node.js son variables específicas del entorno en el 
    * que se ejecuta una aplicación. Son valores que se pueden configurar 
    * externamente al código y se utilizan para almacenar información sensible, 
    * configuraciones personalizadas u otros datos relevantes para la aplicación.
    * En Node.js, las variables de entorno se pueden acceder utilizando el objeto 
    * process.env. Este objeto proporciona acceso a todas las variables de entorno 
    * definidas en el sistema operativo donde se está ejecutando la aplicación.
*/

/*
    ? Caracteristicas

    * Configuración de la aplicación: Puedes utilizar variables de entorno para 
    * almacenar valores de configuración, como credenciales de bases de datos, claves 
    * de API, URL de servicios externos, etc. Esto permite mantener esta información 
    * sensible separada del código fuente y facilita la configuración de la aplicación en 
    * diferentes entornos (desarrollo, producción, pruebas, etc.).
    
    * Parámetros personalizables: Puedes utilizar variables de entorno para permitir la 
    * personalización de ciertos comportamientos de la aplicación. Por ejemplo, podrías 
    * tener una variable de entorno que determine el número de elementos a mostrar 
    * por página en una paginación, o el idioma predeterminado a utilizar.
    
    * Depuración y registro: Las variables de entorno también pueden ser útiles para 
    * habilitar o deshabilitar la depuración o el registro de la aplicación en función de la 
    * configuración del entorno. Esto permite tener un mayor control sobre los mensajes 
    * de registro o habilitar características adicionales de depuración en entornos de 
    * desarrollo o pruebas
*/

/*
    ? uso
    * Instalas la libreria con npm 
    * creas el archivo .env y defines las variables
    * importas los paquetes
    * cargas las variables en el archivo con el metodo @config()
    * utilizas las variables definidas en el archivo .env
*/

// TODO: archivo app.js
// * importar
import dotenv from "dotenv"
// * cargar
dotenv.config();
// * utlizar
let vars = process.env.config(); 


// TODO: archivo .env
/*
    config= {...properties}
*/






