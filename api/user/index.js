const { Router } = require('express');
//const { UserSchema } = require('./user.schema');

const {
  createUserHandler,
  getUserMeHandler,
  updateUserHandler,
  updatePasswordHandler,
} = require('./user.controller');
const { isAuthenticated } = require('../../auth/auth.services');

const router = Router();

router.post('/', createUserHandler);
router.get('/me', isAuthenticated(), getUserMeHandler);
router.put('/:id', updateUserHandler);
router.put('/password/:id', updatePasswordHandler);
//router.get('/me', isAuthenticated(), getUserMeHandler);

module.exports = router;
