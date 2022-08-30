const express = require('express');
const loginValidate = require('./middlewares/loginMiddleware');
const loginController = require('./controllers/loginController');
const validateJWT = require('./middlewares/validateJWT');
const validateUser = require('./middlewares/userCreateValidate');
const userController = require('./controllers/userController');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', loginValidate, loginController); 

app.post(
  '/user',
  validateUser.displayNameLength,
  validateUser.emailFormat,
  validateUser.passwordLength,
  validateUser.existentEmail,
  userController.create,
  );

app.get('/user', validateJWT, userController.get);

app.get('/user/:id', validateJWT, userController.getById); 
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
