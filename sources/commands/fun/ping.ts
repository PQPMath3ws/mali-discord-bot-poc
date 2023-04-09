import { SlashCommandBuilder } from "discord.js";

import { Command } from "../../interfaces/command";

export const ping:Command = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Responde com *pong*!"),
    run: async (interaction) => {
        await interaction.reply("**Pong!**");
    }
};