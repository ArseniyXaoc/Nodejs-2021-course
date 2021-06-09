import { Router, NextFunction } from 'express';
import boardService from './boards.service';

const router = Router();
router.route('/').get(async (_req, res, next) => {
  try {
    const boards = await boardService.getAll();
    res.json(boards);
  } catch (error) {
    next(error);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const { body } = req;
    const board = await boardService.create(body);
    res.status(201).json(board);
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardService.getById(req.params.id);
    if (board === undefined) {
      res.status(404).json('Board not found');
    } else res.json(board);
  } catch (error) {
    next(error);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const board = await boardService.getById(req.params.id);
    if (board === undefined) {
      res.status(404).send('Board not found');
    } else {
      await boardService.update(board.id, req.body);
      res.json(board);
    }
  } catch (error) {
    next(error);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const board = await boardService.deleteId(req.params.id);
    if (board === undefined) {
      res.status(404);
    } else res.status(204).json('The board has been deleted');
  } catch (error) {
    next(error);
  }
});

export default router;
