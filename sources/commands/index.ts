import { criador } from "./meta/criador";;
import { contaservers } from "./meta/contaservers";
import { ping } from "./fun/ping";

import { Command } from "../interfaces/command";

export const CommandList:Command[] = [ criador, contaservers, ping ];