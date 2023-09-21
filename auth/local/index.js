const { Router } = require('express');
const {
  loginUSerHandler,
  verifyPasswordHandler,
} = require('./local.controller');

const router = Router();
router.post('/login', loginUSerHandler);
router.post('/verify-password', verifyPasswordHandler);

module.exports = router;
