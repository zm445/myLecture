let com = Math.floor(Math.random() * 3);
let player = prompt("가위(0) 바위(1) 보(2) 입력: ");

if(player == com){
    dw("가위(0) 바위(1) 보(2) draw <br>player: " + player + "<br>com: " + com);
}
else if(player == 0 && com == 1){
    dw("가위(0) 바위(1) 보(2) computer win! <br>player: " + player + "<br>com: " + com );
} else if(player == 1 && com == 2){
    dw("가위(0) 바위(1) 보(2) computer win! <br>player: " + player + "<br>com: " + com );
} else if(player == 2 && com == 0){
    dw("가위(0) 바위(1) 보(2) computer win! <br>player: " + player + "<br>com: " + com );
} else {
    dw("가위(0) 바위(1) 보(2) player win! <br>player: " + player + "<br>com: " + com);
}

