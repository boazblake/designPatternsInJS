var repoFactory = function() {

  this.getRepo = function (repoType) {

    if (repoType === 'task') {
      if (this.taskRepo){
        console.log('retrieving from cash');
        return this.taskRepo;
      } else {
        this.taskRepo = require('./taskRepo.js')();
        //config code /middleware can be insertd here
        return this.taskRepo;
      }
    }

    if (repoType === 'user') {
      var userRepo = require('./userRepo.js')();
      return userRepo;
    }

    if (repoType === 'project') {
      var projectRepo = require('./projectRepo.js')();
      return projectRepo;
    }

  }

};

module.exports = new repoFactory;