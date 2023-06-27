# Operadores Logicos 

-- ? Concepto
-- * Los operadores lógicos son palabras clave utilizadas en SQL para filtrar los resultados de una 
-- * consulta según condiciones lógicas específicas. Los operadores lógicos básicos en SQL son:

AND -- permite que se cumplan multiples condiciones. Si son 2, las 2 deben ser true, para que muestre los resultados 
OR -- Este operador tambien permite que se cumplan multiples condiciones. Sin embargo si tienes 2 condiciones, 
   -- solo 1 se necesita que se true para que muestre resultados
NOT -- Este operadores niega la condición que sigue. Si tienes una condicion, muestra resultados
    -- solo si esa condicion no es verdadera


# Operadores de Comparación 

-- ? Concepto 
-- * Los operadores de comparación en SQL se utilizan para comparar dos valores. Aquí están los más
-- * comunes

= -- (Igual a) Verifica si 2 valores son iguales.
<> o != -- (No es igual) Verifica si 2 valores NO son iguales
> -- (Mayor que) Verifica si un valor es mayor que otro
< -- (Menor que) Verifica si un valor es menor que otro
>= -- (Mayor o igual) Verifica si un valor es mayor o igual que otro
<= -- (Menor o igual) Verifica si un valor es menor o igual que otro 


# Operador LIKE
LIKE -- se utiliza en la cláusula WHERE para buscar patrones especificos 

# Comodines 
% -- Representa 0 o varios caracteres
_ -- Representa cada caracter


# Operador Between 
BETWEEN -- se utiliza para seleccionar valores dentro de un rango determinado. 
        -- Este rango puede ser numérico, de fecha o de texto.

