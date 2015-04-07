//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

 var User = function(name, email, password, totalScore) {
 	this.name = name;
 	this.email = email;
 	this.password = password;
 	this.totalScore = totalScore;
}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function(title, answersArray, rightAnswer, difficulty) {
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;
}


//Create a users Array which is going to hold all of our users.

 var users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

 var page = new User('Page', 'wpagegarner@gmail.com', 'logcabin', 10);
 var macy = new User('Macy', 'macy@gmail.com', 'hunter', 100);
 var hunter = new User('Hunter', 'hunter@gmail.com', 'macy', 1000);

 users.push(page, macy, hunter);


//Create a questions Array which is going to hold all of our questions

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var q1 = new Question('q1', 'T/F: Inheritance is achieved in JavaScript through Prototypes?', 'F', 5);
var q2 = new Question('q2', 'T/F: JavaScript is just a scripting version of Java', 'T', 2);
var q3 = new Question('q3', "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", 'T', 2);
       


//Now push all of your instances of Question into the questions Array
questions.push(q1, q2, q3);


console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
var data = function(arr) {
  for (var i = 0; i < arr.length; i++) {
	for (var key in arr[i]) {
		console.log(arr[i][key]);
	}
  }
}
data(questions);
data(users);

/*for(var i = 0; i < users.length; i++) {
	for(var key in users[i]) {
		console.log(users[i][key]);
	}*/

