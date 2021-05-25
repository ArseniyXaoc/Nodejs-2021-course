const { v4: uuidv4 } = require('uuid');
/**
 * @class User
 * @constructor
 * @param {string} name - Name of User
 * @param {string} login - User Login
 * @param {string} password - User Password
 */
class User {
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

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
