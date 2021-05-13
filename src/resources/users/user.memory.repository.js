const USERS = [];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   USERS
;

const addUser = async (user) => {
  USERS.push(user);
}

const getUser = async (id) => USERS.find(user => user.id === id);

module.exports = { getAll, addUser, getUser };
