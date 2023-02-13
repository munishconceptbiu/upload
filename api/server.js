require('rootpath')();
ROOT_FOLDER = __dirname;
const path = require('path');

const express = require('express');
var XLSX = require('xlsx')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('_middleware/error-handler');
// app.use(require('express-formidable')());

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/qualitative', express.static(`${__dirname}/public`));
// api routes
app.use('/users', require('./users/user.router'));
app.use('/artical', require('./artical/artical.router'));

app.use('/dataprocess', require('./dataprocess/dataprocess.router'));
app.use('/editions', require('./editions/edition.router'));
app.use('/keywords', require('./keywords/keyword.router'));
app.use('/themes', require('./themes/themes.router'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4001;
app.listen(port, () => console.log('Server listening on port ' + port));