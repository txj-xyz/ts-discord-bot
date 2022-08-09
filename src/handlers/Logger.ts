import { Client } from "discord.js";

export interface MessageData {
    handler: string | null;
    message: string;
    details?: object | null;
}

// export default function log (data: ErrorData) {
//     console.log(data)
// }; 

export class Logger {
    static handle(param: MessageData) {
        return console.log(param)
    }
}