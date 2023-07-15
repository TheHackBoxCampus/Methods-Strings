/*
    TODO: Process 
    ? Concepto
    * En Node.js, el objeto process es un objeto global que proporciona información y 
    * control sobre el proceso actual en ejecución. Es una instancia de la clase 
    * EventEmitter, lo que significa que puede emitir y escuchar eventos
*/

process.exit() // * terminar el proceso
process.env // * variables de entorno | sistema

process.stdin 
process.stdout  
process.stderr 

/*   
* Estos objetos permiten la interacción con la entrada estándar (stdin), 
* la salida estándar (stdout) y la salida 
* de error estándar (stderr) respectivamente
*/

process.on(() => {
     return true
})
/*  
    * Un método para registrar devoluciones de llamada 
    * para manejar eventos del proceso. Puedes utilizar este método para capturar 
    * eventos como la salida del proceso
*/