function sortByHeight(arr) {
    let clonedArray = arr.map(item => item);
    let sortedFilteredArray = clonedArray.sort((a, b) => a-b).filter((item => item !== -1));
    let preparedArray = arr.map((item) => item === -1 ? item : undefined);

    let count = 0;
    for (let i = 0; i < preparedArray.length; i++) {
        if (preparedArray[i] === undefined) {
            preparedArray[i] = sortedFilteredArray[count];
            ++count;
        }
    }

    return preparedArray;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
