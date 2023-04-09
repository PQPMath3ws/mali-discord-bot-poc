import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { Routes, REST, RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";

import { Command } from "../interfaces/command";

dotenv.config();

const commands:Array<RESTPostAPIChatInputApplicationCommandsJSONBody> = [];

const commandsFolderPath = path.join(__dirname + "/../commands");
const commandsFolders = fs.readdirSync(commandsFolderPath).filter(value => value !== "index.ts");

commandsFolders.forEach(async (commandFolder) => {
    const commandsPath = path.join(commandsFolderPath, commandFolder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

    for (const commandFile of commandFiles) {
        const filePath = path.join(commandsPath, commandFile);
        const command:Command = (await import(filePath))[commandFile.replace(".ts", "")] as Command;
        commands.push(command.data.toJSON());
    }
});

const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);

export async function refreshBotCommands(guildsIds: Array<string>):Promise<void> {
    try {
        console.log(`Atualizando todos os ${commands.length} comandos do bot nos ${guildsIds.length} servers em que ele está, aguarde...`);

        guildsIds.forEach(async (guildId: string, index:number):Promise<void> => {
            await rest.put(
                Routes.applicationGuildCommands(process.env.DISCORD_BOT_CLIENT_ID, guildId),
                {
                    body: commands
                }
            );
            console.log(`${index  + 1}º servidor atualizado.`);
        });
    } catch (error) {
        console.error(error);
    }
}