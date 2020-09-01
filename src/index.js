const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middelwares
app.use(morgan('dev'));
app.use(express.json()); // Para que mi server pueda interpretar JSON
app.use(express.urlencoded({extended: false})); // *  *  formularios 

// Routes
app.use(require('./routes/index'));
app.use('/api/movies/', require('./routes/movies'));


// Start Server
app.listen(app.get('port'), () => { 
    console.log(`Server en el puerto ${app.get('port')}`);
});