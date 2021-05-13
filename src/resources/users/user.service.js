const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const createUser =  async (data) => {
  const user = new User(data);
  usersRepo.addUser(user);
  return user;
}

const getById = async (id) => {
  const user = await usersRepo.getUser(id);
  return user;
}

module.exports = { getAll, createUser, getById };
