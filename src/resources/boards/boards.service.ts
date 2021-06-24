import { DeleteResult, UpdateResult } from 'typeorm';
import { Board } from '../../entity';
import boardRepo from './boards.memory.repository';

const getAll = async (): Promise<Board[]>  => boardRepo.getAll();
const create = async (body:Board): Promise<Board> =>boardRepo.create(body);
const getById = async (id: string): Promise<Board | undefined> =>boardRepo.getById(id);
const update = async (id: string, body:Board): Promise<UpdateResult> =>boardRepo.update(id, body);
const deleteId = async (id: string): Promise<DeleteResult> =>boardRepo.deleteId(id);

export default { getAll, create, getById, update,deleteId };