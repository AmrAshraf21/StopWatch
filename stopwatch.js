let second =0;
let tens=0;
let appendSec = document.getElementById('sec');

let appendTens = document.getElementById('tens');

let start = document.getElementById('start')
let Stop = document.getElementById('stop')
let reset = document.getElementById('reset');

var interval;

start.addEventListener('click',function(){
    clearInterval(interval);

    interval = setInterval(test,10);

})
Stop.addEventListener('click',function(){
    clearInterval(interval);

})
reset.addEventListener('click',function(){
   clearInterval(interval);
   tens = "00";
   second="00"
    appendTens.innerHTML = tens
    appendSec.innerHTML = second

})


function test(){
tens++;
if(tens<=9){
    appendTens.innerHTML ="0" + tens;
}
 if(tens>9){
    appendTens.innerHTML=tens
}
if(tens >99){
second++;
appendSec.innerHTML ="0" + second;
tens = 0;
appendTens.innerHTML ="0"+ tens

}
if(second >9){
    appendSec.innerHTML =second
}

}


