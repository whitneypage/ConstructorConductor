/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

 var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
 var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
 var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');

 users.push(tyler, cahlan, lenny);

console.log('Tyler\'s information is ', users[0]);
//Console.log all of Tylers information

  

console.log('Lenny\'s information is ', users[2]);
//Now console.log all of Lennys information




//Now create another instance of User using your own information and then add that to your users array.

var page = new User('Page', 'wpagegarner@gmail.com', 'logcabin');

users.push(page);


console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
  for(var i = 0; i < users.length; i++) {
    console.log(users[i].name);
  }




