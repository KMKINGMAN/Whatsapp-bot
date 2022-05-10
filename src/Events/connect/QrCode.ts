import { Message } from "whatsapp-web.js";
import QrCode from "qrcode-terminal"
import { EventsTyper } from "../../BaceSystem/handler/events_handler";
let data = {
    name: "qr",
    run: (client, qr: string) => {
        //to Generate Qr Code
        QrCode.generate(qr, { small: true })
    }
} as EventsTyper
export default data;