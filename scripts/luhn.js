function checkLuhn(clearCardNumber) {

    const countInTableOddNumbers = [];
    const countInTableEvenNumbers = [];


    if (clearCardNumber.length % 2 == 0) {

        clearCardNumber.forEach((el, index) => {
            if (index % 2 != 0) {
                countInTableEvenNumbers.push(parseInt(el))
            }
            if (index % 2 == 0) {
                countInTableOddNumbers.push(parseInt(el * 2))
            }
        })
    }

    if (clearCardNumber.length % 2 != 0) {

        clearCardNumber.forEach((el, index) => {
            if (index % 2 == 0) {
                countInTableEvenNumbers.push(parseInt(el))
            }
            if (index % 2 != 0) {
                countInTableOddNumbers.push(parseInt(el * 2))
            }
        })
    }


    const countInTableOddNumbersSplited = countInTableOddNumbers.toString().split(',').join('').split('');

    let totalCountOddNumbers = 0;

    for (const el of countInTableOddNumbersSplited) {
        totalCountOddNumbers += parseInt(el);
    }

    let totalCountEvenNumbers = 0;

    for (const el of countInTableEvenNumbers) {
        totalCountEvenNumbers += el;
    }

    return [totalCountOddNumbers + totalCountEvenNumbers] % 10 == 0;

}

export {
    checkLuhn
};
