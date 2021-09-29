import {funnyDogsPath, funnyKittensPath, funnyLizardsPath} from "../model/paths";

export const filesMemoryGame = [
    {
        fileName: "Funny Kittens",
        items: ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8"],
        shuffledItems: [],
        taskType: "memoryGame",
        path: funnyKittensPath,
        component: "web_browser",
    },
    {
        fileName: "Funny Dogs",
        items: ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10"],
        shuffledItems: [],
        taskType: "memoryGame",
        path: funnyDogsPath,
        component: "web_browser",
    },
    {
        fileName: "Funny Lizards",
        items: ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6",
            "7", "7", "8", "8", "9", "9", "10", "10", "11", "11", "12", "12"],
        shuffledItems: [],
        taskType: "memoryGame",
        path: funnyLizardsPath,
        component: "web_browser",
    },
];