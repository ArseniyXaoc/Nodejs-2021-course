import { v4 as uuidv4 } from 'uuid';

/**
 * Class for create object Column in Board
 * @class Colums
 * @param {Object} employees - Board params
 * @param employees.title Title of Columns
 * @param employees.order Order of Columns
 */
class Colums {
  constructor({ title, order} = {}) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
  }
}

export default Colums;
