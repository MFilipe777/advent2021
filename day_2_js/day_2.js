// Reading input

var fs = require("fs");
var s = fs.readFileSync("input.txt").toString("utf-8");

var inp = s.split("\n").map(function (e) {
  e = e.split(" ");
  e = [e[0], parseInt(e[1])];
  return e;
});

// Part 1

var depth = 0;
var hor = 0;

for (const move of inp) {
  if (move[0] == "up") {
    depth -= move[1];
  } else if (move[0] == "down") {
    depth += move[1];
  } else if (move[0] == "forward") {
    hor += move[1];
  }
}

console.log(hor * depth); // 2117664

// Part 2

var depth = 0;
var hor = 0;
var aim = 0;

for (const move of inp) {
  if (move[0] == "up") {
    aim -= move[1];
  } else if (move[0] == "down") {
    aim += move[1];
  } else if (move[0] == "forward") {
    hor += move[1];
    depth += aim * move[1];
  }
}

console.log(hor * depth); // 2073416724
