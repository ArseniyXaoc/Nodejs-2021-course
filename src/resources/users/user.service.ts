import usersRepo from './user.memory.repository';
import {User, ISecretUser, IUser} from './user.model';

const getAll = () => usersRepo.getAll();

const create =  async (data:ISecretUser): Promise<IUser> => {
  const user = new User(data);
  const newUser = usersRepo.addUser(user);
  return newUser;
}

const getById = async (id: string) => usersRepo.getById(id);

const update = async (id: string, body: ISecretUser): Promise<IUser>  => usersRepo.update(id, body);

const deleteId = async (id: string) => usersRepo.deleteId(id);

export = { getAll, create, getById, update, deleteId };
