<?php
   // TODO: Interfaces
   // ? Concepto 
   /* 
      * En la programación orientada a objetos, una interfaz es una estructura que define un conjunto de 
      * métodos que una clase debe implementar. Es un contrato que especifica qué métodos debe 
      * proporcionar una clase sin especificar cómo se implementan esos métodos
   */

    interface Inter {
        public function fundation(); 
    }

    class Dog implements Inter{
        public function __construct() {}

        public function fundation() {
            echo "Fundation. Este"; 
        }
    }

    $animal = new Dog(); 
    $animal->fundation(); 
?>