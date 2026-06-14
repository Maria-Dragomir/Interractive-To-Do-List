# Interactive To-Do List

## Project Overview

This project is an interactive To-Do List created using HTML, CSS and JavaScript.

The aim of this challenge was to practise using JavaScript to make a web page interactive. Users can type a task into the input field, add it to the page, receive feedback messages, and delete tasks once they are no longer needed.

## User Story

As a user, I want to be able to add tasks to a list so that I can keep track of things I need to do.

As a user, I also want to be able to delete tasks from the list once they are complete or no longer needed.

## Features

- Input field for entering a new task
- Add Task button
- Tasks displayed dynamically on the page
- Validation to stop empty tasks being added
- Validation to stop duplicate tasks being added
- Delete button for each task
- Feedback messages for the user

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM manipulation

## JavaScript Features Practised

In this project, I practised:

- `document.getElementById()`
- `addEventListener()`
- `.value`
- `.trim()`
- `if` statements
- arrays
- `.includes()`
- `.push()`
- `.indexOf()`
- `.splice()`
- `document.createElement()`
- `appendChild()`
- `removeChild()`
- `innerHTML`

## How It Works

The user types a task into the input field and clicks the Add Task button.

JavaScript then checks that the input is not empty and that the task has not already been added. If the task is valid, it is added to an array and displayed as a new list item under the My Tasks section.

Each task also has a Delete button. When the Delete button is clicked, the task is removed from the page and from the array.

## Validation

The project includes basic validation:

- Empty tasks cannot be added.
- Duplicate tasks cannot be added.
- A message is shown to the user if the task is invalid.

## What I Learned

This challenge helped me understand how JavaScript can be used to change what appears on a web page after the page has loaded.

I also learned how to create new HTML elements using JavaScript, add them to the page, remove them, and keep track of values using an array.

## Future Improvements

In the future, I would like to add:

- An edit task feature
- A completed task style
- A clear all tasks button
- Local storage so tasks stay on the page after refreshing