const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.tokenGenerator(email);
    await userService.create({ displayName, email, password, image });
//    console.log(result);
    res.status(201).json({ token: result });
  },

  get: async (_req, res) => {
    const result = await userService.get();
//    console.log(result);
    res.status(200).json(result);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const result = await userService.getById(id);
    if (!result) {
    const err = new Error();
    err.message = 'User does not exist';
    err.status = 404;
    throw err;
    }
    res.status(200).json(result);
  },

  delete: async (req, res) => {
    await userService.delete(req.id);
    res.status(204).end();
  },
};

module.exports = userController;