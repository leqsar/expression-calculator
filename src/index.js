function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arr,
        amountOfOpenBrackets = 0,
        amountOfClosingBrackets = 0;
    if (expr.indexOf(' ') == -1) {
        arr = expr.split('');
    } else {
        arr = expr.split(' ');
    }
    expr.split('').forEach((item, i) => {
        if (item == '(') amountOfOpenBrackets++;
        if (item == ')') amountOfClosingBrackets++;
    });
    if (amountOfOpenBrackets !== amountOfClosingBrackets) {
        throw new Error("ExpressionError: Brackets must be paired");
    }
    let stek = [];
    let rez;
    function exptression (array) {
            while (array.indexOf('/') !== -1) {
            let indexOfD = array.indexOf('/');
            if (array[indexOfD+1] == 0) {
                throw new TypeError('TypeError: Division by zero.')
            }else {
                rez = array[indexOfD-1]/array[indexOfD+1];
                array.splice(indexOfD-1, 3, rez);
            }
            };
            while (array.indexOf('*') !== -1) {
                let indexOfMult = array.indexOf('*');
                rez = array[indexOfMult-1]*array[indexOfMult+1];
                array.splice(indexOfMult-1, 3, rez);
            };
            while (array.indexOf('-') !== -1) {
                let indexOfM = array.indexOf('-');
                rez = array[indexOfM-1]-array[indexOfM+1];
                array.splice(indexOfM-1, 3, rez);
            };
            while (array.indexOf('+') !== -1) {
                let indexOfSum = array.indexOf('+');
                rez = Number(array[indexOfSum-1])+Number(array[indexOfSum+1]);
                array.splice(indexOfSum-1, 3, rez);
            };
    }
    arr.forEach((elem, i) => {
        if(elem === '') {
            arr.splice(i, 1);
        }
    });
    let newArr = [];
    arr.forEach((item, i) => {
        stek.push(item);
        if (item == ')') {
            let a = stek.lastIndexOf('(');
            stek.forEach((elem, ind) => {
                if((ind>a) && (ind<i)){
                    newArr.push(elem);
                }
            });
            exptression(newArr);
            stek.splice(a,i-a+2,newArr[0]);
            newArr = [];
        }
    });
    exptression(stek);
    return stek[0];
}

module.exports = {
    expressionCalculator
}
