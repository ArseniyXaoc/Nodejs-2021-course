import { Router } from 'express';
import { getRepository, getConnection } from 'typeorm';
import { User } from '../../entity/User';
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
    const savedUser = await getRepository(User).save(req.body);
    // const employers = req.body;
    // const user = await usersService.create(employers);
    res.status(201).json(User.toResponse(savedUser));
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    if(user)
    res.json(User.toResponse(user));
    else res.status(404).json('User not found');
    // const user = await usersService.getById(req.params.id);
    // if (user) {
    //   res.json(User.toResponse(user));
    // } else res.status(404).json('User not found');
  } catch (error) {
    next(error);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const user = await getRepository(User).findOne(req.params.id);
         console.log(req.params.id);
         console.log(user);
    // const userRepository = getRepository(User);
    // const user = await userRepository.update(req.params.id, {name: "123"});
    // if(user)
    // res.json('The user has been updated.');
    // else res.status(404).json('User not found');
    const {login, name} = req.body
    await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ login, name })
    .where("id = :id", { id: req.params.id })
    .execute();
    const user2 = await getRepository(User).findOne(req.params.id)
        console.log(user2);

    
    // const user = await usersService.getById(req.params.id);
    // if (user) {
    //   await usersService.update(user.id, req.body);
       res.json(user);
    // } else {
    //   res.status(404).send('User not found');
    // }
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
