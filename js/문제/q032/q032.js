let player = "";
let com = "";

let resultString = "";

let rspInputText;
let rpsResultScreen;

window.onload = function() {
    rspInputText = document.getElementById("rsp_input_text");
    rpsResultScreen = document.getElementById("rsp_result_screen");
}

function rspInputButtonClick () {
        
    while(true) {

        player = rspInputText.value;

        if(player == "가위" || player == "바위" || player || "보") {
            break;
        } else {
            alert("장난치지 마세요.");
        }
    }

    com = Math.floor(Math.random() * 3);    // 가위(0) 바위(1) 보(2)

    if(com == 0) {
        com = "가위";
    } else if(com == 1){
        com = "바위";
    } else {
        com = "보";
    }

    resultString = "";

    resultString += "유저: " + player;
    resultString += "\n";
    resultString += "컴: " + com;
    resultString += "\n";

    let windrawLose;

    switch(player) {
        case"가위": 
            switch(com) {
                case"가위":
                windrawLose = "무승부";
                break;
                case"바위":
                windrawLose = "패배";
                break;
                case"보":
                windrawLose = "승리";
                break;
            }    
        break;
        case"바위": 
            switch(com) {
                case"가위":
                windrawLose = "승리";
                break;
                case"바위":
                windrawLose = "무승부";
                break;
                case"보":
                windrawLose = "패배";
                break;
            }    
        break;
        case"보": 
            switch(com) {
                case"가위":
                windrawLose = "패배";
                break;
                case"바위":
                windrawLose = "승리";
                break;
                case"보":
                windrawLose = "무승부";
                break;
            }    
        break;
    }

    resultString += "결과: " + windrawLose;
    
    rpsResultScreen.value = resultString;
}