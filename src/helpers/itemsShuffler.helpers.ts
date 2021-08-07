import * as R from "ramda";

export function shuffleArrayItems(items: string[]): string[] {

    const diff = function () {
        return Math.random() - 0.5
    }

    return R.sort(diff, items);

}
