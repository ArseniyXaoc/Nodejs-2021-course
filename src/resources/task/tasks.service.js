const taskRepo = require('./tasks.memory.repository');

const getAll = async () => taskRepo.getAll();
const create = async (body) => taskRepo.create(body);
const getById = async (id) => taskRepo.getById(id);
const update = async (task, body) => taskRepo.update(task.id, body);
const deleteId = async (id) => taskRepo.deleteId(id);

module.exports = { getAll, create, getById, update, deleteId };