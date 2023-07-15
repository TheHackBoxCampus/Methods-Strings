/*
    TODO: nanoID
    ? Concepto
    * NanoID es una biblioteca de generación de identificadores únicos y aleatorios en 
    * Node.js. Proporciona una forma sencilla de generar identificadores únicos que 
    * pueden ser utilizados, por ejemplo, como claves primarias en bases de datos, 
    * identificadores de objetos, tokens de autenticación, entre otros casos de uso.
    
    * La biblioteca NanoID está diseñada para ser rápida, compacta y segura, 
    * generando identificadores únicos de forma eficiente. Utiliza una combinación de 
    * caracteres alfanuméricos y se puede configurar para generar identificadores con 
    * diferentes longitudes y utilizando diferentes alfabetos
*/

/*
    ? Caracteristicas
    * Generación de identificadores únicos: NanoID está diseñado específicamente 
    * para generar identificadores únicos de manera eficiente. Utiliza algoritmos 
    * criptográficamente seguros para garantizar que los identificadores generados sean 
    * altamente improbables de repetirse.
    
    * Tamaño configurable: Puedes especificar la longitud deseada del identificador 
    * generado mediante el parámetro de longitud de la función nanoid(). Esto te 
    * permite ajustar el tamaño del identificador según tus necesidades específicas.
    
    * Alfabeto personalizable: NanoID utiliza un conjunto de caracteres alfanuméricos
    * por defecto (a-z, A-Z y 0-9). Sin embargo, también puedes personalizar el alfabeto 
    * utilizado para generar los identificadores. Esto te permite, por ejemplo, utilizar solo 
    * caracteres en minúscula o añadir caracteres adicionales según tus preferencias.
    
    * Rendimiento eficiente: NanoID está diseñado para ser rápido y eficiente en 
    * términos de rendimiento. Los algoritmos utilizados se optimizan para generar 
    * identificadores únicos de manera rápida, lo que es especialmente importante 
    * cuando se necesitan generar grandes cantidades de identificadores en poco 
    * tiempo.
    
    * Tamaño compacto: La biblioteca NanoID es relativamente pequeña y liviana, lo 
    * que significa que no añade una carga significativa a tus aplicaciones Node.js. Esto 
    * es especialmente beneficioso si estás trabajando en entornos con restricciones de 
    * recursos
*/

import { nanoid } from "nanoid"; 

/*
    ? genera un hast de 21 caracteres
    * @var {nanoid(10)} * su deseas mas o menos}
*/

const id = nanoid(); // id aleatoria






