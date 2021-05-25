const { TASK } = require('../../common/in-memory');
const Task = require('./tasks.model');

/**
 * Return all Tasks from TASKS db
 * @returns {Promise<[]>} All Tasks
 */
const getAll = async () => TASK;

/**
 * Create new Task and add to TASK db
 * @param boardId Board id for new Task
 * @param body Task body from Task model should contain (id, title, order, description , userId, boardId, columnId)
 * @returns {Promise<Task>} Created Task
 */
const create = async (boardId, body) => {
  const task = new Task({ ...body, boardId });
  await TASK.push(task)
  return task;
};

/**
 * Update Task fields by Id in TASK db
 * @param id Task Id
 * @param data Data for updated Task field
 * @returns {Promise<*>} Updated Task
 */
const update = async (id, data) => {
  const index = TASK.findIndex(item => item.id === id);
  TASK[index] = { ...TASK[index], ...data };
  return TASK[index];
};

/**
 * Get Task by id from TASK db
 * @param id Task Id
 * @returns {Promise<*>} Found Task by Id in TASK db
 */
const getById = async (id) => TASK.find(task => task.id === id);

/**
 * Delete Task by id in TASK db
 * @param id Task id
 * @returns {Promise<*[]|undefined>} Deleted task from TASK db of undefined if Task do not found
 */
const deleteId = async (id) => {
  const index = TASK.findIndex(item => item.id === id);
  if (index !== -1) {
    return TASK.splice(index, 1);
  }
  return undefined;
};

module.exports = {getAll, create, getById, update,deleteId };