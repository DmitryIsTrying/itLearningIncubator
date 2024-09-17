const arr = [0,1,2,3]

export const noOdds = (values: number[]): number[]  => values.filter(e => !(e % 2))

console.log(noOdds(arr))