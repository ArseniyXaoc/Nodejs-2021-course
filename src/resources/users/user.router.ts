import { Router } from 'express';
import { User } from './user.model';
import usersService from './user.service';

const router = Router();
router.route('/').get(async (_req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  } catch (error) {
    next(error);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const employers = req.body;
    const user = await usersService.create(employers);
    res.status(201).json(User.toResponse(user));
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await usersService.getById(req.params.id);
    if (user) {
      res.json(User.toResponse(user));
    } else res.status(404).json('User not found');
  } catch (error) {
    next(error);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const user = await usersService.getById(req.params.id);
    if (user) {
      await usersService.update(user.id, req.body);
      res.json(User.toResponse(user));
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const user = await usersService.deleteId(req.params.id);
    if (user === undefined) {
      res.status(404).json('User not found');
    } else res.status(204).json('The user has been deleted');
  } catch (error) {
    next(error);
  }
});

export default router;
