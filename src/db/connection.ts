import { getConnection, createConnection} from "typeorm";
import { logMsgErr, logMsgInfo } from "../utils";

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
            await createConnection();
        }
        connection = getConnection().isConnected
        if(connection){
            logMsgInfo(`Connected to DB`);
        }        
     }
     catch (err) {
        logMsgErr(err);
     }
}

export const TryDbConnect = async (callback: () => void): Promise<void> => {
    try {
        await connectionToDb();
        callback();
    } catch (err) {
        logMsgErr(err);
    }
}