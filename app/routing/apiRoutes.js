
var friendData = require("../data/friends");


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    
      friendData.push(req.body);
      res.json(true);
    
  });


  //
  app.get("/api/friends/match", function (req, res) {

  
    var match = {
      score: 41,
      name: ""
    };
    
    
    var currentUserScore = friendData[friendData.length-1].answers.reduce();

    for (var i = 0; i < friendData.length-1; i++){
      compareMatch = friendData[i].answers.reduce();
      matchDiff = currentUserScore - compareMatch
        if(matchDiff < match.score){
          match.score = matchDiff
          match.name = friendData[i].name
        }
      }
    console.log(match);  
  });

}