function validateForm1() {
    let title = document.forms["form1"][0].value;
    let date = document.forms["form1"][2].value;
    let oralMark = document.forms["form1"][3].value;
    let totalMark = document.forms["form1"][4].value;
    let course = document.forms["form1"][4].value;
    let errorMsg = "";

    if (title === "") {                                              /*Assignment Title validate */
        errorMsg = "* Required Field!!";
        document.getElementById("error-assignmentTitle").innerHTML = errorMsg;
    }
    else if (!isNaN(title)) {
        errorMsg="* Enter Title, Not Number";
        document.getElementById("error-assignmentTitle").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-assignmentTitle").innerHTML = errorMsg;
    }

    
    if (oralMark === "") {                                 /*Oral Mark validate */
        errorMsg = "* Required Field!";
        document.getElementById("error-oralMark").innerHTML = errorMsg;
    }
    else if (oralMark < 0 || oralMark > 100) {
        errorMsg = "* Enter Correct Oral Mark";
        document.getElementById("error-oralMark").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-oralMark").innerHTML = errorMsg;
    }

    if (totalMark === "") {                                 /*Oral Mark validate */
        errorMsg = "* Required Field!";
        document.getElementById("error-totalMark").innerHTML = errorMsg;
    }
    else if (totalMark < 0 || totalMark > 100) {
        errorMsg = "* Enter Correct Total Mark";
        document.getElementById("error-totalMark").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-totalMark").innerHTML = errorMsg;
    }
    
    if (course ==="") {                                           
        errorMsg = "* Required Field!";
        document.getElementById("error-course").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-course").innerHTML = errorMsg;
    }
}

/*Στη 2η φόρμα δεν βάζω υποχρεωτικά όλα τα πεδία, ώστε να μπορεί ο χρήστης να αλλάξει μόνο τα πεδία τα οποία διαφέρουν.*/

function validateForm2() {
    let selectAssignment = document.forms["form2"][0].value;
    let chOralMark = document.forms["form2"][4].value;
    let chTotalMark = document.forms["form2"][5].value;   
    let errorMsg2 = "";

    if (selectAssignment === "") {                                              /*Assignment Title validate */
        errorMsg2 = "* Required Field!";
        document.getElementById("error-selectAssignment").innerHTML = errorMsg;
        return false
    }
    else if (!isNaN(selectAssignment)) {
        errorMsg2 = "* Enter Title, Not Number";
        document.getElementById("error-selectAssignment").innerHTML = errorMsg;
        return false
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-selectAssignment").innerHTML = errorMsg;
    }

    if (chOralMark < 0 || chOralMark > 100) {
        errorMsg = "* Enter Correct Oral Mark";
        document.getElementById("error-chOralMark").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-chOralMark").innerHTML = errorMsg;
    }
    if (chTotalMark < 0 || chTotalMark > 100) {
        errorMsg = "* Enter Correct Oral Mark";
        document.getElementById("error-chTotalMark").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-chTotalMark").innerHTML = errorMsg;
    }

    
}