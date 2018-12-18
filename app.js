var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


var fs = require('fs');




// Set up your search parameters
var params = {
  q: 'Google Cloud Platform', //search for tweets containing this
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

function reverseString(str) {
  console.log("**********\nTweet forward: \n************\n\n" + str)
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}


// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let tweet = { text: data.statuses[i].text }
      var tweetString = tweet.text
      // Try to Favorite the selected Tweet
      //console.log("**********\nTweet forward: \n************\n\n" + tweetString)
      fs.writeFile('temp.txt', i, function(err, i){
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });

      console.log("**********\nReversed tweet: \n************\n\n" + reverseString((tweetString)));
    }
  } else {
    console.log(err);
  }
})
