import usersRepo from './user.memory.repository';
import {User, ISecretUser} from './user.model';

const getAll = (): Promise<ISecretUser[]>  => usersRepo.getAll();

const create =  async (data:ISecretUser): Promise<ISecretUser> => {
  const user = new User(data);
  usersRepo.addUser(user);
  return user;
}

const getById = async (id: string):Promise<ISecretUser | null>  => usersRepo.getById(id);

const update = async (id: string, body: ISecretUser): Promise<ISecretUser | undefined>  => usersRepo.update(id: string body);

const deleteId = async (id: string): Promise<boolean> => usersRepo.deleteId(id);

export = { getAll, create, getById, update, deleteId };
