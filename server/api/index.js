const router = require('express').Router();
module.exports = router;

// unify the model api routes
router.use('/user', require('./user'));
router.use('/address', require('./address'));

// error handling
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
