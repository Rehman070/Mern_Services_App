const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller');

const signupSchema = require('../validators/auth-validadtor')
const validate = require('../middleware/validate-middleware')

router.route('/').get(controller.home);
router.route('/signup').post(validate(signupSchema),controller.signup);
router.route('/signin').post(controller.signin);

module.exports = router;
