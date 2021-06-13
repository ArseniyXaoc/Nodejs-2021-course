import { v4 as uuidv4 } from 'uuid';

import Colums from './board.colums.model';

interface IBoard {
  id: string,
  title: string,
  columns: Colums[],
}
/**
 * @class Board
 * @param {Object} employees - Board params
 * @param {string} employees.title - Board title name
 * @param {Array} employees.columns - Column Array who owns Board
 */
class Board  {
  id: string;

  title: string;

  columns: Colums[];

  constructor({
    id = uuidv4(),
    title = '',
    columns = [],
  }: {
    id?: string,
    title?: string,
    columns?: Colums[],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(item => new Colums(item));
  }
}

export { Board, Colums,IBoard  };
