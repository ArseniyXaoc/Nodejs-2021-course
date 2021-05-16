const { USERS, TASK } = require('../../common/in-memory');

const getAll = async () =>
  // TODO: mock implementation. should be replaced during task development
  USERS
;

const addUser = async (user) => {
  USERS.push(user);
};

const getById = async (id) => USERS.find(user => user.id === id);

const update = async (id, data) => {
  const index = USERS.findIndex(user => user.id === id);
  USERS[index] = { ...USERS[index], ...data };
  return USERS[index];
};

const uponUserTasks = (id) => {
  while(TASK.findIndex(item => item.userId === id) !== -1) {
    const x = TASK.findIndex(item => item.userId === id);
    TASK[x].userId = null;
  }
};

const deleteId = async (id) => {
  const index = USERS.findIndex(item => item.id === id);
  uponUserTasks(id);
  if (index !== -1) {
    return USERS.splice(index, 1);
  }
  TASK.map();
  return undefined;
};

module.exports = { getAll, addUser, getById, update, deleteId };
