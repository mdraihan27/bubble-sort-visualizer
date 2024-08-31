const input = document.getElementById('input');
const enter = document.getElementById('enter');
const numberBlocksSection = document.getElementById('number-blocks-section')
const sortBtn = document.getElementById('sort-btn');

let array = [0];

let value, count = 0;

enter.addEventListener('click' , function getNumByClick(event){
    value=input.value;
    array.push(parseInt(value));
    // console.log(array);
    input.value = ''

    showNumberBlock(value);

    

})

document.getElementById('body').addEventListener('keyup' , function getNumByEnter(event){
    if(event.key == 'Enter'){
        value = input.value;
        array.push(parseInt(value));
        // console.log(array);
        input.value='';

        showNumberBlock(value);

        
    }
})

function showNumberBlock(value){
    const block$ = document.createElement('div');
    block$.innerText = value;
    block$.className = 'number-block'
    
    numberBlocksSection.appendChild(block$);
    // bubbleSort(array);
}

sortBtn.addEventListener('click' , function(){
    bubbleSort(array);
});

function bubbleSort(array){
    for(let i = array.length ; i >=1 ; i--){

        for(let j = 1 ; j < i ; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

            }
        }
    }

    console.log(array);
}










