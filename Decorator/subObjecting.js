//example decorator pattern

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


var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority
};
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function(){
  console.log('notifiyng important people');
}

UrgentTask.prototype.save = function(){
  console.log('do cools tuff befpre saving');
  this.notify();
  Task.prototype.save.call(this)
};


var ut = new UrgentTask('this is urgent', 1);
ut.complete();
ut.save()
console.log(ut);