import { SlashCommandBuilder } from "discord.js";

import { Command } from "../../interfaces/command";

export const criador:Command = {
    data: new SlashCommandBuilder().setName("criador").setDescription("Quem criou esse bot?"),
    run: async (interaction) => {
        await interaction.reply("**Esse bot foi desenvolvido pelo desenvolvedor *Mathews Martins*. Veja mais projetos dele em https://github.com/PQPMath3ws .**");
    }
};