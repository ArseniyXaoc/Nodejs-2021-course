import DB from '../../common/in-memory';
import {Task, ITask} from './tasks.model';

const {TASK} = DB;


/**
 * Return all Tasks from TASKS db
 * @returns {Promise} All Tasks
 */
const getAll = async (): Promise<ITask[]> => TASK;

/**
 * Create new Task and add to TASK db
 *
 * @param {object} boardId Board ID where the task will be written
 * @param {object} body Task body from Task model should contain (id: string title, order, description , userId, boardId, columnId)
 * @param {string} body.id Task Id
 * @param {string} body.title Task Title
 * @param {number} body.order Task Order
 * @param {string} body.description Task Description
 * @param {string} body.userId User id for new Task * 
 * @param {string} body.id Board id for new Task * 
 * @param {string} body.columnId Column id for new Task * 
 * @returns {Promise} Created Task
 */
const create = async (boardId: string, body: ITask): Promise<ITask> => {
  const task = new Task({ ...body, boardId });
  await TASK.push(task)
  return task;
};

/**
 * Update Task fields by Id in TASK db
 * @param {string} id Task Id
 * @param {object} data Data for updated Task field ,can change : {id, title, order, description , userId, boardId, columnId}
 * @param {string} data.id Task Id
 * @param {string} data.title Task Title
 * @param {number} data.order Task Order
 * @param {string} data.description Task Description
 * @param {string} data.userId User id for new Task * 
 * @param {string} data.boardId Board id for new Task * 
 * @param {string} data.columnId Column id for new Task * 
 * @returns {Promise} Updated Task
 */
const update = async (id: string, data: ITask): Promise<ITask | undefined> => {
  const index = TASK.findIndex(item => item.id === id);
  TASK[index] = { ...TASK[index], ...data };
  return TASK[index];
};

/**
 * Get Task by id from TASK db
 * @param {string} id Task Id
 * @returns {Promise} Found Task by Id in TASK db
 */
const getById = async (id: string): Promise<ITask | undefined> => TASK.find(task => task.id === id);

/**
 * Delete Task by id in TASK db
 * @param {string} id Task id
 * @returns {boolean|undefined} Deleted task from TASK db of undefined if Task do not found
 */
const deleteId = async (id: string): Promise<boolean> => {
  const index = TASK.findIndex(item => item.id === id);
  if (index !== -1) {
    TASK.splice(index, 1);
    return true;
  }
  return false;
};

export default {getAll, create, getById, update,deleteId};