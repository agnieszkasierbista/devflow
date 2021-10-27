export function arrayDiff<T>(a: T[], b: T[]): T[] {
    const diff = a.filter(x => !b.includes(x))
    return diff
}