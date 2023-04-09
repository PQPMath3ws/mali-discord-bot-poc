import { Client, Collection, Events, GatewayIntentBits, MessageContextMenuCommandInteraction, Partials } from "discord.js";

import { refreshBotCommands } from "./deploy_discord_commands";
import { CommandList } from "../commands/index";

let client:Client;

export async function initializeDiscordBot():Promise<void> {
    client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent], partials: [Partials.Channel] });

    client.once(Events.ClientReady, async (client: Client) => {
        console.log("Estou feliz - ESTOU VIVO!");
        await refreshBotCommands(client.guilds.cache.map(guild => guild.id));
    });

    client.once(Events.InteractionCreate, async (interaction: MessageContextMenuCommandInteraction):Promise<void> => {
        if (interaction.isCommand()) {
            for (const command of CommandList) {
                if (command.data.name === interaction.commandName) {
                    await command.run(interaction);
                    break;
                }
            }
        }
    });

    await client.login(process.env.DISCORD_BOT_TOKEN);
}

export async function getDiscordBotClient():Promise<Client> {
    return client;
}