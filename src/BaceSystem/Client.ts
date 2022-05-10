import { Client, ClientOptions } from "whatsapp-web.js";
import { Collection } from "@discordjs/collection";
import { Config_Data } from "../Config"
import { CommandTyper } from "./handler/command_handler";
class KINGMAN_CLIENT extends Client {
    public commands: Collection<string, CommandTyper>;
    public config:  typeof Config_Data;
    public lastMessage: string | null;
    constructor(ops: ClientOptions){
        super(ops)
        this.commands = new Collection();
        this.config = Config_Data;
        this.lastMessage = null;
        ['command_handler.ts', 'events_handler.ts'].forEach(async file => {
            (await import(`./handler/${file}`)).default(this);
        })
    }
    setLastMessage(content: string){
        this.lastMessage = content;
    }
}
export {
    KINGMAN_CLIENT
}