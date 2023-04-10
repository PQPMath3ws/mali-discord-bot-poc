import { SlashCommandBuilder } from "discord.js";

import { Command } from "../../interfaces/command";
import { countGroups } from "../../services/groups";

export const contaservers:Command = {
    data: new SlashCommandBuilder().setName("contaservers").setDescription("Em quantos servidores eu estou?"),
    run: async (interaction) => {
        const countgroups:number = await countGroups();
        await interaction.reply(`**Eu estou presente em ${countgroups} ${countgroups === 1 ? "servidor" : "servidores"} nesse exato momento!**`);
    }
};