var random; // 변수
// 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
random = Math.floor(Math.random() * 6) + 1;


/* 
    조건문
    switch
*/

//todo 주사위 1 ~ 6 각각에 대해 이미지를 출력하기
switch (random) {
    case 1:
        document.write("<img class='dice' src='dice6_1.jpg'>");
        break;
    case 2:
        document.write("<img class='dice' src='dice6_2.jpg'>");
        break;
    case 3:
        document.write("<img class='dice' src='dice6_3.jpg'>");
        break;
    case 4:
        document.write("<img class='dice' src='dice6_4.jpg'>");
        break;
    case 5:
        document.write("<img class='dice' src='dice6_5.jpg'>");
        break;
    case 6:
        document.write("<img class='dice' src='dice6_6.jpg'>");
        break;
}

