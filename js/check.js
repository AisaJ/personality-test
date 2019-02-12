function checkPersonality(){
  var user = prompt("Please enter your name: ");
  alert("Hi "+user+" , let's see where you fall.");

  var pet = prompt("Which pet do you prefer? Dog or Cat");
  var pet2 = pet.toLowerCase();
  var environ = prompt("Do you like indoor or outdoor activities?");
  var environ2 = environ.toLowerCase();
  var color = prompt("What color choices do you prefer? Bright or Quiet")
  var color2 = color.toLowerCase();

  if( pet2==="dog" && environ2==="outdoor" && color2==="bright"){
    alert ("Awesome! You are extroverted! Way to go on the high energy vibes!!");
  }else if (pet2==="dog" && environ2==="outdoor" && color2==="quiet") {
    alert("Dude! You are ambiverted! Your personality lies between introverts and extroverts. How cool is that!");
  }else if (pet2==="cat" && environ2==="indoor" && color2==="quiet") {
    alert("Hey introvert. Sssh! We know you don't like loud things. This is our secret.");
  }else if (pet2==="cat" && environ2==="outdoor" && color2==="bright") {
    alert ("You are an Extrovert! Though you like your space to be respected and appreciate some alon time.");
  }else if (pet2==="dog" && environ2==="indoor" && color2==="bright") {
    alert("Amazing personality! You are an Ambivert. You tend to blen in any enviroment. Though it takes you time to adapt.")
  }else if (pet2==="cat" && environ2==="outdoor" && color2==="quiet") {
    alert("You are an Introvert. You enjoy calm and relaxed situations though you like interracting with people on the low.")
  }else if (pet2==="dog" && environ2==="indoor" && color2==="quiet") {
    alert ("You are more Introverted. Occassionally you enjoy some company but only those of whom you trust. Dogs make the pets btw! Man's best friend.")
  }else{
    confirm("You must have missed a question. Retake the test.")
  }

  confirm("Feels great knowing your personality! Not a skeleton anymore...This is a checkpoint for you.")
}
