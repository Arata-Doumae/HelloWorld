'use strict'

// let i = 1;
// if(i === 1) {
//  console.log("真です");
// }

function scorecheck(){
    let testscore = document.getElementById('score').value
    if(testscore >= 80){
        document.write("合格です。素晴らしい！")
    }else if(testscore >= 70){
        document.write("惜しい！もう少しですねぇ！")
    }else{
        document.write("……ダメだこりゃ")
    }
}



// const namelist = ["田中","山田","林","佐藤"];

// for (let i = 0; i < namelist.length ; i++) {
//     console.log(`${i+1}.${namelist[i]}`);
// }

// console.log(namelist[0]);
// console.log(namelist[1]);
// console.log(namelist[2]);
//上記の事を、「配列」という。

for(let i = 0; i < 10; i++){
    if(i % 2 === 0) continue;
    console.log(i);
} // continue文

for(let i = 1; i < 1000; i++){
    if(i>10) break;
    console.log(i);
}