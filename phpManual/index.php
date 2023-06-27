<?php
   // TODO: Namespace
   // ? Concepto 
   /* 
    * En PHP, la palabra clave use se utiliza en la definición de espacios de nombres (namespace) para 
    * importar clases, funciones y constantes desde otros espacios de nombres.
    
    * Cuando se utiliza use en la definición de un espacio de nombres, se está especificando una ruta corta 
    * (alias) para acceder a un elemento específico de otro espacio de nombres. Por ejemplo, si se tiene 
    * una clase MiClase definida en el espacio de nombres MiEspacioDeNombres y se quiere utilizar esa 
    * clase en otro espacio de nombres
   
 */

    namespace App; 

    class Animals {
        public static function getInfo() {
            echo "info"; 
        } 
    }

     /*
        TODO: Desde otro fichero .PHP

        ! Puedes importar la clase animals con el abreviado

        * use App\Animals; 

        ! utilizar metodos y propiedades que tenga desde otro fichero
        ! Siempre teniendo en cuenta que el autoload tiene que esta funcional.
     */


?>