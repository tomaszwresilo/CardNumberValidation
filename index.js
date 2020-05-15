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


        const countInTable1 = [];
        const countInTable2 = [];



        if (clearCardNumber.length % 2 == 0) {

            clearCardNumber.forEach((el, index) => {
                if (index % 2 != 0) {
                    countInTable2.push(parseInt(el))
                }
                if (index % 2 == 0) {
                    countInTable1.push(parseInt(el * 2))
                }
            })
        }

        if (clearCardNumber.length % 2 != 0) {

            clearCardNumber.forEach((el, index) => {
                if (index % 2 == 0) {
                    countInTable2.push(parseInt(el))
                }
                if (index % 2 != 0) {
                    countInTable1.push(parseInt(el * 2))
                }
            })
        }


        const splitcountInTable1 = countInTable1.toString().split(',').join('').split('');

        let total1 = 0;

        for (const el of splitcountInTable1) {
            total1 += parseInt(el);
        }

        let total2 = 0;

        for (const el of countInTable2) {
            total2 += el;
        }




        if ([total1 + total2] % 10 != 0) {
            document.getElementById("resolut").innerHTML = `Invalid number!`;
        }


        if ([total1 + total2] % 10 == 0) {
            console.log("passed");


            if (clearCardNumber.length == 16 && clearCardNumber[0] == 5 && clearCardNumber[1] == 1 || clearCardNumber[0] == 5 && clearCardNumber[1] == 2 || clearCardNumber[0] == 5 && clearCardNumber[1] == 3 || clearCardNumber[0] == 5 && clearCardNumber[1] == 4 || clearCardNumber[0] == 5 && clearCardNumber[1] == 5 || clearCardNumber[0] == 2 && clearCardNumber[1] == 2) {

                document.getElementById("resolut").innerHTML = "MasterCard"
            } else if (clearCardNumber.length == 13 || clearCardNumber.length == 16 && clearCardNumber[0] == 4) {

                document.getElementById("resolut").innerHTML = "Visa";
            } else if (clearCardNumber.length == 15 && clearCardNumber[0] == 3 && clearCardNumber[1] == 4 || clearCardNumber[0] == 3 && clearCardNumber[1] == 7) {

                document.getElementById("resolut").innerHTML = "American Express";
            } else {
                document.getElementById("resolut").innerHTML = "Only Visa, Mastercard and American Express checking is working!";
            }

        }


    }

}
