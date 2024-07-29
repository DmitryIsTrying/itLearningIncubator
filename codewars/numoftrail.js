function zeros(n) {
    let countZeros = 0;
    
    for (let i = 5; n / i >= 1; i *= 5) {
        countZeros += Math.floor(n / i);
    }

    return countZeros;
}