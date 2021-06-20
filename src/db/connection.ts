import { getConnection, createConnection, Connection} from "typeorm";
import { logMsgErr, logMsgInfo } from "../utils";
import x from "../ormconfig"

const { POSTGRES_HOST } = process.env
let connection: Connection;
const connectionToDb =async () => {
    
     try{
         connection = getConnection()
     }
     catch (err){ 
         logMsgErr(err);
     }

     try{
        if(connection){
            if(!connection.isConnected) await connection.connect
        }
        else {
            
            await createConnection(x);
        }
        
        if(getConnection().isConnected){
            logMsgInfo(`Connected to DB on ${POSTGRES_HOST};`);
        }        
     }
     catch (err) {
         console.log(err);
        logMsgErr(err);
     }
}

 const TryDbConnect = async (callback: () => void): Promise<void> => {
    try {
        await connectionToDb();
        callback();
    } catch (err) {
        console.log(err);
        logMsgErr(err);
    }
}

export {TryDbConnect, connection}