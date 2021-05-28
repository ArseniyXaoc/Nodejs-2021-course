import usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = () => usersRepo.getAll();

const create =  async (data) => {
  const user = new User(data);
  usersRepo.addUser(user);
  return user;
}

const getById = async (id) => usersRepo.getById(id);

const update = async (user, body) => usersRepo.update(user.id, body);

const deleteId = async (id) => usersRepo.deleteId(id);

export = { getAll, create, getById, update, deleteId };
