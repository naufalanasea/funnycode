function giveCompliment() {
  const compliments = ["You're looking radiant today!", "Your code is as elegant as a unicorn!", "You're the JavaScript to my heart."];
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

console.log(giveCompliment());
