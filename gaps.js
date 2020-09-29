function makeArrayConsecutive2(statues) {
    let sortedArr = statues.sort((a, b) => a-b);
    let gaps = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        let valuatedValue = sortedArr[i+1] - sortedArr[i];
        if (valuatedValue > 1) {
            gaps = gaps + (valuatedValue - 1);
        }
    }

    return gaps;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
