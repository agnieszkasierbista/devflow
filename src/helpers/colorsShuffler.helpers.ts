import {Puzzle} from "../model/state";
import * as R from 'ramda';

export const getRandomColors = (colors: string[], allColors: string[]): string => {

    const colorsToChooseFrom = R.symmetricDifference(allColors, colors);
    const maxIndex = colorsToChooseFrom.length - 1;
    const df = Math.random() * (maxIndex);

    return colorsToChooseFrom[Math.round(df)];
}

export const getArrayOfShuffledColors = (items: Puzzle['items'], allColors: string[]) => {

    return items.reduce((acc, item) => {
        return {
            ...acc,
            [item]: getRandomColors(Object.values(acc), allColors)
        }
    }, {})
}
