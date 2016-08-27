var myRepo = require('./repo.js');

var taskHandler = function() {
  return {
    save: function() {
      myRepo.save('Hi from taskHandler.js');
    }
  }
}

module.exports = taskHandler();