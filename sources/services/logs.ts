import { getPrismaClient } from "../config/database";

export async function registerLog(user_id: number, server_id: number, command_name: string, activity_description: string, server_name: string):Promise<void> {
    await getPrismaClient().$transaction([
        getPrismaClient().activityLogs.create({
            data: {
                user_id,
                server_id,
                command_name,
                activity_description,
                server_name
            }
        })
    ]);
}