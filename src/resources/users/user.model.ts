import { v4 as uuidv4 } from 'uuid';

interface IUser  {
  id:string;
  name: string;
  login: string;
}

interface ISecretUser extends IUser {
  password: string;
}

/**
 * @class User
 * @param {Object} employees - Board params
 * @param {string} employees.name - Name of User
 * @param {string} employees.login - User Login
 * @param {string} employees.password - User Password
 */
class User {
  id:string;
  name: string;
  login: string;
  password: string;
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: ISecretUser): IUser   {
    const { id, name, login } = user;
    return { id, name, login };
  }
}


export { User, IUser, ISecretUser };
