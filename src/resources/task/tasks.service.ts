import taskRepo from './tasks.memory.repository';
import { ITask } from './tasks.model'

const getAll = async (): Promise<ITask[]> => taskRepo.getAll();
const create = async (body: ITask): Promise<ITask> => taskRepo.create(body);
const getById = async (id: string): Promise<ITask | undefined>  => taskRepo.getById(id);
const update = async (id: string, body: ITask): Promise<ITask | undefined> => taskRepo.update(id, body);
const deleteId = async (id: string): Promise<boolean> => taskRepo.deleteId(id);

export default { getAll, create, getById, update, deleteId };