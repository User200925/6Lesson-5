const button = document.getElementById("send");
const btn = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body")


btn.addEventListener("click", () => {
    if(document.body.classList.toggle("dark-mode")){
        btn.textContent = '☀️';
    }else{
        btn.textContent = '🌙';
    }
});


button.addEventListener("click", ()=>{

    const tasktext = input.value.trim();
    if (tasktext === "") {
        alert(`Вы ничего не ввели \n Введите задачу`)
        return
    }

    const li = document.createElement("li");

    li.textContent = input.value;
    li.className = "li-element";

    taskList.appendChild(li);

    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊'
    taskList.appendChild(editBtn);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🪣';
    taskList.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", ()=>{
        taskList.removeChild(li)
    })

    input.value = '';
});