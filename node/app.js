/*
    TODO: Express Router()
    ? Concepto
    * En Express, un router es una forma de organizar y gestionar las rutas de una 
    * aplicación web de manera modular. Los routers permiten agrupar rutas 
    * relacionadas y sus respectivos controladores en un lugar específico.
    * Un router en Express es un objeto que proporciona métodos para definir rutas y 
    * gestionar las solicitudes HTTP asociadas a esas rutas. Puedes utilizar varios 
    * routers en una aplicación Express para dividir y organizar las rutas en diferentes 
    * módulos o archivos.
*/

/*
    ? inciar un servidor con Express
*/
// TODO: Archivo app.js
import express from "express"; 
import router from "./router.js";

// var
let app = express(); 

// middleware
app.use(express.json())

// request 
app.use("/example", router);

// listener
app.listen(300, () => console.log("listening"))

/*
    TODO: Archivo router.js

    ? import { Router } from "express";

    ? let router = Router(); 
    
    ? router.get("/ruta1", (req, res) => {
    ?     res.send("hello world")
    ? })

    ? export default router; 
*/



