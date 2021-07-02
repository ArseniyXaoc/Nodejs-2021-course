// import { User } from './../../entity/User';
// import DB from '../../common/in-memory';
import { DeleteResult, getRepository, UpdateResult } from 'typeorm';
import { ISecretUser, IUser } from './user.model'
import { User } from '../../entity'

// const {USERS, TASK} = DB;

/**
 * get All data from USERS db
 * @returns {Promise} All User in USERS db
 */
const getAll = async (): Promise<ISecretUser[]> => getRepository(User).find();

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
  const savedUser = await getRepository(User).save(user);
  return User.toResponse(savedUser);
};

/** 
 * Get User data by Id
 * @param {string} id User Id
 * @returns {Promise} User found in USERS db by id
 */
const getById = async (id: string | undefined): Promise<ISecretUser | undefined>  => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);
  return user;
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
const update = async (id: string | undefined, data: ISecretUser): Promise<UpdateResult> => {
  const user = getRepository(User).update({id}, data);
  return user;
};

/**
 * Find & delete User in Tasks db - user in Task set null
 * @param {string} id User id
 * @returns void
 */
// const uponUserTasks = (id: string) => {
//  TASK.forEach(item => {
//     if(item.userId === id){
//       Object.assign(item, {userId: null} )
//     }
//   } )
// };

/**
 * Delete User by id
 * @param {string} id User id
 * @returns {boolean|undefined} Founded & deleted User in USERS db or undefined if it does not found
 */
const deleteId = async (id: string | undefined): Promise<DeleteResult> => getRepository(User).delete({id})
  // const index = USERS.findIndex(item => item.id === id);
  // uponUserTasks(id);
  // if (index !== -1) {
  //   USERS.splice(index, 1);
  //   return true;
  // }
  // return false;

export = { getAll, addUser, getById, update, deleteId };
