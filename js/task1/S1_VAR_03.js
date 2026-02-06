// S1_VAR_03 — "const is not immutable"

const user = {
  name: "Ola",
  tags: []
};

// Mutating the object is allowed
user.tags.push("js");
user.tags.push("es6");

console.log("User after pushing tags:", user);

// Reassigning the variable is NOT allowed
try {
  user = {};
} catch (err) {
  console.log("Reassignment error:", err.message);
}
