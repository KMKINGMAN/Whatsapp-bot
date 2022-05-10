import { LocalAuth } from "whatsapp-web.js";
import { KINGMAN_CLIENT } from "./BaceSystem/Client";
//const sessionData = existsSync('./session.json') ? require('./session.json') : undefined;
//LegacySessionAuth is not compatible with multidevice-enabled accounts due to a change in how WhatsApp Web handles authentication for these accounts.
//So You Cant Save Session in Json file using [multidevice-enabled]
//if [multidevice-disabled] uncomment line 3 and all comment is ./src/auth.ts and auth_faild.ts
const client = new KINGMAN_CLIENT({
    authStrategy: new LocalAuth({
        clientId:"muhammad_kurkar",
        dataPath: ".kmcodes_saved_session"
    }),
    ffmpegPath: "/src/BaceSystem/ffmpeg/ffmpeg.exe",
});
client.initialize().catch(e=> { console.log(e) });