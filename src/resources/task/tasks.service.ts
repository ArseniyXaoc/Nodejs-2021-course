import { UpdateResult, DeleteResult } from 'typeorm';
import taskRepo from './tasks.memory.repository';
import { Task } from '../../entity/Task'
import { ITask } from './tasks.model';

const getAll = async (): Promise<Task[]> => taskRepo.getAll();
const create = async (boardId: string, body: ITask): Promise<Task> => taskRepo.create(boardId, body);
const getById = async (id: string): Promise<Task | undefined>  => taskRepo.getById(id);
const update = async (id: string, body: ITask): Promise<UpdateResult> =>taskRepo.update(id, body);
const deleteId = async (id: string): Promise<DeleteResult> => taskRepo.deleteId(id);

export default { getAll, create, getById, update, deleteId };