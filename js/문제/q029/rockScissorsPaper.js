function win(play, com) {
    var box = document.getElementById("box");	
    dw("player: " + play + " com: " + com + "<br>");

    if(play == "가위" && com == "바위"){
        dw("computer win <br>");
                                        
       	
        box.innerHTML="<img id='sci' src='sci.png'> <br> computer: <img id='rock' src='rock.png'>";	       
    } else if(play == "바위" && com == "보") {
        dw("computer win <br>");

        dw("player: <img id='rock' src='rock.png'> <br> computer: <img id='paper' src='paper.png'>");	 
    } else if(play == "보" && com == "가위") {
        dw("computer win <br>");

        dw("player: <img id='paper' src='paper.png'> <br> computer: <img id='sci' src='sci.png'>");	 
    } else if(com == "가위" && play == "바위") {
        dw("player win <br>");

        dw("computer: <img id='sci' src='sci.png'> <br> player: <img id='rock' src='rock.png'>");	   
    } else if(com == "바위" && play == "보") {
        dw("player win <br>");

        dw("computer: <img id='rock' src='rock.png'> <br> player: <img id='paper' src='paper.png'>");	   
    } else if(com == "보" && play == "가위") {
        dw("player win <br>");

        dw("computer: <img id='paper' src='paper.png'> <br> player: <img id='sci' src='sci.png'>");	   
    } else if (play == "가위" && com == "가위"){
        dw("draw <br>");

        dw("computer: <img id='sci' src='sci.png'> <br> player: <img id='sci' src='sci.png'>");	   
    } else if (play == "바위" && com == "바위"){
        dw("draw <br>");

        dw("computer: <img id='rock' src='rock.png'> <br> player: <img id='rock' src='rock.png'>");	   
    } else if (play == "보" && com == "보"){
        dw("draw <br>");

        dw("computer: <img id='paper' src='paper.png'> <br> player: <img id='paper' src='paper.png'>");	   
    } 
}