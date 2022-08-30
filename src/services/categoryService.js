const { Category } = require('../database/models');

const categoryService = {
  create: async ({ name }) => {
    if (!name) {
      const err = new Error();
      err.message = '"name" is required';
      err.status = 400;
      throw err;
    }
    const result = await Category.create({ name });
    return result;
  },
  get: async () => {
    const result = await Category.findAll();
    return result;
  },
};

module.exports = categoryService;