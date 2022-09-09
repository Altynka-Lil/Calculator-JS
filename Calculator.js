let operation = prompt('Что нужно вычислить?', 'II * V');

const arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100];
const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C'];

calculator(operation);

function calculator(str) {
    let arr = str.split(' ');
    if (arr.length != 3 || (!isArabic(arr[0], arr[2]) && !isRoman(arr[0], arr[2]))) {
        return alert('Формат введённой операции не поддерживается');
    } else {
        switch(arr[1]) {
            case '+':
                return alert(calcSum(arr[0], arr[2]));
                //break;
            case '-':
                return alert(calcDif(arr[0], arr[2]));
            case '*':
                return alert(calcMult(arr[0], arr[2]));
            case '/':
                return alert(calcDiv(arr[0], arr[2]));
            default:
                return alert('Такая операция не поддерживается');
        }
    }
}

function isArabic(num1, num2) {
    flag1 = flag2 = false;
    if (isFinite(num1) &&
        Math.trunc(num1) === +num1 &&
        (+num1 > 0 && +num1 < 11)) {
            flag1 = true;
        }
    if (isFinite(num2) &&
        Math.trunc(num2) === +num2 &&
        (+num2 > 0 && +num2 < 11)) {
            flag2 = true;
        }
    return (flag1 && flag2);
}

function isRoman(num1, num2) {
    flag1 = 'IVIIIX'.includes(num1);
    flag2 = 'IVIIIX'.includes(num2);
    return (flag1 && flag2);
}

function calcSum(num1, num2) {
    if (isArabic(num1, num2)) {
        return (+num1 + +num2);
    } else {
        num1 = romanToArabic(num1);
        num2 = romanToArabic(num2);
        return arabicToRoman(num1 + num2);
    }
}

function calcDif(num1, num2) {
    if (isArabic(num1, num2)) {
        return (+num1 - +num2);
    } else {
        num1 = romanToArabic(num1);
        num2 = romanToArabic(num2);
        return (num1 > num2) ? arabicToRoman(num1 - num2) : ' ';
    }
}

function calcMult(num1, num2) {
    if (isArabic(num1, num2)) {
        return (+num1 * +num2);
    } else {
        num1 = romanToArabic(num1);
        num2 = romanToArabic(num2);
        return arabicToRoman(num1 * num2);
    }
}

function calcDiv(num1, num2) {
    if (isArabic(num1, num2)) {
        return Math.trunc(+num1 / +num2);
    } else {
        num1 = romanToArabic(num1);
        num2 = romanToArabic(num2);
        return (num1 >= num2) ? arabicToRoman(Math.trunc(num1 / num2)) : alert('');
    }
}

function romanToArabic(str) {
    let arabicNum = 0;
    let pos = 0;
    let n = arabic.length - 1;
    while (n >= 0 && pos < str.length) {
        if (str.substr(pos, roman[n].length) == roman[n]) {
            arabicNum += arabic[n];
            pos += roman[n].length;
        } else n--;
    }
    return arabicNum;
}

function arabicToRoman(num) {    
    let romanNum = '';
    let n = arabic.length - 1;
    while (num > 0) {
        if (num >= arabic[n]) {
            romanNum += roman[n];
            num -= arabic[n];
        } else n--;
    }
    return romanNum;
}