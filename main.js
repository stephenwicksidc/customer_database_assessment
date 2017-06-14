// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var url = 'https://randomuser.me/api/?results=12';

fetch(url)
.then(function(response) {
   response.json().then(function(data) {
     console.log ("Data processed:",data)
     //var picture1 = [object.results.0.picture.large]
  })
  })

//(function () {

//  'use strict';

  // Your Code Goes Here

//})();