<?php
   // TODO: Estructuras condicionales
   /*
    * Las estructuras condicionales son una estructura de control de flujo en programación que permite que 
    * el programa tome decisiones basadas en si se cumple o no una condición
   */

    // TODO: IF ElSE

    // * Aqui las estructuras manejan los operadores logicos - comparacion - bits 

    $number = 10; 

    if($number < 10) {
        echo $number." es menor que 10"; 
    }else {
        echo $number." es mayor o igual a 10";
    }

    // TODO: SWITCH 

    /*
        * En PHP, el "switch" es una estructura de control que permite ejecutar diferentes bloques de código 
        * dependiendo del valor de una variable
    */

    switch($number) {
        case 9:
            echo $number." es menor que 10";  
            break; 
        case 10: 
            echo $number." es mayor o igual a 10";
            break;
        default: 
            echo "ninguna de las anteriores"; 
    }
    

?>