export function arrayDiff(a: any[], b: any[]): any[] {
    const diff = a.filter(x => !b.includes(x))
    return diff
}