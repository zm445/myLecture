function btn_click() {

    while(true){
        var player = document.getElementById("userAction").value;
        let com = Math.floor(Math.random() * 3)+1;
    
        if(player == "exit"){
            dw("종료");
            break;
        }
    
        if(com == 1){
            com = "가위";
        } else if(com == 2){
            com = "바위";
        } else if(com == 3){
            com = "보";
        }
        
        win(player, com);
    }
}

