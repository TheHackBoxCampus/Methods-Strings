let string = "Hello world!";

const TypeOfMethods = (str,regex) => {
    return str.search(regex); 
    /*El método search() ejecuta una 
    búsqueda de una coincidencia entre 
    una expresión regular y este objeto String.*/
} 

console.log(TypeOfMethods(string, /[^\w\s]/g)); 



