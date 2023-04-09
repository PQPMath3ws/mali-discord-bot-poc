import { Interaction } from "discord.js";

import { CommandList } from "../commands/index";
import { Command } from "../interfaces/command";
import { errorHandler } from "../utils/error_handling";

export const onInteraction = async (interaction: Interaction):Promise<void> => {
    try {
        if (interaction.isCommand()) {
        }
    } catch (error) {
        errorHandler("onInteraction event", error);
    }
};