function checkLength(clearCardNumber){

    if (clearCardNumber.length == 16 && clearCardNumber[0] == 5 && clearCardNumber[1] == 1 || clearCardNumber[0] == 5 && clearCardNumber[1] == 2 || clearCardNumber[0] == 5 && clearCardNumber[1] == 3 || clearCardNumber[0] == 5 && clearCardNumber[1] == 4 || clearCardNumber[0] == 5 && clearCardNumber[1] == 5 || clearCardNumber[0] == 2 && clearCardNumber[1] == 2) {

       return "MasterCard";


    } else if (clearCardNumber.length == 13 || clearCardNumber.length == 16 && clearCardNumber[0] == 4) {

        return "Visa";


    } else if (clearCardNumber.length == 15 && clearCardNumber[0] == 3 && clearCardNumber[1] == 4 || clearCardNumber[0] == 3 && clearCardNumber[1] == 7) {

        return "American Express";


    } else {

        return "Only Visa, Mastercard and American Express credit card checking is working!";

    }

}

export { checkLength };
