var Task = require('./task.js')
var taskRepo = require('./taskRepo.js')
var userRepo = require('./userRepo.js')
var projectRepo = require('./projectRepo.js')

var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task.save();
