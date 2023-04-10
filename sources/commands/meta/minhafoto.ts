import { SlashCommandBuilder } from "discord.js";

import { Command } from "../../interfaces/command";

export const minhafoto:Command = {
    data: new SlashCommandBuilder().setName("minhafoto").setDescription("Retorna a foto de seu perfil no discord."),
    run: async (interaction) => {
        await interaction.reply({
            files: [
                `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.webp?size=512`
            ],
            content: "Aqui está sua bela foto!\n"
        });
    }
};