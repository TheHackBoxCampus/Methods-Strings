// Objeto "Object" = .fromEntries
const ObjectProperty = () => {
    let fd = new FormData(); 
    fd.set("Text", "Hola");
    return fd; 
}
console.log(ObjectProperty())

/*le permite compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest. 
Está cdiseñado principalmente para enviar datos de formularios, pero se puede usar independientemente 
de los formularios para transmitir datos teleados*/