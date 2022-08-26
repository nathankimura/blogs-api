const { User } = require('../database/models');

const loginValidate = async (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const err = new Error();
    err.message = 'Some required fields are missing';
    err.status = 400;
    throw err;
  }
  
  const userMail = await User.findOne({ where: { email } });
  console.log(userMail);

  if (!userMail || userMail.password !== password) {
    const err = new Error();
    err.message = 'Invalid fields';
    err.status = 400;
    throw err;
  }
  next();
};

module.exports = loginValidate;