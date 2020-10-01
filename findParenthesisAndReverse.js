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
                    stringLetters = '';
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


// Second dession
function reverseInParentheses(s) {
    var reverse = (str) => str.split('').reverse().join('');

    while (s.includes('(')) {
        var l = s.lastIndexOf('(');
        var r = s.indexOf(')', s.lastIndexOf('('));
        s = s.slice(0, l) + reverse(s.slice(l + 1, r)) + (r + 1 === s.length ? s.slice(r, -1) : s.slice(r + 1));
    }
    return s;
}
