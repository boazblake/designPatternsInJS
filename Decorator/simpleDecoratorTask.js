//example decorator pattern

//starting with a simple task function...
var Task = function (name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function() {
  console.log('completeing task: ' + this.name);
  this.completed = true
};

Task.prototype.save = function () {
  console.log('saving Task: '+ this.name);
};


//mytask is one of the tasks that I need run..
var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

//Urgent task is another slightly different task
//instead of modifying the prototype and possibly
//introducing bugs into our code we can  instead
//decorate it...

var urgentTask = new Task('urgent Task');
//we can add properties...
urgentTask.priority = 2;
urgentTask.notify = function(){
  console.log('notifiyng important people');
}
urgentTask.complete();
//we can even overwirte...
urgentTask.save = function(){
  this.notify();
  //we can even bind the save prototype to this instance...
  Task.prototype.save.call(this)
};

urgentTask.save();