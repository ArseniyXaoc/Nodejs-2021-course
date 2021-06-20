import { DeleteResult, getRepository, UpdateResult, getConnection } from 'typeorm';
import { Task } from '../../entity/Task';

interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId:  string | null;
  boardId: string;
  columnId: string;
}

/**
 * Return all Tasks from TASKS db
 * @returns {Promise} All Tasks
 */
const getAll = async (): Promise<Task[]> => await getRepository(Task).find();;



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
const create = async (boardId: string, body: ITask): Promise<Task> => {

  const {title,order,description,columnId, userId } = body;
  const x = {
    title,order,description,columnId, userId, boardId
  }
  const task = await getRepository(Task).save(x);
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
const update = async (id: string, data: ITask): Promise<UpdateResult> => {
  const {title, order, description, userId, boardId, columnId } = data;
  const task = await getConnection()
    .createQueryBuilder()
    .update(Task)
    .set({ title, order, description, userId: userId, boardId: boardId, columnId })
    .where("id = :id", { id: id })
    .execute();
  return task;
};

/**
 * Get Task by id from TASK db
 * @param {string} id Task Id
 * @returns {Promise} Found Task by Id in TASK db
 */
const getById = async (id: string): Promise<Task | undefined> => {
  const taskRepository = getRepository(Task);
  const task = await taskRepository.findOne(id);
  return task;
}

/**
 * Delete Task by id in TASK db
 * @param {string} id Task id
 * @returns {boolean|undefined} Deleted task from TASK db of undefined if Task do not found
 */
const deleteId = async (id: string): Promise<DeleteResult> => {
  const taskRepository = getRepository(Task)
  const task = await taskRepository.delete(id);
  return task;
};

export default {getAll, create, getById, update,deleteId};