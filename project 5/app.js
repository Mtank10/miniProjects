// Declare Variables

const addTask = document.getElementById('btn')
const taskContainer = document.getElementById('show-notes')
const inputTask = document.getElementById('input')
//Event Listener
addTask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');
    //console.log(task)
    let li=document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<button>Check</button>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton);
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<button>Delete</button>'
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton);

    if(inputTask.value===""){
        alert('Please enter a task')
    }else{
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration = 'line-through'
        console.log(checkButton.parentNode)
    })
    deleteButton.addEventListener('click',function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
        console.log(target.parentElement.parentElement)
    })
})

