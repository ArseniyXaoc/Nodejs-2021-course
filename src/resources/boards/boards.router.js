const router = require('express').Router();
const boardService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
})

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
})

module.exports = router;