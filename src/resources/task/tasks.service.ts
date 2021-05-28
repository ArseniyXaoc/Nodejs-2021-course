import taskRepo from './tasks.memory.repository';

const getAll = async () => taskRepo.getAll();
const create = async (boardId, body) => taskRepo.create(boardId, body);
const getById = async (id) => taskRepo.getById(id);
const update = async (task, body) => taskRepo.update(task.id, body);
const deleteId = async (id) => taskRepo.deleteId(id);

export default { getAll, create, getById, update, deleteId };