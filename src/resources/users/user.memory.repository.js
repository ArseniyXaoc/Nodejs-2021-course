const { USERS, TASK } = require('../../common/in-memory');

/**
 *
 * @returns {Promise<[]>} All User in USERS db
 */
const getAll = async () => USERS;

/**
 * Add new User in db
 * @param user User data object from User class constructor {id, name, login, password}
 * @returns {Promise<void>} undefined
 */
const addUser = async (user) => {
  USERS.push(user);
};

/**
 * Get User data by Id
 * @param id User Id
 * @returns {Promise<*>} User found in USERS db by id
 */
const getById = async (id) => USERS.find(user => user.id === id);

/**
 * Update User data by Id
 * @param id User Id
 * @param data User data object {id, name, login, password}
 * @returns {Promise<*>} found User data object by id
 */
const update = async (id, data) => {
  const index = USERS.findIndex(user => user.id === id);
  USERS[index] = { ...USERS[index], ...data };
  return USERS[index];
};
/**
 * Find & delete User in Tasks db - user in Task set null
 * @param id User id
 * @returns void
 */
const uponUserTasks = (id) => {
  while(TASK.findIndex(item => item.userId === id) !== -1) {
    const x = TASK.findIndex(item => item.userId === id);
    TASK[x].userId = null;
  }
};
/**
 * Delete User by id
 * @param id User id
 * @returns {Promise<*[]|undefined>} Founded & deleted User in USERS db or undefined if it does not found
 */
const deleteId = async (id) => {
  const index = USERS.findIndex(item => item.id === id);
  uponUserTasks(id);
  if (index !== -1) {
    return USERS.splice(index, 1);
  }
  return undefined;
};

module.exports = { getAll, addUser, getById, update, deleteId };
