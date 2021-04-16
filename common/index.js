module.exports = function() {
  console.log('Hello from commonmmmmm')

  const gbrandom = require("gb-random")
  const rand = new gbrandom.Random();

  console.log(rand.getRandomSync(), "gb-random");


}
