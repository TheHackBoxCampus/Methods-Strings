<?php
    // ejemplo de array asociativo
    $arr = [ 
        "name" => "miller",
        "age" => 18,
        "status" => "Good",
        "school" => [
            "name" => "campus",
            "address" => "Zona franca"
            ]
        ];
        

    // algunas funciones de arreglos
    $arr2 = ["celular", "ip", "manzana"]; 
    
    // in_array - Buscar elementos de un arreglo
    var_dump(in_array("celular", $arr2));   
    
    // ordenar elementos de un arreglo
    $numbers = [1,2,3,4,5,6,7,9];
    sort($numbers); // de menor a mayor
    rsort($numbers); // de mayor a menor 

   asort($arr); // Ordena por valores (orden alfabetico)
   arsort($arr); // Ordena por valor (Z primero)
   ksort($arr); // Ordena por llaves (orden alfabetico)
   krsort($arr); // Ordena por llaves (Z primero) 
   
?>