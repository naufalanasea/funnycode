function shiversMeTimbers() {
  // Generate a random number between 1 and 10
  let number = Math.floor(Math.random() * 10) + 1;

  // Use the random number to determine the output
  switch (number) {
    case 1:
      return "Shiver me timbers! Avast ye, mateys!";
    case 2:
      return "Shiver me timbers! I be scared!";
    case 3:
      return "Shiver me timbers! I be cold!";
    case 4:
      return "Shiver me timbers! I be hungry!";
    case 5:
      return "Shiver me timbers! I be thirsty!";
    case 6:
      return "Shiver me timbers! I be tired!";
    case 7:
      return "Shiver me timbers! I be bored!";
    case 8:
      return "Shiver me timbers! I be happy!";
    case 9:
      return "Shiver me timbers! I be sad!";
    case 10:
      return "Shiver me timbers! I be angry!";
  }
}

// Call the function
console.log(shiversMeTimbers());
