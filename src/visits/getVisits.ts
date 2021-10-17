import {Conversations} from "../model/state";
import {getEllaVisit} from "./getEllaVisit";
import {mikeVisit} from "./mikeVisit";
import {randomDeveloperVisit} from "./randomDeveloperVisit";

export const getVisits: (playerName: string) => Conversations = (playerName) => ({
    Ella: getEllaVisit(playerName),
    Mike: mikeVisit,
    "Random Developer": randomDeveloperVisit,

})