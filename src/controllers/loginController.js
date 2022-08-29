const userService = require('../services/userService');

const loginController = async (req, res) => {
    const { email } = req.body;
    const token = await userService.tokenGenerator(email);
    res.status(200).json({ token });
};

module.exports = loginController;