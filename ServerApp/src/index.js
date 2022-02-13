const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const {
    logErrors, wrapErrors, errorHandler
} = require('./middleware/error.handler');

const { Port } = require('./utils/config');

const app = express();

// Settings
app.set('port', Port);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./routes'));

// Static files
app.use(express.static(path.join(__dirname, '..', '..', 'ClientApp', 'dist')));

// Catch 404
app.use(require('./middleware/notFound.handler'));

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Starting server
app.listen(app.get('port'), () => (
    console.log(`server on port ${app.get('port')}`)
));