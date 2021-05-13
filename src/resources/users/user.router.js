const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const employers = req.body;
  const user =  await usersService.createUser(employers);
  res.json(user);
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  if(user === undefined){
    res.status(404).send('User not found');
  } else res.json(User.toResponse(user));
});

module.exports = router;
