let player = "";
let com = "";

let resultString = "";

let rspInputText;
let rspResultScreen;

let divImgPlayer;
let divImgCom;


window.onload = function () {
    rspInputText = document.getElementById("rsp_input_text");
    rspResultScreen = document.getElementById("rsp_result_screen");
    
    divImgPlayer = document.getElementById("user_rsp");
    divImgCom = document.getElementById("com_rsp");
}

function rspInputButtonClick() {

    while(true) {
        
        player = rspInputText.value;

        if(player == "가위" || player == "바위" || player == "보") {
            break;
        } else {
            alert("장난치지 마세요!");
        }
    }

    com = Math.floor(Math.random() * 3+1);

    if(com == 1){
        com = "가위";
    } else if(com == 2){
        com = "바위";
    } else {
        com = "보";
    }

    resultString = "";
   
    resultString += "유저: " + player;
    resultString += "\n";
    resultString += "컴: " + com;
    resultString += "\n";

    switch(player) {
        case"가위":
            divImgPlayer.innerHTML = "<img src='sc.png'>";
            break;
        case"바위":
            divImgPlayer.innerHTML = "<img src='ro.png'>";
            break;
        case"보":
            divImgPlayer.innerHTML = "<img src='pa.png'>";
            break;
    }

    switch(com) {
        case"가위":
            divImgCom.innerHTML = "<img src='c_sc.png'>";
            break;
        case"바위":
            divImgCom.innerHTML = "<img src='c_ro.png'>";
            break;
        case"보":
            divImgCom.innerHTML = "<img src='c_pa.png'>";
            break;
    }

    let winDrawLose;

    switch(player) {
        case"가위":
            switch(com) {
                case"가위":
                winDrawLose = "무승부";
                break;
                case"바위":
                winDrawLose = "패배";
                break;
                case"보":
                winDrawLose = "승리";
                break;
            }
        break;
        case"바위":
            switch(com) {
                case"가위":
                winDrawLose = "승리";
                break;
                case"바위":
                winDrawLose = "무승부";
                break;
                case"보":
                winDrawLose = "패배";
                break;
            }
        break;
        case"보":
            switch(com) {
                case"가위":
                winDrawLose = "패배";
                break;
                case"바위":
                winDrawLose = "승리";
                break;
                case"보":
                winDrawLose = "무승부";
                break;
            }
        break;
    }

    resultString += "결과: " + winDrawLose;

    rspResultScreen.value = resultString;

}