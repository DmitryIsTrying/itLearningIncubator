function removeSmallest(numbers) {
    let newArray = [...numbers]
    let indexSort = newArray.indexOf(Math.min(...newArray));
    newArray.splice(indexSort, 1);
    return newArray;
}