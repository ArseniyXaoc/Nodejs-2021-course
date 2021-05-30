const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const create =  async (data) => {
  const user = new User(data);
  usersRepo.addUser(user);
  return user;
}

const getById = async (id) => usersRepo.getById(id);

const update = async (user, body) => usersRepo.update(user.id, body);

const deleteId = async (id) => usersRepo.deleteId(id);

module.exports = { getAll, create, getById, update, deleteId };
