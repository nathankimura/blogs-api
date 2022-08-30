const categoryService = require('../services/categoryService');

const categoryController = {
  create: async (req, res) => {
    const { name } = req.body;
    const result = await categoryService.create({ name });
    console.log(result);
    res.status(201).json(result);
  },
  get: async (_req, res) => {
    const result = await categoryService.get();
    res.status(200).json(result);
  },
};

module.exports = categoryController;