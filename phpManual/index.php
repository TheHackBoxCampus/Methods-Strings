<?php
    // TODO: Funciones definidas por el usuario 

    /*
        * En programación, las funciones definidas por el usuario son bloques de código que se pueden llamar 
        * y ejecutar en cualquier parte de un programa para realizar una tarea específica
    
    */

    declare(strict_types=1); // * Esta declaración se utiliza para activar la verificación estricta de tipos en un archivo PHP.

    function greet(string $greetName):string {
        return $greetName."\n";
    }

    /*
        * funciones con valor de retorno estricto
    */

    function sum($num, $num2):int {
        return $num + $num2; 
    }

     echo greet("Hola mundo");
     echo sum(3,4);  
?>