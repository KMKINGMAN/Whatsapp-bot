import { EventsTyper } from "../../BaceSystem/handler/events_handler";
// import { existsSync, rmSync} from 'fs'
let data = {
    name: "auth_failure",
    run: (client) => {
        // if(existsSync("session.json")){
        //     rmSync("session.json")
        // }
        // console.log("Session File Deleted");
        // client.destroy().then(()=> {
        //     console.log("Loggged Out")
        // }).catch(e=> {
        //     console.log(e)
        // })
    }
} as EventsTyper
export default data;