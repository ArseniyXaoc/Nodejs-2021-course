import { v4 as uuidv4 } from 'uuid';

class Colums {
  constructor({ title, order} = {}) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
  }
}

export default Colums;
