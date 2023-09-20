const { Router } = require('express');
//const { UserSchema } = require('./user.schema');

const {
  createUserHandler,
  getUserMeHandler,
  updateUserHandler,
} = require('./user.controller');
const { isAuthenticated } = require('../../auth/auth.services');

const router = Router();

router.post('/', createUserHandler);
router.get('/me', isAuthenticated(), getUserMeHandler);
router.patch('/:id', updateUserHandler);
//router.get('/me', isAuthenticated(), getUserMeHandler);

module.exports = router;
