import { CommandInteraction } from "discord.js";
import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";

export interface Command {
    data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}