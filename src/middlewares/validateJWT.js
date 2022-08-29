const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res.status(401).json({ error: 'Token não encontrado' });
    }
    const decoded = jwt.verify(token, JWT_SECRET);

    const email = await User.findOne({ where: { email: decoded.data.email } });

    if (!email) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token' });
    }
    req.email = email;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = validateJWT;
