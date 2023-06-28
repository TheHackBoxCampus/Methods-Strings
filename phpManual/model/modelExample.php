<?php
    /*
        TODO: Registro de datos 
        * La clase PDOStatement es la que trata las sentencias SQL. Una instancia de PDOStatement se crea 
        * cuando se llama a PDO->prepare(), y con ese objeto creado se llama a métodos como bindParam() 
        * para pasar valores o execute() para ejecutar sentencias. PDO facilita el uso de sentencias preparadas 
        * en PHP, que mejoran el rendimiento y la seguridad de la aplicación. Cuando se obtienen, insertan o 
        * actualizan datos, el esquema es: PREPARE -> [BIND] -> EXECUTE. Se pueden indicar los parámetros en 
        * la sentencia con un interrogante "?" o mediante un nombre específico.
    */
    
    require_once "phpManual/index.php"; 

    class example extends DB {
        public function __construct() {
            parent::__construct(); 
        }

        public function getData() {
            try {
                $query = "SELECT * FROM nameTable";
                $stamento = $this->connect()->prepare($query);
                $stamento->execute(); 
                $res = $stamento->fetchAll(PDO::FETCH_ASSOC); 
                if(empty($res)){
                    echo "no hay registros\n";
                }
                return $res;
            }catch (\PDOException $err) {
                echo $err->getMessage(); 
            }
        }
    }

?>