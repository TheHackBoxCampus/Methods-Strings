# Comandos DQL 

-- ? Concepto
-- * Los comandos DQL (Data Query Language) en bases de datos se utilizan para recuperar y consultar 
-- * datos de una base de datos. Estos comandos permiten realizar consultas y obtener información 
-- * específica de las tablas. Los comandos DQL más comunes so

SELECT -- Recupera los datos de una o varias tablas de la base de datos, permite especificar columnas, tablas, condiciones
       -- el resultado es un conjunto de filas que coinciden con los criterios.  
FROM   -- La cláusula FROM se utilza en conjunto del comando SELECT para especificar las tablas de donde
       -- se desea recuperar la información
WHERE  -- Para filtrar registros que se desean recuperar. Permite establecer condiciones. 
ORDER BY -- Ordena los resultados de una consulta SELECT en funcion de una o varias columnas
         -- el ordenamiento puede ser tanto ASCENDENTE (ASC) como DESCENDENTE (DESC) 
GROUP BY -- Agrupa filas de una consulta SELECT en conjuntos basados en los valores de una o varias columnas. 
         -- Se utiliza en conjunto con las funciones de agregacion (SUM), (COUNT), (AVG)
HAVING   -- Se utiliza en conjunto con GROUP BY ya que trabaja con grupos, para filtrar resultados basados en funciones de agragación 
