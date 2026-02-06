// S1_SW_03 — Simple calculator

function calc(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return null;
      return a / b;
    default:
      return null;
  }
}

// Tests
console.log(calc(10, "+", 5)); // 15
console.log(calc(10, "-", 5)); // 5
console.log(calc(10, "*", 5)); // 50
console.log(calc(10, "/", 5)); // 2
console.log(calc(10, "/", 0)); // null
console.log(calc(10, "?", 5)); // null
