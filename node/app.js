/*
    TODO: Express 
    ? Concepto
    * Express es un popular framework de aplicaciones web para Node.js. Proporciona 
    * una capa adicional de abstracción sobre el módulo http incorporado de Node.js, lo 
    * que facilita la creación de aplicaciones web y APIs de manera más eficiente y con 
    * menos código.
*/
/* 
    ? Caracteristica de express
    * Enrutamiento: Express proporciona un enrutador flexible que permite definir rutas 
    * y manejar las solicitudes HTTP correspondientes. Esto permite establecer la lógica 
    * de controladores para diferentes rutas y métodos HTTP.
 
    * Middleware: Express utiliza un modelo de middleware, donde se pueden agregar 
    * funciones intermediarias (middleware) a la cadena de procesamiento de 
    * solicitudes. Esto permite realizar acciones como autenticación, compresión, 
    * registro y manipulación de solicitudes y respuestas antes de que lleguen a su 
    * controlador final.

    * Gestión de vistas: Express facilita el renderizado de vistas HTML utilizando 
    * cualquier motor de plantillas (como EJS, Pug o Handlebars) para generar 
    * contenido dinámico y enviarlo al cliente.

    * Integración con servicios y recursos externos: Express proporciona una forma 
    * sencilla de interactuar con servicios y recursos externos, como bases de datos, 
    * servicios de almacenamiento en la nube y APIs de terceros, a través de bibliotecas 
    * y módulos adicionales.

    * Amplia comunidad y ecosistema: Express es uno de los frameworks más 
    * populares y ampliamente adoptados en la comunidad de Node.js. Como resultado, 
    * cuenta con una gran cantidad de recursos, módulos y complementos 
    * desarrollados por la comunidad que extienden aún más su funcionalidad.
*/

/*
    ? inciar un servidor con Express
*/

import express from "express"; 
// var
let app = express(); 

// middleware
app.use(express.json())

// request 
app.use("/example", (req, res) => {
    res.status(200).send({status: 200, message: "hello world!"})
})

// listener
app.listen(300, () => console.log("listening"))




