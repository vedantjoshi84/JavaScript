const todos = [];

window.setTimeout(function() {
    // put all of your JS code from the lecture here
    let input = prompt("What would you like to do?");
    while (input !== "quit") {
        //handle input
        if (input === "list") {
            console.log(todos);
        } else if (input === "new") {
            //ask for new todo
            const newTodo = prompt("Enter new todo");
            // add to todos array
            todos.push(newTodo);
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("OK, You quit the app.");
}, 500);