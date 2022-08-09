import { Client } from "discord.js";

export default (client: Client): void => {
  client.on("ready", async (): Promise<void> => {
    if (!client.user || !client.application) {
      return;
    }
    console.log(`${client.user.username} is online`);
  });
}

