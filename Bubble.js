////////////////Makes bubbles/////////////////////
function makebubble() {
    var bubble = '';
    for (let i = 1; i <= 102; i++) {
        let num = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${num}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = bubble;
}
makebubble();

////////////////// Run Timer/////////////////////
var timer = 60
function runtimer(){
    var timerInt = setInterval(function(){
        if(timer > 0 ){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = `<h2>Game Over</h2>`;
        }
    }, 1000)
}
runtimer();

////////////////// Hit Number/////////////////////
var hitnum = 0;
function hitvalue() {
    hitnum = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitnum;
}
hitvalue();

////////////////// Increase Score/////////////////////
var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

////////////////// Click Event/////////////////////
document.querySelector(".pbtm")
.addEventListener("click", function(dets){
    var Clickednum = (Number(dets.target.textContent));
        if(Clickednum === hitnum){
            increaseScore();
            makebubble();
            hitvalue();
        
    } else if (timer == 0){
        alert("Game Over");
    } else {
        alert("Wrong Number Clicked");
    }
})

 

