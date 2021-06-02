import { v4 as uuidv4 } from 'uuid';

interface ITaskClass {
  id?: string;
  title?: string;
  order?: string;
  description?: string;
  userId?:  string | null;
  boardId?: string;
  columnId?: string;
}
/**
 * @class Task
 * @param {Object} employees - Title name
 * @param {string} employees.order - Order name
 * @param {string} employees.description - Description for Title
 * @param {string} employees.userId - UserId who owns Task
 * @param {string} employees.boardId - BoardId who owns Task
 * @param {string} employees.columnId - ColumnId who owns Task
 */
class Task {
  id: string;

  title: string;

  order: string;

  description: string;

  userId: string | null ;

  boardId: string;

  columnId: string;

  constructor({
    id = uuidv4(),
    title = '',
    order = '',
    description = '',
    userId = '',
    boardId = '',
    columnId = ''}:ITaskClass = {},

  ) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: ITask): ITask {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

interface ITask {
  id: string;
  title: string;
  order: string;
  description: string;
  userId:  string | null;
  boardId: string;
  columnId: string;
}


export {Task, ITask};
