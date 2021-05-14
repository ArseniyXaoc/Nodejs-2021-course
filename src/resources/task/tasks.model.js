const { v4: uuidv4 } = require('uuid');

const Colums = require('./tasks.colums.model');

class Task {
  constructor({
                id = uuidv4(),
                title,
                columns = [],
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(item => new Colums(item));
  }
}

module.exports = { Task, Colums };
