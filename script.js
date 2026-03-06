let addBtn = document.getElementById("addBtn");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", function(e){
if(e.key === "Enter") addTask();
});

loadTasks();

function addTask(){
let task = input.value.trim();
if(task === "") return;

createTaskElement(task);
saveTask(task);

input.value="";
}

function createTaskElement(task){

let li = document.createElement("li");

let span = document.createElement("span");
span.innerText = task;

span.onclick = function(){
span.classList.toggle("completed");
};

let del = document.createElement("button");
del.innerText="Delete";
del.className="deleteBtn";

del.onclick=function(){
li.remove();
removeTask(task);
};

li.appendChild(span);
li.appendChild(del);

list.appendChild(li);
}

function saveTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.push(task);
localStorage.setItem("tasks",JSON.stringify(tasks));

}

function loadTasks(){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task=>{
createTaskElement(task);
});

}

function removeTask(task){

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks = tasks.filter(t=>t!==task);
localStorage.setItem("tasks",JSON.stringify(tasks));

}