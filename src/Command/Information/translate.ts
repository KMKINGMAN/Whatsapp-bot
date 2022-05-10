import { Chat, Message, MessageMedia } from "whatsapp-web.js";
import { CommandTyper } from "../../BaceSystem/handler/command_handler";
import translate from "@vitalets/google-translate-api"
let data = {
    name: "translate",
    dms_only: false,
    group_only: false,
    run: async(client, message: Message, chat: Chat, args)=> {
        //This is a test command :) [to translate text to arabic]
        translate(args.join(" "), { to: "ar", autoCorrect: true }).then(data => {
            //console.log(data)
            chat.sendMessage(data.text)
        }).catch(e => {
            //You Need Proxy
            console.log(e)
            chat.sendMessage(e.message)
        })
    }
} as CommandTyper;
export default data;