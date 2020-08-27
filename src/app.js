/* REQUERIR PATH PARA RUTAS DE LA CARPETA VIEWS */
const path = require('path');
/* REQUERIR EL EXPRESS */
const express = require('express');
/* REQUERIR MORGAN */
const morgan = require('morgan');
/* REQUERIR mongoose */
const mongoose = require('mongoose');

/* INICIALIZAR EXPRESS */
const app = express();

mongoose.connect('mongodb+srv://georisblanco:R3imKOiSjL5uhivJ@jagers.fiy9q.mongodb.net/apartamento?retryWrites=true&w=majority')

// CONECTANDO LA BASE DE DATOS
//mongoose.connect('mongodb://localhost/apartamento')
/* PROMESAS PARA COMPROBAR EL ESTADO DE LA CONEXION */
.then(mongoose => console.log('BASE DE DATOS CONECTADA CORRECTAMENTE')) //MENSAJE DE CONECTADA
.catch(err => console.log(err)); // MENSAJE DE ERROR 

//IMPORT ROUTES
const indexRoutes = require('./routes/index');

//CONFIGURAR SERVIDOR
app.set('port', process.env.PORT || 2000)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

/* ROUTES */
app.use('/', indexRoutes);

/* PUERTO POR DONDE VA A ESCUCHAR 4000  */
app.listen(app.get('port'), () =>{
/*  MENSAJE POR CONSOLA */
console.log(`Server on port ${app.get('port')}`)
});















