function reverseInParentheses(inputString) {
    let openParenthesisCode = 40;
    let closeParenthesisCode = 41;
    let stringLetters = '';
    let resultedString = '';
    let isOpenCloseParenthesis = false;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].charCodeAt() === openParenthesisCode) {
            resultedString = resultedString + inputString[i];
            isOpenCloseParenthesis = true;
        } else if (inputString[i].charCodeAt() === closeParenthesisCode) {
            isOpenCloseParenthesis = false;
            if (!isOpenCloseParenthesis) {
                if (stringLetters.length > 0) {
                    resultedString = resultedString + stringLetters.split('').reverse().join('') + inputString[i];
                }
            }
        } else if (isOpenCloseParenthesis) {
            stringLetters = stringLetters + inputString[i];
//             if (isOpenCloseParenthesis) {
//                 inputString.split('').splice(whereToInsert, 0, arrayLetters.split('').reverse().join(''));
//             }
        } else {
            resultedString = resultedString + inputString[i];
        }
    }
    console.log(resultedString);
}

// reverseInParentheses('hello (I am(from Odessa)and(I am(good))(developer))(Have a good)day');
reverseInParentheses('Hello ((myskaM ma I ,))');
