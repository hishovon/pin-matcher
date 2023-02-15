function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }

}



function generatePin(){

    const random =Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){


const pin = getPin();

const displayPinField =document.getElementById('display-pin');
displayPinField.value=pin;

})



document.getElementById('calculator').addEventListener('click', function(event){

const number = event.target.innerText;   

const typeNumberField = document.getElementById('typed-numbers');
const previousTypeNumber = typeNumberField.value;

if(isNaN(number))
{
    if(number == 'C'){
        typeNumberField.value = '';
    }
    else if (number== '<' )
    {
        const digit=previousTypeNumber.split('');
        digit.pop('');
        const remainingNumbers=digit.join('');
        typeNumberField.value=remainingNumbers;
    }
}
else{
  
    const newTypedNumber = previousTypeNumber + number ;
    typeNumberField.value=newTypedNumber;
}


})



document.getElementById('verify-pin').addEventListener('click', function(){

    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;


   const typeNumberField= document.getElementById('typed-numbers');
   const typedNumber=typeNumberField.value;


   const successPin =document.getElementById('pin-success');
   const failPin =document.getElementById('pin-fail');

   if(typedNumber==currentPin){

   
    successPin.style.display='block';
    failPin.style.display='none'
   }

else{
   
    failPin.style.display='block';
    successPin.style.display='none';
}


})