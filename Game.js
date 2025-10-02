
flag = 1;

function myfunc() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
    
    let isGameOver = false;

    function disable_all_boxes() {
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        isGameOver = true;
    }

    if ((b1 == "x" || b1 == "X") && (b2 == "x" || b2 == "X") && (b3 == "x" || b3 == "X") ||
        (b1 == "x" || b1 == "X") && (b4 == "x" || b4 == "X") && (b7 == "x" || b7 == "X") ||
        (b1 == "x" || b1 == "X") && (b5 == "x" || b5 == "X") && (b9 == "x" || b9 == "X") ||
        (b4 == "x" || b4 == "X") && (b5 == "x" || b5 == "X") && (b6 == "x" || b6 == "X") ||
        (b7 == "x" || b7 == "X") && (b8 == "x" || b8 == "X") && (b9 == "x" || b9 == "X") ||
        (b2 == "x" || b2 == "X") && (b5 == "x" || b5 == "X") && (b8 == "x" || b8 == "X") ||
        (b3 == "x" || b3 == "X") && (b6 == "x" || b6 == "X") && (b9 == "x" || b9 == "X") ||
        (b3 == "x" || b3 == "X") && (b5 == "x" || b5 == "X") && (b7 == "x" || b7 == "X")) {
        
        document.getElementById("print").innerHTML = "Player X won";
        window.alert("Player X won");
        disable_all_boxes();
    } 
    else if ((b1 == "o" || b1 == "O") && (b2 == "o" || b2 == "O") && (b3 == "o" || b3 == "O") ||
             (b1 == "o" || b1 == "O") && (b4 == "o" || b4 == "O") && (b7 == "o" || b7 == "O") ||
             (b1 == "o" || b1 == "O") && (b5 == "o" || b5 == "O") && (b9 == "o" || b9 == "O") ||
             (b4 == "o" || b4 == "O") && (b5 == "o" || b5 == "O") && (b6 == "o" || b6 == "O") ||
             (b7 == "o" || b7 == "O") && (b8 == "o" || b8 == "O") && (b9 == "o" || b9 == "O") ||
             (b2 == "o" || b2 == "O") && (b5 == "o" || b5 == "O") && (b8 == "o" || b8 == "O") ||
             (b3 == "o" || b3 == "O") && (b6 == "o" || b6 == "O") && (b9 == "o" || b9 == "O") ||
             (b3 == "o" || b3 == "O") && (b5 == "o" || b5 == "O") && (b7 == "o" || b7 == "O")) {
        
        document.getElementById("print").innerHTML = "Player O won";
        window.alert("Player O won");
        disable_all_boxes();
    }
    else if (
        (b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9)
        && !isGameOver
    ) {
        document.getElementById("print").innerHTML = "Match Tie";
        window.alert("Match Tie");
    }
    
    else if (!isGameOver) {
        if (flag == 1) {
            document.getElementById("print").innerHTML = "Player X turn";
        } 
        else {
             document.getElementById("print").innerHTML = "Player O turn";
        }
    }
}

function myfunc_2 () {
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b4").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b6").value = "";
    document.getElementById("b7").value = "";
    document.getElementById("b8").value = "";
    document.getElementById("b9").value = "";
    
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").disabled = false;
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").disabled = false;
    
    flag = 1;
    document.getElementById("print").innerHTML = "Player X turn";
    document.getElementById("ins").innerHTML = "Press any box to start the game";
}

function myfunc_3 () {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
function myfunc_4 () {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function myfunc_5 () {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
function myfunc_6 () {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function myfunc_7 () {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function myfunc_8 () {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc_9 () {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function myfunc_10 () {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function myfunc_11 () {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}