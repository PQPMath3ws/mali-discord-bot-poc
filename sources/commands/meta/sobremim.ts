import { SlashCommandBuilder } from "discord.js";

import { Command } from "../../interfaces/command";

export const sobremim:Command = {
  data: new SlashCommandBuilder().setName("sobremim").setDescription("Quem sou eu?"),
  run: async (interaction) => {
      await interaction.reply("**Olá! - Me chamo MaLi e sou um bot simples vindo de uma PoC. Fui desenvolvido pelo desenvolvedor *Mathews Martins*. Sou um projeto Open-Source, e para saber mais sobre mim, eu estou presente aqui: https://github.com/PQPMath3ws/mali-discord-bot-poc . That's it!**");
  }
};
