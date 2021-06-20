import { DeleteResult, UpdateResult } from 'typeorm';
import { Board } from '../../entity';
import boardRepo from './boards.memory.repository';

const getAll = async ()  => await boardRepo.getAll();
const create = async (body:Board): Promise<Board> =>await  boardRepo.create(body);
const getById = async (id: string): Promise<Board | undefined> =>await  boardRepo.getById(id);
const update = async (id: string, body:Board): Promise<UpdateResult> =>await  boardRepo.update(id, body);
const deleteId = async (id: string): Promise<DeleteResult> =>await  boardRepo.deleteId(id);

export default { getAll, create, getById, update,deleteId };