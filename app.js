function welcome() {
  let song = prompt("What is a song that changed your life?");
  alert("I love " + song + " too.");
  console.log(song);
  let dish = prompt("What dish takes you back to your childhood?");
  alert("I know how to cook " + dish + "!");
  console.log(dish);
  let holiday = prompt("What's your favourite holiday destination?");
  alert("Good thinking! " + holiday + " is a great place.");
  console.log(holiday);
  let feeling = prompt("What's a feeling you like experiencing?");
  alert(
    "I can feel " + feeling + " sometimes, but I am not sure if I like it."
  );
  console.log(feeling);
  alert(
    "I wish we could listen to " +
      song +
      ", eating " +
      dish +
      " in " +
      holiday +
      ", while feeling " +
      feeling +
      ". "
  );
  console.log(alert);
  document.write(
    "I wish we could listen to " +
      song +
      ", eating " +
      dish +
      " in " +
      holiday +
      ", while feeling " +
      feeling +
      ". "
  );
}

function love() {
  let loveCounter = prompt("How many times have you fallen in love?");
  if (loveCounter == 0) {
    alert("I am sorry for you.");
  } else if (loveCounter <= 3) {
    alert("How lucky you are!");
  } else if (loveCounter > 3) {
    alert("You might be confusing love with desire.");
  }
}
