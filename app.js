//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Array

let numberOfTasks = 0;
let completedTasks = 0;

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);

//Confetti: in progress
// let canvas = document.getElementById('confetti');
// canvas.width = 640;
// canvas.height = 480;

// let ctx = canvas.getContext('2d');
// let pieces = [];
// let numPieces = 50;

// function randomColor(){
//     let colors = ['#f00', '#0f0', '#00f', '#0ff']
//     return colors[Math.floor(Math.random() * colors.length)];

// }
// function update(){
//     setTimeout(update, 1);
// }

// function draw(){
//     pieces.forEach(function (p){
//         ctx.save();

//         ctx.fillStyle = p.colorl
//         ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
//         ctx.rotate(p.rotation);
        
//         ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)

//         ctx.restore();
//     });
    
    
//     requestAnimationFrame(draw);
// }

// function Piece(x, y){
//     this.x = x;
//     this.y = y;
//     this.size = (Math.random() * 0.5 + 0.75) * 15;
//     this.gravity = (Math.random() * 0.5 + 0.75) * 0.01;
//     this.rotation = (Math.PI * 2) * Math.random();
//     this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.001;
//     this.color = randomColor();
// }

while(pieces.length < numPieces){
    pieces.push(new Piece(Math.random()* canvas.width, Math.random() * canvas.height))
}

update();
draw();
//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //Trash BUTTON
    
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list

    todoList.appendChild(todoDiv);
    numberOfTasks++;
    //Clear value

    todoInput.value = "";
}

function deleteItem(event){
    const item = event.target;

    
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        numberOfTasks--;
        
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        completedTasks++;

        if(completedTasks == numberOfTasks){
            window.open('https://www.youtube.com/watch?v=3GwjfUFyY6M', '_blank');
            //completedTasks = 0;
            //numberOfTasks = 0;
        }
    }

}
