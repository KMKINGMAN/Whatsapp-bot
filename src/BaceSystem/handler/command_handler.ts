import { Chat, Message } from "whatsapp-web.js";
import { KINGMAN_CLIENT } from "../Client";
import fs, { readdirSync } from "fs"
interface CommandTyper {
    name: string,
    group_only : boolean,
    dms_only: boolean,
    run: (client: KINGMAN_CLIENT, message: Message, chat: Chat, args: string[]) => void;
}
let load_command = async(client: KINGMAN_CLIENT)=> {
    readdirSync("./src/Command/").forEach(async(folder) => {
        let command_files = readdirSync(`./src/Command/${folder}`).filter(f => f.endsWith(".ts"));
        command_files.forEach(async(file) => {
            let command = (await import(`./../../Command/${folder}/${file}`)).default as CommandTyper;
            if(command.name){
                client.commands.set(command.name, command)
            }
        })
    })
}
export default load_command;
export {
    CommandTyper
}