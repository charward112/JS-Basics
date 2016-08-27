//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(testName) {

  if (testName === "Tyler") {
      return true;
    }
    else {
      return false;
  }

}
//Code Here


//////////////////PROBLEM 2////////////////////

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
 var name = prompt("What is your name?");
  return name;
} //Code Here


//////////////////PROBLEM 3////////////////////

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function getName() {
 var name = prompt("What is your name?");
  return name;
}

  function welcome() {
    var name = getName();
    alert("Hello, " + name);
      return "Hello, " + name;
}

console.log(welcome());//Code Here


//////////////////PROBLEM 4////////////////////

//What is the difference between arguments and parameters?

//parameters are the definition for the function whereas the argument is what calls the function method.  //Answer Here


//////////////////PROBLEM 5////////////////////

//What are all the falsy values in JavaScript and how do you check if something is falsy?

// 0, "", null, NAN, undefined, false
// test a parameter against itself(falsey values) using the === or !== in an if statement.
//Answer Here


//////////////////PROBLEM 6////////////////////

//Create a function called myName that returns your name

function myName() {
    return "Casey";
}
console.log(myName());  //Code Here


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
