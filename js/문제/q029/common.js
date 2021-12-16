function dw(str){
    document.write(str);
}

function br(){
    document.write("<br>");
}

function RPS(){
    if(player === 0 && com === 1){
        dw("computer win!");
    } else if(player === 1 && com === 2){
        dw("computer win!");
    } else if(player == 2 && com == 0){
        dw("computer win!");
    } else {
        dw("player win!");
    }
}