<?php
   // TODO: POO. Programacion orientada a objetos 
   // ? Concepto 
   /* 
       * La programación orientada a objetos (POO) es un paradigma de programación que se basa en el 
       * concepto de "objetos". Los objetos son entidades que representan conceptos del mundo real y que 
       * pueden tener propiedades (atributos) y realizar acciones (métodos).
   */

    // Conceptos importantes sobre POO

    /*
    *  Clase: Es una plantilla o definición que describe las características y comportamientos de los 
    * objetos que se pueden crear a partir de ella.
    
    *  Objeto: Es una instancia de una clase. Representa un individuo o entidad específica y tiene 
    * sus propias propiedades y comportamientos.
    
    *  Atributos: Son las propiedades o características de un objeto. Definen el estado de un objeto 
    * y se representan mediante variables en la clase.
    
    *  Métodos: Son las acciones o comportamientos que un objeto puede realizar. Representan las 
    * operaciones que pueden realizarse con un objeto y se definen como funciones en la clase.
    
    *  Encapsulación: Es el principio que establece que los atributos y métodos relacionados deben 
    * agruparse en una clase para ocultar los detalles internos y exponer solo una interfaz pública. 
    * Esto se logra mediante la especificación de niveles de acceso (público, privado, protegido) 
    * para los atributos y métodos.
    
    *  Herencia: Es un mecanismo que permite crear nuevas clases basadas en clases existentes. La 
    * clase que se utiliza como base se denomina "clase padre" o "superclase", y la clase que se 
    * deriva se llama "clase hija" o "subclase". La herencia permite la reutilización de código y la 
    * creación de jerarquías de clases.
    
    *  Polimorfismo: Es la capacidad de un objeto de tomar diferentes formas o comportarse de 
    * diferentes maneras según el contexto. Permite utilizar una interfaz común para objetos de 
    * diferentes clases y proporciona flexibilidad y extensibilidad en el diseño de programas.
*/

class Animals {
    private $fundation; // TODO: Propiedad
    /*
        TODO: Modificadores de acceso 

         ? Concepto 
        * Los modificadores de acceso son palabras clave utilizadas en la programación orientada a objetos 
        * para controlar la visibilidad y el acceso a los miembros (atributos y métodos) de una clase. Estos 
        * modificadores permiten establecer qué partes del código pueden acceder y modificar dichos 
        * miembros.

        ? Tipos
        *  public: Los miembros declarados como public son accesibles desde cualquier lugar, ya sea 
        * desde dentro de la clase, desde las clases heredadas o desde fuera de la clase. Son visibles 
        * para todos.
        
        *  private: Los miembros declarados como private solo son accesibles desde dentro de la 
        * misma clase en la que se definen. No pueden ser accedidos desde fuera de la clase, ni 
        * siquiera por las clases heredadas.
        
        *  protected: Los miembros declarados como protected son accesibles desde dentro de la 
        * misma clase y desde las clases heredadas (subclases). Sin embargo, no pueden ser accedidos 
        * desde fuera de la clase directamente
    */


    public function __construct(string $name, string $age) {
        $this->name = $name;
        $this->age = $age;
    }

    function getName() { // TODO: Metodo
        return $this->name; 
    }    
}

$inst = new Animals("zeus", 12); // TODO: Objeto -> Instancia

?>