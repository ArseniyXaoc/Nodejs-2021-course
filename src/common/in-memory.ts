type DBT = Array<{[key:string]: unknown}>;
const DB: {USERS: DBT, BOARD: DBT, TASK: DBT} = {
  USERS: [],
  BOARD: [],
  TASK: [],
}

export { DB } ;