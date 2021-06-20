// import { IBoard } from './boards.model';
import { DeleteResult, getRepository, UpdateResult, getConnection } from 'typeorm';
// import { ISecretUser, IUser } from './user.model'
import { Board, Task } from '../../entity'


// const { BOARD, TASK } = DB;

/**
 * Get all Boars by id from BOARD db
 * @returns {Promise} All Board from BOARD db
 */
const getAll = async () => await getRepository(Board).find();

/**
 * Create new Board to BOARD db
 * @param {Object} body
 * @param {string} body.title Board Title
 * @param {Array} body.order Board Order Array
 * @returns {Object} Created body
 */
const create = async(body: Board): Promise<Board> => {
  const board = await getRepository(Board).save(body);
  return board;
};

/**
 * Update Board data by id in BOARD db
 * @param {string} id Board id
 * @param {object} data Board data
 * @param {string} data.id Board id
 * @param {string} data.title Board name
 * @param {Array[]} data.column Board column
 * @param {string} data.password Board password
 * @returns {Promise} found data in BOARD db
 */
const update = async (id: string, data: Board): Promise<UpdateResult> => {
  const { title, columns } = data;
  const board = await getConnection()
    .createQueryBuilder()
    .update(Board)
    .set({ title, columns })
    .where("id = :id", { id: id })
    .execute();
  return board;
  // const index = BOARD.findIndex((item) => item.id === id);
  // BOARD[index] = { ...BOARD[index], ...data };
  // return BOARD[index];
};

/**
 * Get Board by id from BOARD db
 * @param {string} id Board id
 * @returns {Promise} found Board in BOARD db
 */
const getById = async (id: string): Promise<Board | undefined> => {
  const boardRepository = getRepository(Board);
  const board = await boardRepository.findOne(id);
  return board;
}

/**
 * Delete all Tasks in deleted Board
 * @param {string} id Board id
 * @returns {Promise<void>} Deleted Board by id BOARD db
 */
const deleteBoardTasks = async (id: string) => {
  const taskRepository = getRepository(Task)
  await taskRepository.delete({board: id});
};

/**
 * Delete Board by id
 * @param {string} id Board id
 * @returns {Promise|undefined} Deleted board from BOARD db or undefined
 */
const deleteId = async (id: string): Promise<DeleteResult> => {
  await deleteBoardTasks(id);
  const boardRepository = getRepository(Board)
  const board = await boardRepository.delete(id);
  return board
};

export default { getAll, create, getById, update, deleteId };
