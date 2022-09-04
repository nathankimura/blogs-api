const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log(decoded);
    const actualUserId = await User.findOne({ where: { id: decoded.data.id } });
    const { id, email } = actualUserId.dataValues;
    console.log(id, email);

    if (!actualUserId) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token' });
    }
    req.id = id;
    req.email = email;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = validateJWT;
