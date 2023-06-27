<?php
   // TODO: Clases Abstractas 
   // ? Concepto 
   /* 
       * En PHP, una clase abstracta es una clase que no se puede instanciar directamente, sino que sirve 
       * como una plantilla o base para otras clases. Se utiliza para definir la estructura común y los métodos 
       * que deben implementar las clases hijas.
   */

    abstract class Animal {
        abstract public function greet(); 
    }

    class Dog extends Animal {
        public function __construct() {}

        public function greet() {
            echo "Guauuu!"; 
        }
    }

    $animal = new Dog(); 
    $animal->greet(); 
?>