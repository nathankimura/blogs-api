const { BlogPost, User, Category, postCategory, sequelize } = require('../database/models');

const postService = {
  get: async () => {
    const result = await BlogPost.findAll({ 
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
      }, 
        { 
          model: Category,
          as: 'categories',
          through: { attributes: [] } },
      ],
      attributes: { exclude: ['UserId'],
    },
    });
    return result;
  },

  create: async ({ title, content, categoryIds, userId }) => {
    const transactionResult = await sequelize.transaction(async (transaction) => {
      const { id } = await BlogPost.create({ title, content, userId }, { transaction });

      const postCategoryArray = categoryIds.map((number) => ({ postId: id, categoryId: number }));
      
      const result = await postCategory.bulkCreate(
        postCategoryArray,
        { transaction },
      );
      return result;
    });
    return transactionResult;
},
};

module.exports = postService;
