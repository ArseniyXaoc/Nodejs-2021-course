import { ISecretUser } from '../resources/users/user.model'
// type DBT = Array<{[key:string]:[]}>;
const DB: {USERS: ISecretUser[], BOARD: [], TASK: []} = {
  USERS: [],
  BOARD: [],
  TASK: [],
}

export default DB;