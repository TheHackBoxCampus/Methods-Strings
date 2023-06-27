<?php
   // TODO: Autoload
   // ? Concepto 
   /* 
      * En PHP, el autoloading (carga automática) es una técnica que permite cargar automáticamente las 
      * clases cuando son necesarias, sin tener que incluir manualmente los archivos de clase en cada punto 
      * del código. Esto facilita el desarrollo y el mantenimiento del código, ya que no es necesario 
      * preocuparse por incluir los archivos de clase de forma explícita
   */

    function autoload($FILE) {
        return __DIR__."/class/".$FILE."php"; 
    }

    /*
        ? Se basa en 
        * El autoloading en PHP se basa en la función spl_autoload_register(), que permite registrar una o 
        * varias funciones de autoload. Estas funciones se ejecutan automáticamente cuando se intenta 
        * utilizar una clase que aún no ha sido cargada.
    */

    spl_autoload_register("autoload"); 
?>