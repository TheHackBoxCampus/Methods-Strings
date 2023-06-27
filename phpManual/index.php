<?php
   // TODO: funciones mas utilizadas en la manipulacion de data
    $arr = [
        "name" => "roberto",
        "age" => 21,
        "address" => "Bucaramanga"
    ];

    array_flip($arr); // * Intercambia las claves con sus valores correspondientes en un array
    array_fill($arr); // * Rellena un array con un valor especificado. 
    array_filter($arr); // * Filtra los elementos de un array utilizando una función de devolución de llamada.
    array_map($arr); // * Aplica una función a cada elemento de un array y devuelve un nuevo array con los resultados. 
    array_reduce($arr); // * Reduce un array a un solo valor aplicando una función de devolución de llamada
    array_key_exists($arr); // * Comprueba si una clave existe en un array
    in_array($arr); // * verifica si tiene valores el array  
    array_rand($arr); //*  llaves aleatorias
    array_unique($arr); // * muestra los valores uniques e ignora a los duplicados
    array_intersect($arr, /* arr adicional */ $arr); // *  Devuelve un array con los valores comunes a todos los arrays dados
    array_diff($arr, /* arr adicional */ $arr); // * Devuelve un array con los valores del primer array que no están presentes en los arrays adicionales
    array_push($arr, "new value"); // * Agrega uno o mas elemento al final del array
    array_revert($arr); // * revierte los valores de un array
    array_shift($arr); // * elimina el primer valor de un array
    array_unshift($arr, "new values"); // * agrega un valor al principio de un array
    array_pop($arr); // * elmina el ultimo valor de un array
    array_sum($arr); // * Devuelve la suma de un array numerico
?>