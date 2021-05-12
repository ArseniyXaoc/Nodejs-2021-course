const USERS = [];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   USERS
;

const addUser = async (user) => {
  USERS.push(user);
}

module.exports = { getAll, addUser };
