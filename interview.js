// question1 and answer1

var inputOne=document.querySelector('#input1');
var inputTwo=document.querySelector('#input2');
var btnAdd=document.querySelector('#add');
var btnSubtract=document.querySelector('#subtract');
var btnMultiply=document.querySelector('#multiply');
var btnDivide=document.querySelector('#divide');
var output1= document.querySelector('#output');

 function addition() {
   var sum = Number(inputOne.value) + Number(inputTwo.value);
   console.log(inputOne.value);
   console.log(inputTwo.value)
   console.log(sum);

   output1.innerText=`the sum of numbers is ${sum}.`
    return sum;

 }



 function subtraction(num1,num2) {
  var num1 = Number(inputOne.value) ;
  var num2 =  Number(inputTwo.value);
   var sum = num1-num2;
   console.log(num1);
   console.log(num2);
   console.log(sum);

   output1.innerText=`the solution of numbers is ${sum}.`
    return sum;

 }


 function multiplicaton() {
   var sum = Number(inputOne.value) * Number(inputTwo.value);
   console.log(inputOne.value);
   console.log(inputTwo.value)
   console.log(sum);

   output1.innerText=`the product of numbers is ${sum}.`
    return sum;

 }


 function divition() {
   var sum = Number(inputOne.value) / Number(inputTwo.value);
   console.log(inputOne.value);
   console.log(inputTwo.value)
   console.log(sum);

   output1.innerText=`the remainder of numbers is ${sum}.`
    return sum;

 }


 btnSubtract.addEventListener('click',subtraction);

btnAdd.addEventListener('click',addition);


btnMultiply.addEventListener('click',multiplicaton);


btnDivide.addEventListener('click',divition);



// question2 and answer2


var inputTeaxt = document.querySelector('#input');
var btnInc = document.querySelector('#increse');
var btnDec = document.querySelector('#decrease');
var output2 = document.querySelector('#output2');
var showBtn=document.querySelector('#showbtn');


let fontSize =16;

function increase(){
   var outputshow= inputTeaxt.value;
   output2.innerText=outputshow;
fontSize += 2;
output2.style.fontSize= fontSize +'px';
}



function decrese(){
    var outputshow= inputTeaxt.value;
   output2.innerText=outputshow;
    fontSize -= 2;
    output2.style.fontSize= fontSize +'px';
    }



btnInc.addEventListener("click",increase);
btnDec.addEventListener("click",decrese);



// question3 and answer3



var textInput = document.querySelector('#input3');
var h1Btn = document.querySelector('#h1');
var h2Btn = document.querySelector('#h2');
var h3Btn = document.querySelector('#h3');
var outputH1=document.querySelector('#inputh3');





function textToH1(){
  var  output3=textInput.value;
  console.log(output3);
  outputH1.innerHTML=`<h1>${output3}</h1>`;
}

h1Btn.addEventListener("click",textToH1);


function textToH2(){
    var  output3=textInput.value;
    console.log(output3);
    outputH1.innerHTML=`<h2>${output3}</h2>`;
  }
  
  h2Btn.addEventListener("click",textToH2);

  function textToH3(){
    var  output3=textInput.value;
    console.log(output3);
    outputH1.innerHTML=`<h3>${output3}</h3>`;
  }



  h3Btn.addEventListener("click",textToH3);




// question4 and answer4

var inputText4 = document.querySelector('#input-text4');
var outputText4 = document.querySelector('#output4');
var btnRed = document.querySelector('#red');
var btnGreen=document.querySelector('#green');
var btnBlue = document.querySelector('#blue');


function colorToRed(){
    var message = inputText4.value;
outputText4.innerHTML=message;
outputText4.style.color='red';
}

function colorToGreen(){
    var message = inputText4.value;
outputText4.innerText=message;
outputText4.style.color='green';
}

function colorToBlue(){
    var message = inputText4.value;
outputText4.innerHTML=message;
outputText4.style.color='Blue';
}


btnRed.addEventListener("click",colorToRed);
btnGreen.addEventListener("click",colorToGreen);
btnBlue.addEventListener("click",colorToBlue);



// question5 and answer5












// question6 and answer6

var clickBtn = document.querySelector('#load');
var output6 = document.querySelector('#output6');
var outputLoading = document.querySelector('#loading');

output6.style.display='none';

function showOutput6(){
   outputLoading.innerText='loading .....';
   outputLoading.style.display='block';


setTimeout(() => {
   // outputLoading.innerText='loading .....';
   outputLoading.style.display='none';
   output6.style.display='block';
}, 2000);

}

clickBtn.addEventListener('click',showOutput6);

// question7 and answer7


var askNameBtn =document.querySelector('#askName');
var ask=document.querySelector('.ask');
var output7=document.querySelector('#display');




function doSomething(){
 var  input7 = ask.value;
 if(input7==='gowthamnayak'){
   output7.innerText=` hi ${input7} happy to well come you`;
 }else{
 output7.innerText='sorry you dont have access here';

 }





}



askNameBtn.addEventListener('click',doSomething);
