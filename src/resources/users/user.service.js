const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const create =  async (data) => {
  const user = new User(data);
  usersRepo.addUser(user);
  return user;
}

const getById = async (id) => usersRepo.getUser(id);

const updateUser = async (user, body) => usersRepo.updateUser(user.id, body);

const deleteUser = async (id) => usersRepo.deleteUser(id);

module.exports = { getAll, create, getById, updateUser, deleteUser };
