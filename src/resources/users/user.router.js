const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
// const { userValidate } = require('../../utils/validation');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const employers = req.body;
  const user =  await usersService.create(employers);
  res.status(201).json(User.toResponse(user));
});

// router.route('/').post(async (req, res) => {
//   const { body } = req;
//   const { error, status, data } = userValidate(body);
//   if (error !== undefined) {
//     res.status(status).json(data);
//   } else {
//     const user = await usersService.createUser(body);
//     res.status(201).json(User.toResponse(body));
//   // }
// });

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
    usersService.updateUser(user, req.body);
    res.json(User.toResponse(user));
  }
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.deleteUser(req.params.id);
  if (user === undefined) {
    res.status(404).json('User not found');
  } else res.status(204).json('The user has been deleted');
});

module.exports = router;
