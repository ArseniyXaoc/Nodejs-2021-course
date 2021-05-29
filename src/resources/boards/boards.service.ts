import boardRepo from './boards.memory.repository';
import {IBoard} from './boards.model';
const getAll = async () => boardRepo.getAll();
const create = async (body:IBoard): Promise<IBoard> => boardRepo.create(body);
const getById = async (id: string): Promise<IBoard | undefined> => boardRepo.getById(id);
const update = async (id: string, body:IBoard): Promise<IBoard | undefined> => boardRepo.update(id, body);
const deleteId = async (id: string): Promise<boolean> => boardRepo.deleteId(id);

export default { getAll, create, getById, update,deleteId };