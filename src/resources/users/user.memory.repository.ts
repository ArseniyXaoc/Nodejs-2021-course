import DB from '../../common/in-memory';
import { ISecretUser, IUser, User } from './user.model'
const {USERS, TASK} = DB;

/**
 * get All data from USERS db
 * @returns {Promise} All User in USERS db
 */
const getAll = async (): Promise<ISecretUser[]> => USERS;

/** 
 * Add new User in db
 * @param {Object} user User data object from User class constructor {id, name, login, password}
 * @param {string} user.id User id
 * @param {string} user.name User name
 * @param {string} user.login User login
 * @param {string} user.password User password
 * @returns {Promise} Created User 
 */
const addUser = async (user: ISecretUser): Promise<IUser> => {
  USERS.push(user);
  return User.toResponse(user);
};

/** 
 * Get User data by Id
 * @param {string} id User Id
 * @returns {Promise} User found in USERS db by id
 */
const getById = async (id: string): Promise<ISecretUser | null>  => {
  const user =  USERS.find(user => user.id === id);
     return user? user: null;
};

/**
 * Update User data by Id
 * @param {string} id User Id
 * @param {Object} data User data object {id, name, login, password}
 * @param {string} data.id User id
 * @param {string} data.name User name
 * @param {string} data.login User login
 * @param {string} data.password User password
 * @returns {Promise} found User data object by id
 */
const update = async (id: string, data: ISecretUser): Promise<ISecretUser | undefined> => {
  const index = USERS.findIndex(user => user.id === id);
  if(index !== -1){
    USERS[index] = { ...USERS[index], ...data };
    return USERS[index];
  }
  return undefined;
};

/**
 * Find & delete User in Tasks db - user in Task set null
 * @param {string} id User id
 * @returns void
 */
const uponUserTasks = (id: string) => {
  while(TASK.findIndex(item => item.userId === id) !== -1) {
    const x = TASK.findIndex(item => item.userId === id);
    if(TASK[x]?.userId){
      TASK[x]!.userId = null;
    }
    
  }
};

/**
 * Delete User by id
 * @param {string} id User id
 * @returns {boolean|undefined} Founded & deleted User in USERS db or undefined if it does not found
 */
const deleteId = async (id: string): Promise<boolean> => {
  const index = USERS.findIndex(item => item.id === id);
  uponUserTasks(id);
  if (index !== -1) {
    USERS.splice(index, 1);
    return true;
  }
  return false;
};

export = { getAll, addUser, getById, update, deleteId };
