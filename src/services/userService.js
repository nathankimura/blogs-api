const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const userService = {
  create: async ({ displayName, email, password, image }) => {
    await User.create({ displayName, email, password, image });
  },
  tokenGenerator: async (email) => {
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const user = await User.findOne({ where: { email } });
    const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
    return token;
  },
};

module.exports = userService;