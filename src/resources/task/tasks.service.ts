import taskRepo from './tasks.memory.repository';
import { Task } from '../../entity/Task'
import { UpdateResult, DeleteResult } from 'typeorm';
import { ITask } from './tasks.model';

const getAll = async (): Promise<Task[]> => await taskRepo.getAll();
const create = async (boardId: string, body: ITask): Promise<Task> => await  taskRepo.create(boardId, body);
const getById = async (id: string): Promise<Task | undefined>  => await  taskRepo.getById(id);
const update = async (id: string, body: ITask): Promise<UpdateResult> =>await  taskRepo.update(id, body);
const deleteId = async (id: string): Promise<DeleteResult> => await taskRepo.deleteId(id);

export default { getAll, create, getById, update, deleteId };