const  inputBox = document.getElementById('input-box');
const  listContainer = document.getElementById('list-container');    
// Create a new list item when clicking on the "Add" button
function addTask() {
    if(inputBox.value === '') {
        alert('Please enter a task');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); // whenever we add data this finction is called to save it
}
// Add a "checked" symbol when clicking on a list item
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to local storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Display data from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();