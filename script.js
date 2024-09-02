const startBtn = document.getElementById('start-btn');
const iterationDesc = document.getElementById('iteration-desc');
let startBtnIntervalId, iterationDescIntervalId, count = 0, startBtnToggle = false;

startBtn.addEventListener('click', function(){

    clearInterval(startBtnIntervalId);
    clearInterval(iterationDescIntervalId);

    if(!startBtnToggle){
        bubbleSort();
        startBtnToggle = true;
        showIterationDesc();
    }else{
        revert();
        startBtnToggle = false;
        count = 0;
        iterationDesc.innerText = '';
    }
    
});

function bubbleSort(){

   document.getElementById('num45').classList.add('animation-45');
   document.getElementById('num23').classList.add('animation-23');
   document.getElementById('num6').classList.add('animation-6');
   document.getElementById('num91').classList.add('animation-91');
   document.getElementById('num2').classList.add('animation-2');
   document.getElementById('num20').classList.add('animation-20');

   iterationDesc.innerText = 'First iteration sorts 91'

   startBtn.innerText = 'Sorting...'

   startBtnIntervalId = setInterval(changeBtnName, 15000);
}

function revert(){

    document.getElementById('num45').classList.remove('animation-45');
    document.getElementById('num23').classList.remove('animation-23');
    document.getElementById('num6').classList.remove('animation-6');
    document.getElementById('num91').classList.remove('animation-91');
    document.getElementById('num2').classList.remove('animation-2');
    document.getElementById('num20').classList.remove('animation-20');

    startBtnIntervalId = setInterval(changeBtnName, 1);
}

function changeBtnName(){
    if(startBtnToggle){
        startBtn.innerText = 'Revert'
    }else{
        startBtn.innerText = 'BubbleSort'
    }
    clearInterval(startBtnIntervalId);
}

function showIterationDesc(){

    if(count === 0){

        iterationDesc.innerText = 'First iteration sorts 91';
        clearInterval(iterationDescIntervalId);
        iterationDescIntervalId = setInterval(showIterationDesc, 6000);

    }else if(count === 1){

        iterationDesc.innerText = iterationDesc.innerText + '\nSecond iteration sorts 45'
        clearInterval(iterationDescIntervalId);
        iterationDescIntervalId = setInterval(showIterationDesc, 4500);

    }else if(count === 2){

        iterationDesc.innerText = iterationDesc.innerText + '\nThird iteration sorts 20 and 23'
        clearInterval(iterationDescIntervalId);
        iterationDescIntervalId = setInterval(showIterationDesc, 3000);

    }else if(count === 3){

        iterationDesc.innerText = iterationDesc.innerText + '\nFourth iteration sorts 2 and 6'
        clearInterval(iterationDescIntervalId);
        iterationDescIntervalId = setInterval(showIterationDesc, 1500);

    }else{

        iterationDesc.innerText = iterationDesc.innerText + '\nSORTED!!!'
        clearInterval(iterationDescIntervalId);

    }

    count++;

}










