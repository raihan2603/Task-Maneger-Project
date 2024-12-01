

let input=document.querySelector('input');
let addBtn=document.querySelector('button');
let showTask=document.querySelector(".taskArea");

let tasks=[];
let editIndex=null;

let rendarTask = () => {
    showTask.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        let taskItem = document.createElement('div');
        taskItem.className = "d-flex justify-content-between align-items-center border p-2 mb-2 rounded bg-light";

        let taskText = document.createElement('span');
        taskText.textContent = task;

        let action = document.createElement('div');

        let editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning btn-sm me-2';
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => { handleEdit(index) };

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => { handleDelete(index) };

        action.appendChild(editBtn);
        action.appendChild(deleteBtn);

        taskItem.appendChild(taskText);
        taskItem.appendChild(action);
        showTask.appendChild(taskItem);
    });
};

let handleDelete=(index)=>{
    let confirmMessege=confirm("Are you want to delete?");
    if(confirmMessege){
        tasks.splice(index,1);
        rendarTask(); 
    }
}

let handleEdit=(index)=>{
    input.value=tasks[index];
    editIndex=index;
    addBtn.textContent="Update Task";
}

let handleAdd=()=>{
    let taskValue=input.value.trim();
    if(!taskValue){
        alert("Enter a Task");
    }else if(editIndex !== null){
        tasks[editIndex]=taskValue;
        editIndex=null;
        addBtn.textContent="Add";
    }
    else{
        tasks.push(taskValue);
    }
    input.value = '';
        rendarTask();
}


addBtn.addEventListener("click",handleAdd)

