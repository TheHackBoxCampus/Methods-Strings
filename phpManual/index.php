<?php
   // TODO: JSON ENCODE
   /*
      * La función json_encode() en PHP se utiliza para convertir una estructura de datos en PHP en una 
      * cadena JSON.
   */

   $people = [
     "people1" => "javier",
     "agePeople1" => 21,
     "people2" => "Roberto",
     "agePeople2" => 19
   ];

   $struct = json_encode($people); 
   var_dump($struct); 

   // TODO: JSON DECODE

    /* 
        * La función json_decode() en PHP se utiliza para convertir una cadena JSON en una estructura de 
        * datos de PHP. Esta función toma una cadena JSON y la convierte en un objeto, un array asociativo o 
        * un valor escalar según corresponda.
    */   
   $struct2 = json_decode($struct); 
   var_dump($struct2); 
?>