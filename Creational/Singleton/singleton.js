//EXAMPLE SINGLETON
//
//running this file in node illustrates how (using commonJS) 
//we are able to cache an instance of object for reuse

var TaskRepo = (function() {
  var taskRepo;
  function createRepo() {
    var taskRepo = new Object("Task");
    return taskRepo;
  }
  return {
    getInstance: function () {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  };
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if(repo1 === repo2){
  console.log("Same TaskRepo")
}