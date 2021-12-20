let com = new Array(6);
let me = [12, 28, 36, 21, 42, 26];

for(let i=0; i<com.length; i++){
    com[i] = Math.floor(Math.random() * 45) + 1; 
    for(let j=0; j<i; j++){
        if(com[i] == com[j]) {
            i--;
        }
    }
}

let cnt = 0;

for(let i=0; i<com.length; i++){
   for(let j=0; j<me.length; j++){
       if(com[i] == me[j]) {
           cnt++;
       }
   }
}

dw("컴퓨터: ");
for(let i=0; i<com.length; i++){
    dw(com[i] + " ");
}
br();

dw("나: &nbsp&nbsp&nbsp&nbsp&nbsp");
for(let i=0; i<me.length; i++){
    dw(me[i] + " ");
}
br();

dw(cnt + "개 일치");
