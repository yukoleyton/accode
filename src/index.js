const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//
//

//rutas
app.use(require('./routes/index'));
//static files
app.use(express.static(path.join(__dirname, 'public')));
//Escuchando el servidor
app.listen(app.get('port'), () =>{
console.log('Funciona Caunsa', app.get('port'));

});