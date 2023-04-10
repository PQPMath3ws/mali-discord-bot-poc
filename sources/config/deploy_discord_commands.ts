import fs from "node:fs";
import path from "node:path";
import { Routes, REST, RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";

import { Command } from "../interfaces/command";

export async function refreshBotCommands(guildsIds: Array<string>):Promise<void> {
    const commands:Array<RESTPostAPIChatInputApplicationCommandsJSONBody> = [];
    
    const commandsFolderPath = path.join(__dirname + "/../commands");
    const commandsFolders = fs.readdirSync(commandsFolderPath).filter(value => value !== "index.ts");

    for (const commandFolder of commandsFolders) {
        const commandsPath = path.join(commandsFolderPath, commandFolder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

        for (const commandFile of commandFiles) {
            const filePath = path.join(commandsPath, commandFile);
            const command:Command = (await import(filePath))[commandFile.replace(".ts", "")] as Command;
            if (command) commands.push(command.data.toJSON());
        }
    }
    
    const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN);
    
    try {
        console.log(`Atualizando todos os ${commands.length} comandos do bot nos ${guildsIds.length} servers em que ele está, aguarde...`);

        guildsIds.forEach(async (guildId: string):Promise<void> => {
            await rest.put(
                Routes.applicationGuildCommands(process.env.DISCORD_BOT_CLIENT_ID, guildId),
                {
                    body: commands
                }
            );
        });

        console.log("Payloads de atualização dos comandos do bot nos servidores enviado com sucesso!");
    } catch (error) {
        console.error(error);
    }
}