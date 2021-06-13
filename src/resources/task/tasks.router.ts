import { Router } from 'express';
import taskService from './tasks.service';
import { Task } from './tasks.model';
/// <reference types="../../../custom" />
const router = Router({mergeParams: true});
router.route('/').get(async (_req, res) => {
  const tasks = await taskService.getAll();
  res.json(tasks);
})

interface IboardId {
  boardId: string
}

router.route('/').post(async (req, res) => {
  const  {body} = req;
  const boardIdS: IboardId = JSON.parse(JSON.stringify(req.params));
  const { boardId } = boardIdS;
  const task = await taskService.create(boardId, body);
  res.status(201).json(Task.toResponse(task));
})

router.route('/:id').get(async (req, res) => {
  const task = await taskService.getById(req.params.id);
  if (task === undefined) {
    res.status(404).json('task not found');
  } else res.json(task);
});

router.route('/:id').put(async (req, res) => {
  const task = await taskService.getById(req.params.id);
  if (task === undefined) {
    res.status(404).send('task not found');
  } else {
    await taskService.update(task.id, req.body);
    res.json(task);
  }
});

router.route('/:id').delete(async (req, res) => {
  const task = await taskService.deleteId(req.params.id);
  if (task === undefined) {
    res.status(404).json('task not found');
  } else res.status(204).json('The task has been deleted');
});


export default router;