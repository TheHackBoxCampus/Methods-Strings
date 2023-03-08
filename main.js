let string = "\u0041\u006d\u00e9\u006c\u0069\u0065";

const TypeOfMethods = (str) => {
    return str.normalize("NFC"); 
    /*devuelve la forma de normalización 
    Unicode de la cadena..*/
} 

console.log(TypeOfMethods(string)); 



