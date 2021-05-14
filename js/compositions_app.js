function validateForm1() {
    let trainerCourse1 = document.forms["form1"][0].value;
    let trainerCourse2 = document.forms["form1"][1].value;

    if (trainerCourse1 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-trainerCourse1").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-trainerCourse1").innerHTML = errorMsg;
    }

    if (trainerCourse2 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-trainerCourse2").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-trainerCourse2").innerHTML = errorMsg;
    }
}

function validateForm2() {
    let studentCourse1 = document.forms["form2"][0].value;
    let studentCourse2 = document.forms["form2"][1].value;

    if (studentCourse1 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-studentCourse1").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-studentCourse1").innerHTML = errorMsg;
    }

    if (studentCourse2 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-studentCourse2").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-studentCourse2").innerHTML = errorMsg;
    }
}

function validateForm3() {
    let assignmentCourse1 = document.forms["form3"][0].value;
    let assignmenttCourse2 = document.forms["form3"][1].value;

    if (assignmentCourse1 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-assignmentCourse1").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-assignmentCourse1").innerHTML = errorMsg;
    }

    if (assignmenttCourse2 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-assignmenttCourse2").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-assignmenttCourse2").innerHTML = errorMsg;
    }
}

function validateForm4() {
    let assignmentstudenttcourse1 = document.forms["form4"][0].value;
    let assignmentstudenttcourse2 = document.forms["form4"][1].value;
    let assignmentstudenttcourse3 = document.forms["form4"][2].value;

    if (assignmentstudenttcourse1 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-assignmentstudenttcourse1").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-assignmentstudenttcourse1").innerHTML = errorMsg;
    }

    if (assignmentstudenttcourse2 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-assignmentstudenttcourse2").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-assignmentstudenttcourse2").innerHTML = errorMsg;
    }

    if (assignmentstudenttcourse3 === "") {                                              
        errorMsg = "* Required Field!";
        document.getElementById("error-assignmentstudenttcourse3").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-assignmentstudenttcourse3").innerHTML = errorMsg;
    }
}