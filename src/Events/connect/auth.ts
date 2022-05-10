import { Message } from "whatsapp-web.js";
import { EventsTyper } from "../../BaceSystem/handler/events_handler";
import { existsSync, writeFileSync } from 'fs';
let data = {
    name: "authenticated",
    run: (client, session: any) => {
        // if (existsSync('session.json')) return;
        // writeFileSync('session.json', JSON.stringify(session));
    }
} as EventsTyper
export default data;