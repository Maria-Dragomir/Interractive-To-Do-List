// 1. create an empty array of tasks
var tasks = [];

// 2. use document.getElementById to select the searchTerm input field and the taskList ul element
var searchTermInput = document.getElementById('searchTerm');

//3. use document.getElementById to select the search button element
var searchButton = document.getElementById('searchButton');

//4.use document.getElementById to select the searches list 
var searchesList = document.getElementById('searchesList');

//5.use the getElementById to select the message paragraph element
var messageParagraph = document.getElementById('message');

// 6.add an event listener to the search button that listens for a click event
searchButton.addEventListener('click', function() {

// 7. get the value of the searchTerm input field and store it in a variable
  var searchTerm = searchTermInput.value.trim();

// 8. check if the searchTerm is not empty
  if (searchTerm !== '') {

    // 9. check if the searchTerm is already in the tasks array
    if (tasks.includes(searchTerm)) {
      messageParagraph.innerHTML = "This task is already in your list.";
      return;
    }
  }
    
// 10. add the searchTerm to the tasks array
    tasks.push(searchTerm);

// 11. create a new li element and set its text content to the searchTerm
    var li = document.createElement('li');
    li.textContent = searchTerm;

// 12. add the new li element to the taskList ul element
    taskList.appendChild(li);

// 13.create a delete button for the new li element
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

// 14. add an event listener to the delete button that listens for a click event
    deleteButton.addEventListener('click', function() {
// 15. remove the message from the message paragraph
      messageParagraph.innerHTML = "Task deleted successfully.";
// 16. remove the li element from the taskList ul element
      taskList.removeChild(li);
      // 17. remove the searchTerm from the tasks array
      var index = tasks.indexOf(searchTerm);
      if (index > -1) {
        tasks.splice(index, 1);
        messageParagraph.innerHTML = "Task deleted successfully.";
      }
    });
// 17. add the delete button to the new li element
newLi.appendChild(deleteButton);

// 18. add the new li element to the searches list
searchesList.appendChild(newLi);

// 19. clear the searchTerm input field
searchTermInput.value = '';

// 20. give feedback to the user that the task was added successfully
messageParagraph.innerHTML = "Task added successfully.";
  });
