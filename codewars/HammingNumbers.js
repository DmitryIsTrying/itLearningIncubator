function hamming (n) {
    let hammingNumbers = [1];
    let i = 0, j = 0, k = 0;
    let next2 = 2, next3 = 3, next5 = 5;

    for (let count = 1; count < n; count++) {
        let nextHamming = Math.min(next2, next3, next5);
        hammingNumbers[count] = nextHamming;

        if (nextHamming === next2) {
            i++;
            next2 = hammingNumbers[i] * 2;
        }
        if (nextHamming === next3) {
            j++;
            next3 = hammingNumbers[j] * 3;
        }
        if (nextHamming === next5) {
            k++;
            next5 = hammingNumbers[k] * 5;
        }
    }

    return hammingNumbers[n - 1];
}