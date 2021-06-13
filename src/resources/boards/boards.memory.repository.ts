import { Board, IBoard } from './boards.model';
import DB from '../../common/in-memory';

const { BOARD, TASK } = DB;

/**
 * Get all Boars by id from BOARD db
 * @returns {Promise} All Board from BOARD db
 */
const getAll = async (): Promise<IBoard[]> => BOARD;

/**
 * Create new Board to BOARD db
 * @param {Object} body
 * @param {string} body.title Board Title
 * @param {Array} body.order Board Order Array
 * @returns {Object} Created body
 */
const create = async (body: IBoard): Promise<IBoard> => {
  const board = new Board(body);
  await BOARD.push(board);
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
const update = async (
  id: string,
  data: IBoard
): Promise<IBoard | undefined> => {
  const index = BOARD.findIndex((item) => item.id === id);
  BOARD[index] = { ...BOARD[index], ...data };
  return BOARD[index];
};

/**
 * Get Board by id from BOARD db
 * @param {string} id Board id
 * @returns {Promise} found Board in BOARD db
 */
const getById = async (id: string): Promise<IBoard | undefined> =>
  BOARD.find((board) => board.id === id);

/**
 * Delete all Tasks in deleted Board
 * @param {string} id Board id
 * @returns {Promise<void>} Deleted Board by id BOARD db
 */
const deleteBoardTasks = async (id: string) => {
  while (TASK.findIndex((item) => item.boardId === id) !== -1) {
    TASK.findIndex((_item, index) => {
      TASK.splice(index, 1);
      return null;
    });
  }
};

/**
 * Delete Board by id
 * @param {string} id Board id
 * @returns {Promise|undefined} Deleted board from BOARD db or undefined
 */
const deleteId = async (id: string): Promise<boolean> => {
  deleteBoardTasks(id);
  const index = BOARD.findIndex((item) => item.id === id);
  if (index !== -1) {
    BOARD.splice(index, 1);
    return true;
  }
  return false;
};

export default { getAll, create, getById, update, deleteId };
