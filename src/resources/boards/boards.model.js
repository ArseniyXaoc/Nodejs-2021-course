const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
                id = uuidv4(),
                title,
                colums,
              } = {}) {
    this.id = id;
    this.title = title;
    this.coloms = colums;
  }
}

module.exports = Board;