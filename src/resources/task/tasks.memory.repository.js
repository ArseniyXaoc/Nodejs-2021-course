const { TASK } = require('../../common/in-memory');
const Task = require('./tasks.model');

const getAll = async () => TASK;

const create = async (body) => {
  const task = new Task(body);
  await TASK.push(task)
  return task;
};

const update = async (id, data) => {
  const index = TASK.findIndex(item => item.id === id);
  TASK[index] = { ...TASK[index], ...data };
  return TASK[index];
};

const getById = async (id) => TASK.find(task => task.id === id);

const deleteId = async (id) => {
  const index = TASK.findIndex(item => item.id === id);
  if (index !== -1) {
    return TASK.splice(index, 1);
  }
  return undefined;
};

module.exports = {getAll, create, getById, update,deleteId };