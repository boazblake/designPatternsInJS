var Task = function (data) {
  this.name = data.name,
  this.priority = data.priority,
  this.project = data.project,
  this.user = data.user,
  this.complete = data.complete
}


var TaskService = function () {
  return {
    complete: function (task) {
      task.completed = true;
      console.log('completeing task: ' + task.name);
    },
    setCompleteDate: function (task) {
      task.completedDate = new Date();
      console.log(task.name + ' completed on' + task.completedDate);
    },
    notifyCompletetion: function (task, user) {
      console.log('notifiying ' + user + ' of the completion of ' + task.name );
    },
    save: function (task) {
      console.log('saving task: ' + task.name)
    }
  }
}();

var TaskServiceWrapper = function () {

  var completeAndNotify = function (task) {
    TaskService.complete(myTask);
    if (myTask.isCompleted) {
      TaskService.setCompleteDate(myTask);
      TaskService.notifyCompletetion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  }
  return {
    completeAndNotify: completeAndNotify
  }
}()


var myTask = new Task({
  name: 'MyTask',
  priority: 1,
  project: 'courses',
  user: 'Jon',
  completed: false
});
//console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask)
console.log(myTask);