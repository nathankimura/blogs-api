require('dotenv').config();
require('express-async-errors');

const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use((err, _req, res, _next) => {
  const { status, message } = err;
  res.status(status).json({ message });
});

app.listen(port, () => console.log('ouvindo porta', port));
