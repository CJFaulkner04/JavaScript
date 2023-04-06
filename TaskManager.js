
let taskManager = (function() {
    let tasks = [];

    function addTask(a){
        tasks.push(a);
    }
    
    function displayTasks(){
        for(let i = 0; i < tasks.length; i++){
            console.log(tasks[i]);
        }
    }

    return {
        addTask: addTask,
        displayTasks: displayTasks
    };
})();

taskManager.addTask('Finish Assingments');
taskManager.addTask('Graduate Cohort');
taskManager.addTask('Take over Stiegler EdTech');
taskManager.displayTasks();