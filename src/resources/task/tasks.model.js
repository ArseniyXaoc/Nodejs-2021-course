const { v4: uuidv4 } = require('uuid');
/**
 * @class Task
 * @constructor
 * @param {string} title - Title name
 * @param {string} order - Order name
 * @param {string} description - Description for Title
 * @param {string} userId - UserId who owns Task
 * @param {string} boardId - BoardId who owns Task
 * @param {string} columnId - ColumnId who owns Task
 */
class Task {
  constructor({
                id = uuidv4(),
                title,
                order,
                description,
                userId,
                boardId,
                columnId
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
