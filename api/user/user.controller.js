const { createUser } = require('./user.service');

async function createUserHandler(req, res) {
  try {
    const { name } = req.body;
    console.log('username ', name);
    /*const matchUserEmail = await ValidateUserEmail(email);
    if (matchUserEmail) {
      console.log('if ');
      return res.status(403).json({
        message: 'used email',
      });
    }*/
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getUserMeHandler(req, res) {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.log(
      '🚀 ~ file: user.controller.js ~ line 142 ~ getUserMeHandler ~ error',
      error,
    );
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createUserHandler,
  getUserMeHandler,
};
