import { v4 as uuidv4 } from 'uuid';

import Colums from './board.colums.model';
/**
 * @class Board
 * @param {Object} employees - Board params
 * @param {string} employees.title - Board title name
 * @param {Array} employees.columns - Column Array who owns Board
 */
class Board {
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

export default { Board, Colums };
