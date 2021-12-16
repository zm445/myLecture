while(1){
    let player = prompt("[EXIT:-1] 가위(0) 바위(1) 보(2) 입력:");
    let com = Math.floor(Math.random() * 3);

    if(player == com){
        alert("가위(0) 바위(1) 보(2) \ndraw \nplayer: " + player + "\ncom: " + com);
    }
    else if(player == 0 && com == 1){
        alert("가위(0) 바위(1) 보(2) \ncomputer win! \nplayer: " + player + "\ncom: " + com);
    } else if(player == 1 && com == 2){
        alert("가위(0) 바위(1) 보(2) \ncomputer win! \nplayer: " + player + "\ncom: " + com);
    } else if(player == 2 && com == 0){
        alert("가위(0) 바위(1) 보(2) \ncomputer win! \nplayer: " + player + "\ncom: " + com);
    } else if(player == -1){
        alert("게임 종료");
        break;
    } else if( (player < 0 || 2 < player) && player != -1) {
        alert("(0~2)사이의 숫자를 입력하세요.");
    } 
    else {
        alert("가위(0) 바위(1) 보(2) \nplayer win! \nplayer: " + player + "\ncom: " + com);
    }
}

