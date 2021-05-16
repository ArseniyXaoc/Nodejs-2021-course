const router = require('express').Router();
const taskService = require('./tasks.service');
const Task = require('./tasks.model');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.json(tasks);
})

router.route('/').post(async (req, res) => {
  const { body } = req;
  const task = await taskService.create(body);
  res.status(201).json(Task.toResponse(task));
})
//
// router.route('/:id').get(async (req, res) => {
//   const task = await taskService.getById(req.params.id);
//   if (task === undefined) {
//     res.status(404).json('task not found');
//   } else res.json(task);
// });
//
// router.route('/:id').put(async (req, res) => {
//   const task = await taskService.getById(req.params.id);
//   if (task === undefined) {
//     res.status(404).send('User not found');
//   } else {
//     await taskService.update(task, req.body);
//     res.json(task);
//   }
// });
//
// router.route('/:id').delete(async (req, res) => {
//   const task = await taskService.deleteId(req.params.id);
//   if (task === undefined) {
//     res.status(404).json('User not found');
//   } else res.status(204).json('The task has been deleted');
// });


module.exports = router;