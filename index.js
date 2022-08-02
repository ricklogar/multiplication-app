//Generates a number between 1 and 10
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);


const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score =JSON.parse(localStorage.getItem("score"));
//If there is no score, the score is 0
if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

//Callback function
formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value; //+ transforms the String into a number
    if(userAns === correctAns){
        score++;
        updatelocalStorage();
    }
    else{
        score--;
        updatelocalStorage();
    }
});

//This function saves the score in the local storage
function updatelocalStorage(){
    localStorage.setItem("score", JSON.stringify(score)); //JSON.stringify transforms the String into a number
}




