const list = document.querySelector('ul');
const listItems = list.children;
const inputBox = document.getElementById('inputTask');
const itemForm = document.getElementById('addItem');

function addTask() {
    if(inputBox.value != "") {
        let newTask = document.createElement('li');
        newTask.innerText = inputBox.value;
        list.appendChild(newTask);
        inputBox.value = "";
    } else {
        window.alert("Please enter a value into the text box.");
        inputBox.focus();
    }
}

itemForm.addEventListener('submit', function(e) {
    e.preventDefault();
    return false;
});

list.addEventListener('click', function(e) {
    var item = e.target;
    item.remove();
});
