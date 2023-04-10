import { criador } from "./meta/criador";;
import { ping } from "./fun/ping";

import { Command } from "../interfaces/command";

export const CommandList:Command[] = [ criador, ping ];