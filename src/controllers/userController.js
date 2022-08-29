const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.tokenGenerator(email);
    await userService.create({ displayName, email, password, image });
    console.log(result);
    res.status(201).json({ token: result });
  },
};

module.exports = userController;