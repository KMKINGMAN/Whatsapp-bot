import { Chat, Message, MessageMedia } from "whatsapp-web.js";
import { CommandTyper } from "../../BaceSystem/handler/command_handler";
let data = {
    name: "ping",
    dms_only: false,
    group_only: false,
    run: async(client, message: Message, chat: Chat, args)=> {
        //Test Command
        chat.sendMessage("*Pong*");
    }
} as CommandTyper;
export default data;