import { Client } from "discord.js";

export default (client: Client): void => {
  client.on("error", async (error): Promise<void> => {
    console.log(error);
  });
}

