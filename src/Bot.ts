require('dotenv').config()
import { Client, ClientOptions, GatewayIntentBits } from "discord.js";
// import * as logger from "./handlers/Logger";
import * as listeners from '.'

console.log("Bot is starting...");
const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds] });

// Start listeners
listeners.ready(client);
listeners.messages(client);
listeners.error(client);

client.login(process.env.TOKEN);