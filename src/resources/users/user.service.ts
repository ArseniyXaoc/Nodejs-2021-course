import { DeleteResult, UpdateResult } from 'typeorm';
import usersRepo from './user.memory.repository';
import {User, ISecretUser} from './user.model';

const getAll = (): Promise<ISecretUser[]>  => usersRepo.getAll();

const create =  async (data:ISecretUser): Promise<ISecretUser> => {
  const user = new User(data);
  usersRepo.addUser(user);
  return user;
}

const getById = async (id: string):Promise<ISecretUser | undefined>  => usersRepo.getById(id);

const update = async (id: string, body: ISecretUser): Promise<UpdateResult>  => usersRepo.update(id, body);

const deleteId = async (id: string): Promise<DeleteResult> => usersRepo.deleteId(id);

export = { getAll, create, getById, update, deleteId };
