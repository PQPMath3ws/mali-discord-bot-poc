import { Prisma } from "@prisma/client";
import { getPrismaClient } from "../config/database";

export async function removeLeavedGroup(server_id: number):Promise<void> {
    try {
        await getPrismaClient().$transaction([
            getPrismaClient().leavedServers.delete({
                where: {
                    server_id
                }
            })
        ]);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            console.log(`Primeira interação com o servidor de ID: ${server_id}!`);
        } else {
            console.log("Erro inesperado na função removeLeavedGroup!");
        }
    }
}

export async function joinGroup(server_id: number, server_name:string, owner_id:number):Promise<void> {
    await getPrismaClient().$transaction([
        getPrismaClient().joinedServers.create({
            data: {
                server_id,
                server_name,
                owner_id
            }
        })
    ]);
}

export async function removeJoinedGroup(server_id: number):Promise<void> {
    try {
        await getPrismaClient().$transaction([
            getPrismaClient().joinedServers.delete({
                where: {
                    server_id
                }
            })
        ]);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
            console.log(`Epa - algum erro aconteceu aqui com o servidor de ID: ${server_id}!`);
        } else {
            console.log("Erro inesperado na função removeJoinedGroup!");
        }
    }
}

export async function leaveGroup(server_id: number, server_name:string, owner_id:number):Promise<void> {
    await getPrismaClient().$transaction([
        getPrismaClient().leavedServers.create({
            data: {
                server_id,
                server_name,
                owner_id
            }
        })
    ]);
}