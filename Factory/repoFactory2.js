var repoFactory = function() {
  var repos = this

  //ANY ARRAY
  var repoList = [{name:'task', src:'./taskRepo.js'},
                  {name:'user', src:'./userRepo.js'},
                  {name:'project', src:'./projectRepo.js'}]

  repoList.forEach(function(repo){
    repos[repo.name] = require(repo.src)()
  });

};

module.exports = new repoFactory;