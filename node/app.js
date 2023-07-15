/*
    TODO: Global 
    ? Concepto
    * En Node.js, no existe un objeto "window" como en el entorno del 
    * navegador. En su lugar, Node.js utiliza el objeto "global" como su objeto global. El 
    * objeto "global" en Node.js proporciona un ámbito global para variables, funciones y 
    * objetos en una aplicación de Node.js. A través del objeto "global", se pueden 
    * definir variables y funciones que estarán disponibles en todos los módulos y 
    * archivos de la aplicación
*/

console.log(global)
// ? Ejemplo de salida

let result = /* json */ `
<ref *1> Object [global] {
    global: [Circular *1],
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Function: structuredClone],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: Performance {
      nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 76.89019998908043,
        nodeStart: 3.7022999823093414,
        v8Start: 8.285099983215332,
        bootstrapComplete: 58.469899982213974,
        environment: 26.08100000023842,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
      },
      timeOrigin: 1689385479687.086
    },
    fetch: [AsyncFunction: fetch]
`
