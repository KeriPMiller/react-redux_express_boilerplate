const router = require('express').Router();
const {
  Address
} = require('../db/models');
module.exports = router;

router.get('/', ( req, res, next ) {
  Address.findAll()
  .then(addresses => res.json(addresses));
});
