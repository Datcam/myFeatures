function matrixElementsSum(matrix) {
    let rememberGhost = [];
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] === 0) {
                rememberGhost.push(k);
            }
            if (matrix[i][k] !== 0) {
                if (rememberGhost.indexOf(k) === -1) result = result + matrix[i][k];
            }
        }
    }

    return result;
}
