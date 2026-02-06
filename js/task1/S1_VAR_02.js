// S1_VAR_02 — Block scope check

// Using let (block-scoped)
try {
  {
    let message = "Hello from let";
  }
  console.log(message);
} catch (err) {
  console.log("let scope error:", err.message);
}

// Using var (function-scoped)
{
  var note = "Hello from var";
}
console.log("var works outside block:", note);

/*
Explanation:
Variables declared with let are block-scoped and cannot be accessed outside the block.
Variables declared with var are function-scoped, so they are accessible outside the block.
*/
