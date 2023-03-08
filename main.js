let string = "hello world!";

const TypeOfMethods = () => {
    return String.raw`Hi\u000A!`; 
    /*Es una función de plantilla de literales*/
} 

console.log(TypeOfMethods()); 


