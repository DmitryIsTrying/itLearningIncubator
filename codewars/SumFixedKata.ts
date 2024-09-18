export function SeriesSum(n: number): string {
    if (n === 0) {
        return '0.00'
    }
    let result = 1.00
    let count = 4;
    for (let i = 1; i < n; ++i) {
        result += 1 / count
        count += 3;
    }
    return result.toFixed(2).toString()
}