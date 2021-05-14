const boardRepo = require('./boards.memory.repository');

const getAll = async () => boardRepo.getAll();

module.exports = { getAll };