let numOfsquares = 6;
let colors = generateRandomColors(numOfsquares);
let square = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('messageDisplay')
let gameHeader = document.querySelector('#game-header')
let newGameBtn = document.querySelector('#new-game')
let easyBtn = document.querySelector('#easyBtn')
let hardBtn = document.querySelector('#hardBtn')

hardBtn.addEventListener('click',function(){
  hardBtn.classList.add('selected')
  easyBtn.classList.remove('selected')
  numOfsquares = 6;
  colors = generateRandomColors(numOfsquares)
    pickedColor = pickColor();
    messageDisplay.innerText = "";
    colorDisplay.textContent = pickedColor;
    for (let i=0 ; i < square.length ; i++){
            square[i].style.backgroundColor = colors[i]
            square[i].style.display = "block";
    }
})
easyBtn.addEventListener('click',function(){
    hardBtn.classList.remove('selected')
    easyBtn.classList.add('selected')
    numOfsquares = 3;
    colors = generateRandomColors(numOfsquares)
    pickedColor = pickColor();
    messageDisplay.innerText = "";
    colorDisplay.textContent = pickedColor;
    for (let i=0 ; i < square.length ; i++){
        if (colors[i]){
            square[i].style.backgroundColor = colors[i]
        } else {
            square[i].style.display = "none";
        }
    }

})

colorDisplay.innerText = pickedColor;
for(let i=0 ; i < square.length ; i++){
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener('click',function(){
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            messageDisplay.innerHTML = "Correct !!" 
            newGameBtn.textContent = "Play again"
            changeAllColors(clickedColor);
            gameHeader.style.backgroundColor = clickedColor;
            
        } else{
           this.style.backgroundColor = '#101010';
           messageDisplay.innerHTML = `Try Again !!  <span>&#9888;</span>`
           messageDisplay.style.color = "red"
        }
    })
}

function changeAllColors(color){
    for(let i=0 ; i < square.length ; i++){
        square[i].style.backgroundColor = color;
}
}

//function to pick up randon color

function pickColor(){

  let random = Math.floor(Math.random() * colors.length);
  return colors[random]
}

//function generate Random color 

function generateRandomColors(num){
    let arr = []
    for (var i=0 ; i < num ; i++){
    arr.push(randomColor());
    }
    return arr;
}

// function random color

function randomColor() {
  let R= Math.floor(Math.random() * 256) 
  let G= Math.floor(Math.random() * 256) 
  let B= Math.floor(Math.random() * 256) 

  return `rgb(${R}, ${G}, ${B})`

}

newGameBtn.addEventListener('click',function (){
  colors =   generateRandomColors(numOfsquares);
  pickedColor = pickColor();
  colorDisplay.innerText = pickedColor;
  this.textContent = " New Game"
  for(let i=0 ; i < square.length ; i++){
    square[i].style.backgroundColor = colors[i];
  } 
  gameHeader.style.backgroundColor = 'steelblue';
  messageDisplay.innerText = "";

})
