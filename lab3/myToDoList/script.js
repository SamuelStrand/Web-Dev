function addItem() {
    var inputValue = document.getElementById("todo-input").value;
    if (inputValue === '') {
        alert("Please enter a todo item.");
        return;
    }

    var listItem = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    listItem.appendChild(textNode);

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(deleteButton);

    listItem.addEventListener('click', toggleDone);

    document.getElementById("todo-list").appendChild(listItem);

    document.getElementById("todo-input").value = '';
}


function toggleDone() {
    this.classList.toggle('done');
}


var listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', toggleDone);
}
