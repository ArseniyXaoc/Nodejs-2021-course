const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const employers = req.body;
  const user =  await usersService.create(employers);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  if (user === undefined) {
    res.status(404).json('User not found');
  } else res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  if (user === undefined) {
    res.status(404).send('User not found');
  } else {
    await usersService.update(user, req.body);
    res.json(User.toResponse(user));
  }
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteId(req.params.id);
  if (user === undefined) {
    res.status(404).json('User not found');
  } else res.status(204).json('The user has been deleted');
});

module.exports = router;
