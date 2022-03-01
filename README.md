# Listify

An app for creating local todo lists.

[Live demo](https://gregolive.github.io/todo-list/) 👈

## Functionality

- Add new todo lists that contain a title, description, due date, priority, and list of todo items
- Each list is assigned to a group folder, each of which have a name and icon color
- Lists and groups are saved in the user's brower via Javascript's <code>localStorage</code> object
- The sidebar contains all groups and links to their list's so that the user can open a list in the main view
- On a new browser session a default group and list are created
- Users can delete and edit groups and lists via dropdown menus in the sidebar and main view respectively

## Reflection

Building this todo app felt like I was making my first real-ish Javacript app, but lack of a database to save data to was limiting. There were a few difficulties with only using <code>localStorage</code>, such as all the object types being saved together. I tried to limit this intermixing of groups, lists, and todos by only pushing groups to browser storage, saving lists within its group, and saving todo's to their list. Another difficulty was that the localStorage requires that the objects be saved as a stringified key value pair.

Again for this app I used webpack's <code>HtmlWebpackPlugin</code> to build the html file dynamically, however I am not fully sold on the benefits of it. Building the ***entire*** HTML file with JS felt much more time consuming for even a project of this scale and I feel that going forward a better middle ground would be to create the static elements (sidebar, header, etc.) in the index.html file and add dynamic elements (to do list info, etc.) with JS.