<?php
   // TODO: PDO
   // ? Concepto
   /*
      * PDO (PHP Data Objects) es una interfaz de abstracción de bases de datos en PHP. Proporciona un 
      * conjunto de clases y métodos para preparar y ejecutar consultas SQL de una manera segura y 
      * eficiente. PDO no es una biblioteca de base de datos en sí, pero proporciona una forma unificada de 
      * trabajar con diferentes tipos de bases de datos.
      * Una de las principales ventajas de PDO es su capacidad para trabajar con parámetros vinculados y 
      * consultas preparadas. Esto puede ayudar a proteger tu aplicación contra ataques de inyección de 
      * SQL.
      
      * El primer argumento de la clase PDO es el DSN, DataSourceName, en el cual se han de especificar el 
      * tipo de base de datos.
   */
  
   // Ejemplo de conexion con PDO

   class DB {
      protected $host = "localhost";
      private $user = "root";
      private $password = "123"; 
      protected $dbname = "campus";
      protected $pdox; 

      public function __construct() {
         // TODO: Credenciales 
         $this->host = $hots;
         $this->user = $user;
         $this->password = $password; 
         $this->dbname = $dbname;         
      }

      public function connect() {
         try {
            // * Conección mediante PDO 
            $dsn = "mysql:host=$this->host;dbname=$this->dbname"; 
            $pdox = new PDO($dsn, $this->user, $this->password); 
            $pdox->setAttribute(PDO::ATTRR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdox;
            /*
               * Excepciones 
               * PDO::ERRMODE_SILENT -> Si se deja así habrá que comprobar los errores de 
               * forma parecida a como se hace con mysqli.
               
               * PDO::ERRMODE_WARNING -> Además de establecer el código de error, PDO emitirá un mensaje 
               * E_WARNING. Modo empleado para depurar o hacer pruebas para ver errores sin interrumpir el 
               * flujo de la aplicación
               
               * PDO::ERRMODE_EXCEPTION -> Además de establecer el código de error, PDO lanzará una 
               * excepción PDOException y establecerá sus propiedades para luego poder reflejar el error y su 
               * información. Este modo se emplea en la mayoría de situaciones, ya que permite manejar los 
               * errores y a la vez esconder datos que podrían ayudar a alguien a atacar tu aplicación.
            
               */
         }catch (\PDOException $err) {
            echo $err->getMessage(); 
         }
      }
   }

?>