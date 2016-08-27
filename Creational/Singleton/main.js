var taskHandler = require('./taskHandler.js');
var myRepo = require('./repo.js');

myRepo.save('fromMain');
myRepo.save('fromMain');
myRepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
