var userRps = "";
var comRps = "";

var rpsInputText;

window.onload = function() {
    
    rpsInputText = document.getElementById("rps_input_text");

}

function rpsInputButtonClink() {

    while(true){
        
        userRps = rpsInputText.value;

        if(userRps == "가위" || userRps == "바위" || userRps == "보") {
            break;
        } else {
            alert("장난치지 마세요.");
        }
    }

    comRps = Math.floor(Math.random() * 3 + 1); // 가위(0) 바위(1) 보(2)
 
    if(comRps == 1) {
        comRps = "가위";
    } else if(comRps == 2) {
        comRps = "바위";
    } else {
        comRps = "보";
    } 

    dw("유저: " + userRps);
    br();
    dw("컴: " + comRps);
    br();

    var rpsWinDrawLose = "";

    switch(userRps) {
        case"가위": {
            switch(comRps){
                case"가위":
                    rpsWinDrawLose = "무승부";
                break;
                case"바위":
                    rpsWinDrawLose = "패배";
                break;
                case"보":
                    rpsWinDrawLose = "승리";
                break;
            }            
        }
        break;
        
        case"바위": {
            switch(comRps){
                case"가위":
                    rpsWinDrawLose = "승리";
                break;
                case"바위":
                    rpsWinDrawLose = "무승부";
                break;
                case"보":
                    rpsWinDrawLose = "패배";
                break;
            }
        }
        break;
        
        case"보": {
            switch(comRps){
                case"가위":
                    rpsWinDrawLose = "패배";
                break;
                case"바위":
                    rpsWinDrawLose = "승리";
                break;
                case"보":
                    rpsWinDrawLose = "무승부";
                break;
            }
        }
        break;
    }

    dw(rpsWinDrawLose);
}