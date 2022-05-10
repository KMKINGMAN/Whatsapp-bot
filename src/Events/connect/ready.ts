import { ClientSession, Message } from "whatsapp-web.js";
import { EventsTyper } from "../../BaceSystem/handler/events_handler";
let data = {
    name: "ready",
    run: (client) => {
        console.log(`Client Connected`)
    }
} as EventsTyper
export default data;