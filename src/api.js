const express = require('express');
const loginValidate = require('./middlewares/loginMiddleware');
const loginController = require('./controllers/loginController');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', loginValidate, loginController);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
