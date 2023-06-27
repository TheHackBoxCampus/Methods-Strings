<?php
   // TODO: Estructuras repetitivas
   
   /*
      * Las estructuras repetitivas, también conocidas como estructuras de control de bucle, son 
      * herramientas fundamentales en la programación que permiten repetir la ejecución de un bloque de 
      * código varias veces.
   */

   // TODO: Bucle While
   
    /* 
      * permite repetir la ejecución de un bloque de código mientras se cumpla una 
      * condición.
    */

   $number = 1; 

   while($number <= 10) {
        echo $number."\n"; 
        $number++;
   }

    // TODO: Bucle Do While

    /*
      * similar al bucle while, pero garantiza que el bloque de código se ejecuta al 
      * menos una vez, independientemente de si se cumple o no la condición
    */
   $number = 1; 
   echo "\n"; 

    do {
        echo $number."\n";
        $number++;
    }while($number <= 10); 

    // TODO: Bucle For

    /* 
      * Permite repetir la ejecucion de un bloque de codigo un numero fijo de veces,
      * controlando el numero de iteraciones mediante un contador 
    */
    echo "\n";
    for($newNumber = 1; $newNumber <= 10; $newNumber++) {
        echo $newNumber."\n"; 
    } 

    // TODO: For Each

    // * Ciclo repetitivo para arrays que contengan clave-valor o contenido. 

    $peoples = ["enrique", "raul", "marquez"]; 
    echo "\n";

    foreach($peoples as $people) {
        echo $people."\n"; 
    }
?>