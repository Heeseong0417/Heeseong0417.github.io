const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
const TOARR_KEY = "toArr";
let toArr = [];

//localStorage.removeItem(TOARR_KEY);
function saveToDo(){
    localStorage.setItem(TOARR_KEY,JSON.stringify(toArr));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    console.log(li);
      li.remove();
    toArr = toArr.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(newTodo){
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span"); 
   span.innerText = newTodo.text;
   const removeBtn = document.createElement("button");
   removeBtn.innerText = "X";
   removeBtn.addEventListener("click",deleteToDo);
   li.appendChild(span);
   li.appendChild(removeBtn);
  
   toDoList.appendChild(li);

}

function handleTodoSubmit(event){
   
    event.preventDefault();

    const newTodo = (toDoInput.value);
    toDoInput.value = "";
    console.log(newTodo);
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    }
    toArr.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

function sayHello(item){
    console.log("this is the turn of ", item);
}

const savedToDos = localStorage.getItem(TOARR_KEY);
if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    toArr = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
