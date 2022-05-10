import { Message } from "whatsapp-web.js";
import { EventsTyper } from "../../BaceSystem/handler/events_handler";
let data = {
    name: "message",
    run: async(client, message: Message) => {
        //To Startup Our Command Handler
        if(message.body === "" || !message.body) return;
        //the Command Will start with the prefix like 
        //.ping 
        if(!message.body.startsWith(client.config.prefix)) return;
        let args: string[] = message.body
        .slice(client.config.prefix.length)
        .trim() 
        .split(/ +/g);
        let command = args.shift()?.toLowerCase();
        if(!command || command?.length === 0) return;
        let fun = client.commands.get(command);
        let chat = await message.getChat();
        if(fun){
            try {
                let isGuild = (await message.getChat()).isGroup;
                if(isGuild && fun.dms_only) return message.reply("*This Command Only For DM's*");
                if(isGuild && !fun.group_only) return message.reply("*This Command Only For Groups*")
                fun.run(client, message, chat, args)
            } catch(e) {
                console.log(e)
            }
        }
    }
} as EventsTyper
export default data;