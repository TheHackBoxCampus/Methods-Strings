# Comandos DDL 

-- ? Concepto
-- * Los comandos DDL (Data Definition Language) en SQL se utilizan para definir, modificar y eliminar la 
-- * estructura de la base de datos. Estos comandos permiten crear tablas, definir restricciones, modificar 
-- * la estructura de las tablas existentes y eliminar objetos de la base de datos


-- ! Sintaxis de los diferentes Comandos 

SHOW DATABASE; -- Muestra las bases de datos que existen actualmente
CREATE DATABASE; -- Te permite crear una base de datos
DROP DATABASE; -- Te permite elminar una base de datos 
USE; -- Te permite usar o seleccionar una base de datos para administrar su contenido. 
CREATE TABLE; -- Te permite crear tablas
SHOW TABLES; -- Te permite ver las diferentes tablas de la tabla seleccionada
DESCRIBE; -- Visualizar la estructura de una tabla creada en la BD 
ALTER TABLE; -- Modificar la estructura de una tabla existente en la base de datos
ALTER TABLE nameTable ADD ; -- Añadir columnas a la tabla
ALTER TABLE nameTable DROP COLUMN ; -- Eliminar columnas de la tabla 
ALTER TABLE nameTable RENAME ; -- Renombrar columna de la tabla 
ALTER TABLE nameTable MODIFY COLUMN ; -- Modificar el tipo de dato de la columna de la tabla 

# Constraints

-- ? Concepto 
-- * En MySQL, los constraints (restricciones) son reglas que se aplican a las columnas de una tabla para 
-- * mantener la integridad de los datos y asegurar que se cumplan ciertas condiciones. Estas restricciones 
-- * definen reglas y limitaciones en los valores que se pueden insertar, actualizar o eliminar en una tabla. 
-- * A continuación, se mencionan los tipos de constraints más comunes en MySQL:

PRIMARY KEY -- Especifica al campo para que sea una llave primaria -- Datos unicos 
FOREIGN KEY -- Especifica al campo para que sea una llave foranea -- La relacion entre 2 tablas
UNIQUE -- Valores unicos y no repetidos -- de la columna
NOT NULL -- Valores diferentes a nulo 
CHECK --Valores especificos a una columna, Solo se permite ejecutar insert o update si se cumple la condicion


# Asignar llaves primarias a una tabla con ALTER

ALTER TABLE nameTable ADD CONSTRAINT PK_table PRIMARY KEY (ID)

