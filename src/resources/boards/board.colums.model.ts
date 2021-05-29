import { v4 as uuidv4 } from 'uuid';

/**
 * Class for create object Column in Board
 * @class Colums
 * @param {Object} employees - Board params
 * @param employees.title Title of Columns
 * @param employees.order Order of Columns
 */
class Colums {
  id:string;
  title:string;
  order: number;
  constructor({title, order}:{
    title:string,
    order: number
  }) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
  }
}

export default Colums;
