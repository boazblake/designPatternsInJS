var Task = function (data) {
  this.name = data.name,
  this.flyweight = FlyweightFactory.get(
    data.priority, 
    data.project, 
    data.user, 
    data.completed
  )
}
//to hide the fact that you are using a flywighr give it an alias
Task.prototype.getPriority = function () {
  this.flyweight.priority;
};

function Flyweight(priority, project, user, completed) {
  this.priority = priority,
  this.project = project,
  this.user = user,
  this.completed = completed
}

var FlyweightFactory = function(){
  var flyweights = {}

  var get = function (priority, project, user, completed) {
    if (!flyweights[(priority + project + user + completed)]) {
      flyweights[priority + project + user + completed] = 
        new Flyweight(priority, project, user, completed);
    }
    return flyweights[priority + project + user + completed];
  };
  var getCount = function () {
    var count = 0;
    for (var f in flyweights) count++;
    return count;
  };
  return {
    get:get,
getCount:getCount
  }
}()

function TaskCollection () {
  var tasks = {};
  var count = 0;
  var add = function (data) {
    tasks[data.name] = 
    new Task(data);
    count++;
  };
  var get = function (name) {
    return tasks[name];
  };
  var getCount = function () {
    return count;
  };
  return {
    add: add,
    get: get,
    getCount: getCount
  };
}


var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [ 1, 2, 3, 4];
var users = ['Bo', 'Meg', 'Ben', 'Aprl'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 1000000; i++) {
  tasks.add({
    name: 'task' + i,
    priority:priorities[Math.floor((Math.random() * 5))],
    project:projects[Math.floor((Math.random() * 4))],
    user:users[Math.floor((Math.random() * 4))],
    completed:completed[Math.floor((Math.random() * 2))]
  });
};

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) / 1000000);

console.log("Taks: " + tasks.getCount());
console.log("flyweights: " + FlyweightFactory.getCount());