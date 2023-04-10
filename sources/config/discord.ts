import { Client, Events, GatewayIntentBits, Guild, MessageContextMenuCommandInteraction, Partials } from "discord.js";

import { refreshBotCommands } from "./deploy_discord_commands";
import { CommandList } from "../commands/index";
import { joinGroup, leaveGroup, removeJoinedGroup, removeLeavedGroup, updateJoinedGroup } from "../services/groups";
import { registerLog } from "../services/logs";

let client:Client;

export async function initializeDiscordBot():Promise<void> {
    client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent], partials: [Partials.Channel] });

    client.once(Events.ClientReady, async (client: Client) => {
        console.log("Estou feliz - ESTOU VIVO!");
        await refreshBotCommands(client.guilds.cache.map(guild => guild.id));
    });

    client.once(Events.GuildCreate, async (guild: Guild) => {
        await removeLeavedGroup(Number(guild.id));
        await joinGroup(Number(guild.id), guild.name, Number(guild.ownerId));
        await registerLog(Number(guild.ownerId), Number(guild.id), null, `Entrei no servidor ${guild.name}!`, guild.name);
        await refreshBotCommands(client.guilds.cache.map(guild => guild.id));
        console.log(`Ganhei vida no server ${guild.name}!`);
    });

    client.once(Events.GuildDelete, async (guild: Guild) => {
        await removeJoinedGroup(Number(guild.id));
        await leaveGroup(Number(guild.id), guild.name, Number(guild.ownerId));
        await registerLog(Number(guild.ownerId), Number(guild.id), null, `Saí do servidor ${guild.name}!`, guild.name);
        console.log(`No grupo ${guild.name}, fui de comes e bebes...`);
    });

    client.once(Events.GuildUpdate, async (guild: Guild) => {
        await updateJoinedGroup(Number(guild.id), guild.name, Number(guild.ownerId));
    });

    client.on("interactionCreate", async (interaction: MessageContextMenuCommandInteraction):Promise<void> => {
        if (interaction.isCommand()) {
            for (const command of CommandList) {
                if (command.data.name === interaction.commandName) {
                    await command.run(interaction);
                    await registerLog(Number(interaction.user.id), Number(interaction.guild.id), interaction.commandName, `O usuário ${interaction.user.username}#${interaction.user.discriminator} executou o /${interaction.commandName} no server ${interaction.guild.name}!`, interaction.guild.name);
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