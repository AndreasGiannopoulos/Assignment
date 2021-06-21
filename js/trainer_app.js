function validateForm1() {
    let courseType = document.forms["form1"][0].value;
    let firstName = document.forms["form1"][1].value;
    let lastName = document.forms["form1"][2].value;
    let errorMsg = "";

    if (courseType === "") {
        errorMsg = "* Required Field!";
        document.getElementById("error-trainerSubject").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-trainerSubject").innerHTML = errorMsg;
    }

    if (firstName ==="") {
        errorMsg = "* Required Field!";
        document.getElementById("error-trainerFirstName").innerHTML = errorMsg;
    }
    else if (!isNaN(firstName)) {
        errorMsg = "* Enter Name, Not Number!";
        document.getElementById("error-trainerFirstName").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-trainerFirstName").innerHTML = errorMsg;
    }

    if (lastName ==="") {
        errorMsg = "* Required Field!";
        document.getElementById("error-trainerLastName").innerHTML = errorMsg;
    }
    else if (!isNaN(lastName)) {
        errorMsg = "* Enter Last Name Not Number!";
        document.getElementById("error-trainerLastName").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-trainerLastName").innerHTML = errorMsg;
    }

}


function validateForm2() {
    let selectTrainer = document.forms["form2"][0].value;
    let chTrainerFirstName = document.forms["form2"][1].value;
    let chTrainerLastName = document.forms["form2"][2].value;
    let errorMsg2 = "";

    if (selectTrainer === "") {
        errorMsg2 = "* Required Field!";
        document.getElementById("error-chSelectTrainer").innerHTML = errorMsg;
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-chSelectTrainer").innerHTML = errorMsg;
    }

    if (!isNaN(chTrainerFirstName)) {                                           
        errorMsg2 == "* Enter Name, Not Number!";
        document.getElementById("error-trainerFirstName").innerHTML = errorMsg;
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-trainerFirstName").innerHTML = errorMsg;
    }

    if (!isNaN(chTrainerLastName)) {                                           
        errorMsg2 == "* Enter Last Name Not Number!";
        document.getElementById("error-chTrainerLastName").innerHTML = errorMsg;
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-chTrainerLastName").innerHTML = errorMsg;
    }
}