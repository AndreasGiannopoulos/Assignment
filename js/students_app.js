function validateForm1() {
    let name = document.forms["form1"][0].value;
    let lastName = document.forms["form1"][1].value;
    let month = document.forms["form1"][2].value;
    let date = document.forms["form1"][3].value;
    let year = document.forms["form1"][4].value;
    let fees = document.forms["form1"][5].value;
    let course = document.forms["form1"][6].value;
    let errorMsg = "";

    if (name === "") {                                              /*Name validate */
        errorMsg = "* Required Field!";
        document.getElementById("error-name").innerHTML = errorMsg;
    }
    else if (!isNaN(name)) {
        errorMsg="* Enter Name, Not Number!";
        document.getElementById("error-name").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-name").innerHTML = errorMsg;
    }

    if (lastName ==="") {                                           /*Lastname validate */
        errorMsg = "* Required Field!";
        document.getElementById("error-lastName").innerHTML = errorMsg;
    }
    else if (!isNaN(lastName)) {
        errorMsg = "* Enter Last Name Not Number!";
        document.getElementById("error-lastName").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-lastName").innerHTML = errorMsg;
    }

    if ( month === "" || date === "" || year === "") {              /*Birthday validate */
        errorMsg = "* All Three Are Required Field!";
        document.getElementById("error-date").innerHTML = errorMsg;
    }
    else if (year < 2002 || year >= 2020) {                         /*Ηληκία για μαθητές σχολίου   2 ετων(νηπιαγωγείο) <ηληκία μαθητή < 19 ετών */
        errorMsg = "* Enter Correct Year Of Birth";
        document.getElementById("error-date").innerHTML = errorMsg;
    }    
    else {
        errorMsg = "";
        document.getElementById("error-date").innerHTML = errorMsg;
    }

    if (fees < 500 || fees >5000) {                                 /*Fees validate */
        errorMsg = "* Enter Correct Fees";
        document.getElementById("error-fees").innerHTML = errorMsg;
    }
    else if (isNaN(fees)) {
        errorMsg = "* Enter Numbers!";
        document.getElementById("error-fees").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-fees").innerHTML = errorMsg;
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
    let chStudent = document.forms["form2"][0].value;
    let chName = document.forms["form2"][1].value;
    let chLastName = document.forms["form2"][2].value;
    let chMonth = document.forms["form2"][3].value;
    let chDate = document.forms["form2"][4].value;
    let chYear = document.forms["form2"][5].value;
    let chFees = document.forms["form2"][6].value;
    let errorMsg2 = "";

    if (chStudent === "") {     /*Εφόσον πατήσει Αποθήκευση πρέπει να έχει επιλεγεί ο μαθητής που θα γίνουν οι αλλαγές */
        errorMsg2 = "* Select Student";
        document.getElementById("error-chStudent").innerHTML = errorMsg2;
    }    
    else {
        errorMsg2 = "";
        document.getElementById("error-chStudent").innerHTML = errorMsg2;
    }

    if (chName === "") {
        return true;
    }
    else if (!isNaN(chName)) {
        errorMsg2 = "* Enter Name, Not Number";
        document.getElementById("error-chstudentFirstName").innerHTML = errorMsg2;
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-chstudentFirstName").innerHTML = errorMsg2;
    }

    if (chLastName === "") {
        return true;
    }
    else if (!isNaN(chLastName)) {
        errorMsg2 = "* Enter Last Name Not Number!";
        document.getElementById("error-chStudentLastName").innerHTML = errorMsg2;
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-chStudentLastName").innerHTML = errorMsg2;
    }

    if (chYear < 2002 || chYear >= 2020) {
        errorMsg = "* Enter Correct Year Of Birth";
        document.getElementById("error-chDate").innerHTML = errorMsg;
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-chDate").innerHTML = errorMsg2;
    } 

    if (chFees < 500 || chFees >5000) {
        errorMsg2 = "* Enter Correct Fees!";
        document.getElementById("error-chfees").innerHTML = errorMsg2;
    }
    else if (isNaN(chFees)) {
        errorMsg2 = "* Enter Numbers!";
        document.getElementById("error-chfees").innerHTML = errorMsg2;
    }
    else {
        errorMsg2 = "";
        document.getElementById("error-chfees").innerHTML = errorMsg2;
    }


}