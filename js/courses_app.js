function validateForm1() {
    let title = document.forms["form1"][0].value;
    let classLVL = document.forms["form1"][1].value;
    let type = document.forms["form1"][2].value;
    let courseStartDate = document.forms["form1"][3].value;
    let courseEndDate = document.forms["form1"][4].value;
    let errorMsg = "";

    if (title === "") {                                              /*Course Title validate */
        errorMsg = "* Required Field!";
        document.getElementById("error-courseTitle").innerHTML = errorMsg;
    }
    else if (!isNaN(title)) {
        errorMsg="* Enter Title, Not Number!";
        document.getElementById("error-courseTitle").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-courseTitle").innerHTML = errorMsg;
    }

    if (classLVL ==="") {                                           /*Class validate */
        errorMsg = "* Required Field!";
        document.getElementById("error-selectClass").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-selectClass").innerHTML = errorMsg;
    }

    if (type ==="") {                                           /*Course Type validate */
        errorMsg = "* Required Field!";
        document.getElementById("error-courseType").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-courseType").innerHTML = errorMsg;
    }

    if (courseStartDate ==="") {                                           
        errorMsg = "* Required Field!";
        document.getElementById("error-courseStartDate").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-courseStartDate").innerHTML = errorMsg;
    }

    if (courseEndDate ==="") {                                           
        errorMsg = "* Required Field!";
        document.getElementById("error-courseEndDate").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-courseEndDate").innerHTML = errorMsg;
    }

    if (courseStartDate  > courseEndDate) {                                           
        errorMsg = "* Enter Correct Start Date/End Date";
        document.getElementById("error-courseStartDate").innerHTML = errorMsg;
        document.getElementById("error-courseEndDate").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-courseStartDate").innerHTML = errorMsg;
        document.getElementById("error-courseEndDate").innerHTML = errorMsg;
    }


}

/*Στη 2η φόρμα δεν βάζω υποχρεωτικά όλα τα πεδία, ώστε να μπορεί ο χρήστης να αλλάξει μόνο τα πεδία τα οποία διαφέρουν.*/

function validateForm2() {
    let selectCourse = document.forms["form2"][0].value;
    let chCourseStartDate = document.forms["form2"][4].value;
    let chCourseEndDate = document.forms["form2"][5].value;;
    let errorMsg2 = "";

    if (selectCourse === "") {  /*Εφόσον πατήσει Αποθήκευση πρέπει να έχει επιλεγεί ο μαθητής που θα γίνουν οι αλλαγές */   
        errorMsg2 = "* Select Stutent";
        document.getElementById("error-chSelectCourse").innerHTML = errorMsg2;
    }    
    else {
        errorMsg2 = "";
        document.getElementById("error-chSelectCourse").innerHTML = errorMsg2;
    }

    if (chCourseStartDate  > chCourseEndDate) {                                           
        errorMsg = "* Enter Correct Start Date/End Date";
        document.getElementById("error-chCourseStartDate").innerHTML = errorMsg;
        document.getElementById("error-chCourseEndDate").innerHTML = errorMsg;
    }
    else {
        errorMsg = "";
        document.getElementById("error-chCourseStartDate").innerHTML = errorMsg;
        document.getElementById("error-chCourseEndDate").innerHTML = errorMsg;
    }
}