// S1_VAR_10 — Mini debugger

function debugValue(label, value) {
  let type;

  if (value === null) {
    type = "null";
  } else if (Array.isArray(value)) {
    type = "array";
  } else {
    type = typeof value;
  }

  console.log({
    label,
    value,
    type
  });
}

// Tests
debugValue("number", 42);
debugValue("string", "hello");
debugValue("boolean", false);
debugValue("null value", null);
debugValue("array", [1, 2, 3]);
debugValue("object", { a: 1 });
debugValue("function", () => {});
debugValue("undefined", undefined);
