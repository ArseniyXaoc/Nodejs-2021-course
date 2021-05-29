import { ISecretUser } from '../resources/users/user.model'
import { ITask } from '../resources/task/tasks.model';
import { IBoard } from '../resources/boards/boards.model'
// type DBT = Array<{[key:string]:[]}>;
const DB: {USERS: ISecretUser[], BOARD: IBoard[], TASK: ITask[]} = {
  USERS: [],
  BOARD: [],
  TASK: [],
}

export default DB;