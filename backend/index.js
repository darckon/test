const express = require('express');
const morgan  = require('morgan');
const app     = express();
const { mysql } = require('./database');

//Settings
app.set('port', 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users.routes'));

app.listen(app.get('port'), () => {
    console.log('Server funcionando en puerto ' + app.get('port'));
});