const { User } = require('../database/models');

const validateUser = {
displayNameLength: (req, _res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    const err = new Error();
    err.message = '"displayName" length must be at least 8 characters long';
    err.status = 400;
    throw err;
  }
  next();
},

emailFormat: (req, _res, next) => {
  const { email } = req.body;
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
  if (!regexEmail.test(email)) {
    const err = new Error();
    err.message = '"email" must be a valid email';
    err.status = 400;
    throw err;
  }
  next();
},

passwordLength: (req, _res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    const err = new Error();
    err.message = '"password" length must be at least 6 characters long';
    err.status = 400;
    throw err;
  }
  next();
},

existentEmail: async (req, _res, next) => {
  const { email } = req.body;
  const userMail = await User.findOne({ where: { email } });
  if (userMail) {
    const err = new Error();
    err.message = 'User already registered';
    err.status = 409;
    throw err;
  }
  next();
},
};

module.exports = validateUser;