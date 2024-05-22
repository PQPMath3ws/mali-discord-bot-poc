import { criador } from "./meta/criador";;
import { contaservers } from "./meta/contaservers";
import { minhafoto } from "./meta/minhafoto";
import { sobremim } from './meta/sobremim';
import { ping } from "./fun/ping";

import { Command } from "../interfaces/command";

export const CommandList:Command[] = [ criador, contaservers, minhafoto, sobremim, ping ];