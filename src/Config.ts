import { config } from "dotenv";
config();
let Config_Data = {
    prefix: process.env.prefix ?? "."
}
export {
    Config_Data
}