let com = new Array(6);
let me = new Array(6);
let ol = new Array;

let meString1;
let meString2;
let meString3;
let meString4;
let meString5;
let meString6;

let bonus = 0;
// 5개의 숫자와 보너스 점수가 컴퓨터랑 일치할 때 표시하기 위해 만든 변수  
let second;

let inputText1;
let inputText2;
let inputText3;
let inputText4;
let inputText5;
let inputText6;

let resultScreen;

let resultString = "";

window.onload = function() {
    inputText1 = document.getElementById("input_text1");
    inputText2 = document.getElementById("input_text2");
    inputText3 = document.getElementById("input_text3");
    inputText4 = document.getElementById("input_text4");
    inputText5 = document.getElementById("input_text5");
    inputText6 = document.getElementById("input_text6");

    resultScreen = document.getElementById("result_screen");
}

function inputButtonClick() {

    meString1 = inputText1.value;
    meString2 = inputText2.value;
    meString3 = inputText3.value;
    meString4 = inputText4.value;
    meString5 = inputText5.value;
    meString6 = inputText6.value;
    
    me[0] = parseInt(meString1);
    me[1] = parseInt(meString2);
    me[2] = parseInt(meString3);
    me[3] = parseInt(meString4);
    me[4] = parseInt(meString5);
    me[5] = parseInt(meString6);
    
// 중복없이 랜덤숫자(1~45) 6개 com 배열에 넣기
for(let i=0; i<com.length; i++) {
    com[i] = Math.floor(Math.random() * 45) + 1;
    for(let j=0; j<i; j++){
        if(com[i] == com[j]) {
            i--;
        }
    }
}

// 보너스 번호에 랜덤숫자(1~45) 넣기 (내가 입력한 숫자와 중복되지 않게 구현)
let loop = 1;
while(loop) {

    bonus = Math.floor(Math.random() * 45) + 1;

    for(let i=0; i<me.length; i++) {
        if(me[i] == bonus) {
            loop++;
        }
    }

    switch(loop) {
        case 1:
            loop = 0;
        break;
        case 2:
            loop = 1;
        break;
    }
}

// 컴퓨터의 6개의 숫자와 내 숫자를 비교 후 일치한 만큼 변수(count)에 누적시키기
let count = 0;
let idx = 0;
for(let i=0; i<com.length; i++){
    for(let j=0; j<me.length; j++){
        if(com[i] == me[j]) {
            ol[idx] = com[i];
            count++;        
            idx++;
        }
    }
}

// 보너스 번호랑 컴퓨터 랜덤숫자랑 일치하는지 확인하기
for(let i=0; i<com.length; i++){
    if(com[i] == bonus){
        second = -1;
    }
}

resultString = "";

// 컴퓨터 랜덤숫자 6개 출력
resultString += "컴퓨터: ";
for(let i=0; i<com.length; i++){
    resultString += com[i] + " ";
}
resultString += "\n";

// 내 랜덤숫자 6개 출력
resultString += "나:   ";
for(let i=0; i<me.length; i++){
    resultString += me[i] + " ";
}
resultString += "\n";

// 일치하는 숫자 출력
resultString += "일치하는 숫자 : ";
for(let i=0; i<count; i++){
    resultString += ol[i] + " ";
}
resultString += "\n";

// 몇개가 일치하는지 출력
resultString += count + "개 일치";
resultString += "\n";

// 보너스 번호 출력
resultString += "보너스 번호: " + bonus;
resultString += "\n";

// 등수 출력
if(count == 3){
    resultString += "5등입니다.";
} else if(count == 4) {
    resultString += "4등입니다.";
} else if(count == 5 && second != -1) {
    resultString += "3등입니다.";
} else if(count == 5 && second == -1) {
    resultString += "2등입니다.";
} else if(count == 6){
    resultString += "1등입니다.";
}

resultScreen.value = resultString;

}