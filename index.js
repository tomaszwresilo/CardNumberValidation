import './style/normalize.css';
import './style/style.css';
import {checkLuhn} from './scripts/luhn';
import {checkLength} from './scripts/length'

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

        if (checkLuhn(clearCardNumber) == false) {
            document.getElementById("resolut").innerHTML = `Invalid number!`;
        }


        if (checkLuhn(clearCardNumber) == true) {

            document.getElementById("resolut").innerHTML = checkLength(clearCardNumber);

        }

    }
    document.getElementById("cardnumber").value = "";
    }
