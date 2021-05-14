const { v4: uuidv4 } = require('uuid');

class Colums {
  constructor({ title, order} = {}) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
  }
}

module.exports = Colums;
