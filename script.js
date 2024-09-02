const startBtn = document.getElementById('start-btn');
let intervalId, count = 1, startBtnToggle = false;

startBtn.addEventListener('click', function(){
    if(!startBtnToggle){
        bubbleSort();
        startBtnToggle = true;
    }else{
        revert();
        startBtnToggle = false;
    }
});

function bubbleSort(){
   document.getElementById('num45').classList.add('animation-45');
   document.getElementById('num23').classList.add('animation-23');
   document.getElementById('num6').classList.add('animation-6');
   document.getElementById('num91').classList.add('animation-91');
   document.getElementById('num2').classList.add('animation-2');
   document.getElementById('num20').classList.add('animation-20');

   intervalId = setInterval(changeBtnName, 10000);

}

function changeBtnName(){
    if(startBtnToggle){
        startBtn.innerText = 'Revert'
    }else{
        startBtn.innerText = 'BubbleSort'
    }
    clearInterval(intervalId);
}


function revert(){
    document.getElementById('num45').classList.remove('animation-45');
    document.getElementById('num23').classList.remove('animation-23');
    document.getElementById('num6').classList.remove('animation-6');
    document.getElementById('num91').classList.remove('animation-91');
    document.getElementById('num2').classList.remove('animation-2');
    document.getElementById('num20').classList.remove('animation-20');

    intervalId = setInterval(changeBtnName, 1);
}










