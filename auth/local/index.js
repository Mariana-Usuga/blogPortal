const { Router } = require('express');
const { loginUSerHandler } = require('./local.controller');

const router = Router();
router.post('/login', loginUSerHandler);

module.exports = router;
