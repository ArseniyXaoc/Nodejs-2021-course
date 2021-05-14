const boardRepo = require('./boards.memory.repository');

const getAll = async () => boardRepo.getAll();
const create = async (body) => boardRepo.create(body);
const getById = async (id) => boardRepo.getById(id);
const update = async (board, body) => boardRepo.update(board.id, body);
const deleteId = async (id) => boardRepo.deleteId(id);

module.exports = { getAll, create, getById, update,deleteId };