const postService = require('../services/postService');

const postController = {
  get: async (_req, res) => {
    const result = await postService.get();
    res.status(200).json(result);
  },

  create: async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const userId = req.id;
    const result = await postService.create({ title, content, categoryIds, userId });
    res.status(201).json(result);
  },
};

module.exports = postController;