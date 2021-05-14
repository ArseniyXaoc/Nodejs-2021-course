const { BOARD } = require('../../common/in-memory');
const { Board } = require('./boards.model');

const getAll = async () => BOARD;

const create = async (body) => {
  const board = new Board(body);
  await BOARD.push(board)
  return board;
};

const update = async (id, data) => {
  const index = BOARD.findIndex(item => item.id === id);
  BOARD[index] = { ...BOARD[index], ...data };
  return BOARD[index];
};

const getById = async (id) => BOARD.find(board => board.id === id);

const deleteId = async (id) => {
  const index = BOARD.findIndex(item => item.id === id);
  if (index !== -1) {
    return BOARD.splice(index, 1);
  }
  return undefined;
};

module.exports = {getAll, create, getById, update,deleteId };