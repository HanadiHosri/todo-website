function addTask() {
    let li = document.createElement("li");
    let taskInput = document.getElementById("to-do-input");
    let inputValue = taskInput.value;
    let textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue == "") {
        alert("please write a task!");
    } else {
        document.getElementById("list").appendChild(li);
    }

    taskInput.value = "";
    
}