document.getElementById('spinButton1').addEventListener('click', spin)
document.getElementById('spinButton2').addEventListener('click', spin2)
const min = 1
const max = 5
let total=250
//make numbers
function spin(){
    let randomNum1 = Math.floor(Math.random() * (max )) + min;
    let randomNum2 = Math.floor(Math.random() * (max )) + min;
    let randomNum3 = Math.floor(Math.random() * (max )) + min;
    slotOne.textContent = randomNum1
    slotTwo.textContent = randomNum2
    slotThree.textContent = randomNum3
    if( randomNum1 === randomNum2 && randomNum2 === randomNum3){
        document.getElementById('winnings').textContent = 'YOU WON💸🤑💰💎💵💳'
            total = total *3
            document.getElementById('sum').textContent = total
    }else if ( randomNum1 !== randomNum2 && randomNum2 !== randomNum3){
        document.getElementById('winnings').textContent = 'YOU LOSE🤣🤣🤣🤣🫵🫵☠️☠️'
        total = total - 5
        document.getElementById('sum').textContent = total
    }
}
function spin2(){
    let randomNum1 = Math.floor(Math.random() * (max )) + min;
    let randomNum2 = Math.floor(Math.random() * (max )) + min;
    let randomNum3 = Math.floor(Math.random() * (max )) + min;
    slotOne.textContent = randomNum1
    slotTwo.textContent = randomNum2
    slotThree.textContent = randomNum3
    if( randomNum1 === randomNum2 && randomNum2 === randomNum3){
        document.getElementById('winnings').textContent = 'YOU WON💸🤑💰💎💵💳'
            total = total * 5
            document.getElementById('sum').textContent = total
    }else if ( randomNum1 !== randomNum2 && randomNum2 !== randomNum3){
        document.getElementById('winnings').textContent = 'YOU LOSE🤣🤣🤣🤣🫵🫵☠️☠️'
        total = total - 50
        document.getElementById('sum').textContent = total
    }
}

        
    
        
    




