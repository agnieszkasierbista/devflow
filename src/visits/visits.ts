import {Conversations} from "../model/state";
import {ellaVisit} from "./ellaVisit";
import {mikeVisit} from "./mikeVisit";
import {randomDeveloperVisit} from "./randomDeveloperVisit";

export const visits: Conversations = {
    Ella: ellaVisit,
    Mike: mikeVisit,
    RandomDeveloper: randomDeveloperVisit,

}