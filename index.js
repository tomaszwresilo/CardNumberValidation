import './style/normalize.css';
import './style/style.css';


document.getElementById("check").onclick = function verifySupplier() {

    const input = document.getElementById("cardnumber").value;



    if (input === "") {
        document.getElementById("resolut").innerHTML = `Pleas enter something :)`;

    } else {


        const clearCardNumber = [];
        for (const el of input.toString().split('')) {
            if (el !== '-' && el !== ' ') {
                clearCardNumber.push(el)
            }
        }


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




        if ([totalCountOddNumbers + totalCountEvenNumbers] % 10 != 0) {
            document.getElementById("resolut").innerHTML = `Invalid number!`;
        }


        if ([totalCountOddNumbers + totalCountEvenNumbers] % 10 == 0) {


            if (clearCardNumber.length == 16 && clearCardNumber[0] == 5 && clearCardNumber[1] == 1 || clearCardNumber[0] == 5 && clearCardNumber[1] == 2 || clearCardNumber[0] == 5 && clearCardNumber[1] == 3 || clearCardNumber[0] == 5 && clearCardNumber[1] == 4 || clearCardNumber[0] == 5 && clearCardNumber[1] == 5 || clearCardNumber[0] == 2 && clearCardNumber[1] == 2) {

                document.getElementById("resolut").innerHTML = "MasterCard"
            } else if (clearCardNumber.length == 13 || clearCardNumber.length == 16 && clearCardNumber[0] == 4) {

                document.getElementById("resolut").innerHTML = "Visa";
            } else if (clearCardNumber.length == 15 && clearCardNumber[0] == 3 && clearCardNumber[1] == 4 || clearCardNumber[0] == 3 && clearCardNumber[1] == 7) {

                document.getElementById("resolut").innerHTML = "American Express";
            } else {
                document.getElementById("resolut").innerHTML = "Only Visa, Mastercard and American Express credit card checking is working!";
            }

        }


    }
    document.getElementById("cardnumber").value = "";
}
