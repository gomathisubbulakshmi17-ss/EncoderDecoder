let code = "";

function encodeData() {

    let category = document.getElementById("category").value;

    if (category == "Student") {
        code = "0000";
    }
    else if (category == "Teacher") {
        code = "0001";
    }
    else if (category == "Admin") {
        code = "0010";
    }
    else if (category == "Guest") {
        code = "0011";
    }
    else if (category == "Doctor") {
        code = "0100";
    }
    else if (category == "Engineer") {
        code = "0101";
    }
    else if (category == "Manager") {
        code = "0110";
    }
    else if (category == "Staff") {
        code = "0111";
    }
    else if (category == "Principal") {
        code = "1000";
    }
    else if (category == "Security") {
        code = "1001";
    }
    else {
        alert("Please select a category.");
        return;
    }

    document.getElementById("encoded").innerHTML = code;
}

function decodeData() {

    let result = "";

    if (code == "0000") {
        result = "Student";
    }
    else if (code == "0001") {
        result = "Teacher";
    }
    else if (code == "0010") {
        result = "Admin";
    }
    else if (code == "0011") {
        result = "Guest";
    }
    else if (code == "0100") {
        result = "Doctor";
    }
    else if (code == "0101") {
        result = "Engineer";
    }
    else if (code == "0110") {
        result = "Manager";
    }
    else if (code == "0111") {
        result = "Staff";
    }
    else if (code == "1000") {
        result = "Principal";
    }
    else if (code == "1001") {
        result = "Security";
    }
    else {
        result = "Invalid Code";
    }

    document.getElementById("decoded").innerHTML = result;
}

function decodeInput() {

    let input = document.getElementById("binaryCode").value;
    let result = "";

    if (input == "0000") {
        result = "Student";
    }
    else if (input == "0001") {
        result = "Teacher";
    }
    else if (input == "0010") {
        result = "Admin";
    }
    else if (input == "0011") {
        result = "Guest";
    }
    else if (input == "0100") {
        result = "Doctor";
    }
    else if (input == "0101") {
        result = "Engineer";
    }
    else if (input == "0110") {
        result = "Manager";
    }
    else if (input == "0111") {
        result = "Staff";
    }
    else if (input == "1000") {
        result = "Principal";
    }
    else if (input == "1001") {
        result = "Security";
    }
    else {
        result = "Invalid Code";
    }

    document.getElementById("decoded").innerHTML = result;
}

function resetData() {

    code = "";

    document.getElementById("category").value = "";
    document.getElementById("encoded").innerHTML = "";
    document.getElementById("decoded").innerHTML = "";
    document.getElementById("binaryCode").value = "";
}