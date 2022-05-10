import { readdirSync } from "fs"
import { KINGMAN_CLIENT } from "../Client";
interface Events {
    authenticated: string,
    auth_failure: string,
    ready: string,
    message: string,
    message_create: string,
    message_revoke_everyone: string,
    message_revoke_me: string,
    message_ack: string,
    media_uploaded: string,
    group_join: string,
    group_leave: string,
    group_update: string,
    qr: string,
    disconnected: string,
    change_state: string,
    change_battery: string,
    incoming_call: string
};
interface EventsTyper {
    name:  keyof Events;
    run: (client: KINGMAN_CLIENT, ...args: any[])=> void;
}
let data = async(client: KINGMAN_CLIENT)=> {
    readdirSync("./src/Events/").forEach(async(folder) => {
        let events_files = readdirSync(`./src/Events/${folder}`).filter(f => f.endsWith(".ts"))
        events_files.forEach(async(file) => {
            let event = (await import(`./../../Events/${folder}/${file}`)).default as EventsTyper;
            if(event.name){
                client.on(event.name, async(...args)=> event.run(client, ...args))
            }
        })
    })
}
export default data;
export {
    EventsTyper
}