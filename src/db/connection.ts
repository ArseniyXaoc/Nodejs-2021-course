import { getConnection, createConnection} from "typeorm";
import { logMsgErr, logMsgInfo } from "../utils";
import x from "../ormconfig"

const { POSTGRES_HOST } = process.env

const connectionToDb =async () => {
    let connection;
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
        connection = getConnection().isConnected
        if(connection){
            logMsgInfo(`Connected to DB on ${POSTGRES_HOST};`);
        }        
     }
     catch (err) {
         console.log(err);
        logMsgErr(err);
     }
}

export const TryDbConnect = async (callback: () => void): Promise<void> => {
    try {
        await connectionToDb();
        callback();
    } catch (err) {
        console.log(err);
        logMsgErr(err);
    }
}