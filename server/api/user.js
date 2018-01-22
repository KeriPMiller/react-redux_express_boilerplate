const router = require('express').Router();
const {
  User,
  Address
} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
      include: [{
        model: Address,
        as: 'addresses'
      }]
    }, {
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'fullname', 'email']
    })
    .then(users => res.json(users));
    .catch(next);
});

router.get('/:userId', (req, res, next) => {
  User.findById(+req.params.userId)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    })
    .catch(next);
});
