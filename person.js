function persons () {
    var personsArray = [];
    return function (firstName, lastName, email, phoneNumber) {
        var personObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        }
        personsArray.push(personObj);
        console.log("list of person : "+ JSON.stringify(personsArray));//stringify to see the result
    }
}
var person = new persons();
person("rajesha", "maravanthe", "rraajjpoojary@gmail.com", "9742019118"); // call persons and invoke immediatly for closure
person("adfa", "adfa", "adfa@gmail.com", "23423452452");
person("asdsadsa", "qweqw", "cvcvcv@gmail.com", "34534633");
person("acada", "adcvdfw", "wwwss@gmail.com", "675675474");