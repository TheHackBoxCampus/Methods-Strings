# tipos de datos enteros

# INT -> Enteros 
# BIGINT -> Enteros grandes 
# SMALINT -> Enteros pequeños 
# MEDIUMINT -> Enteros medianos

# La diferencia esta en el tamaño de datos que pueden entran en cada campo

-- -----------------------------------------------------------------------
# tipos de datos de coma flotante

# FLOAT -> Contiene un numero en coma flotante de precisión sencilla.
# DOUBLE -> Contiene un numero en coma flotante de precisión doble. La diferencia con FLOAT es el tamaño
# DECIMAL -> Se usan para guardar valores en los que la precisión debe ser exacta 

-- -----------------------------------------------------------------------

# tipos de datos de tipo caracter 

# CHAR -> Valores validos de 0 a 255, Cadena de caracteres de longitud constante
# VARCHAR -> Misma longitud de valores validos, pero la cadena es variable, puede cambiar
# BLOB -> Longitud maxima de 65.535 caracteres. Valores binarios 0 - 1
# TEXT -> Longitud maxima de 65.535 caracteres. Sirve para almacenar texto plano sin formato. Es keySensity
# TINYBLOB \ TINYTEXT -> Longitud maxima de 255 caracteres, la diferencia esta en el espacio 
# MEDIUMBLOB \ MEDIUMTEXT -> Longitud maxima de 16.777.215 caracteres. 
# LONGBLOG \ LONGTEXT -> Longitud maxima de 4.294.967.298 caracteres 

# tipos de dato fecha 

# DATE -> Valido para almacenar una fecha con año | mes | dia: rango entre '1000-01-01' y '9999-12-31'
# DATETIME -> Almacena una fecha y una hora : rango entre '1000-01-01 00:00:00' y '9999-12-31 23:59:59' 
# TIME -> Una hora: el rango esta entre '-839:59:59' y '9999-12-31 23:59:59'
# TIMESTAM Almacena una fecha y hora UTC: con rango entre '1970-01-01 00:00:00' y algun momento del año 2037


# Modificadores o constraints

# AUTO_INCREMENT -> El valor se incrementa automaticamente en cada registro, una unidad.
# DEFAULT -> Coloca un valor por defecto 
# NOT NULL -> Impide que el campo sea nulo
# PRIMARY KEY -> Hace que el campo se considere llave primaria
# UNIQUE -> Datos que son unicos es decir no se repiten 
# FOREING KEY -> Hace que el campo se considere llaves foranea

