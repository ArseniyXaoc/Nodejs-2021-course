const { USERS } = require('../../common/in-memory');

const getAll = async () =>
  // TODO: mock implementation. should be replaced during task development
  USERS
;

const addUser = async (user) => {
  USERS.push(user);
};

const getUser = async (id) => USERS.find(user => user.id === id);

const updateUser = async (id, data) => {
  const userIndex = USERS.findIndex(user => user.id === id);
  USERS[userIndex] = { ...USERS[userIndex], ...data };
  return USERS[userIndex];
};

const deleteUser = async (id) => {
  const userIndex = USERS.findIndex(user => user.id === id);
  if(userIndex !== -1){
    return USERS.splice(userIndex, 1);
  }
  return undefined;
};

module.exports = { getAll, addUser, getUser, updateUser, deleteUser };
