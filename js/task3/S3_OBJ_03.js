// S3_OBJ_03 — Pick

function pick(obj, keys) {
  const out = {};
  for (const k of keys) {
    if (obj != null && Object.prototype.hasOwnProperty.call(obj, k)) {
      out[k] = obj[k];
    }
  }
  return out;
}

// Tests
const user = { id: 1, name: "Ola", age: 20 };
console.log(pick(user, ["id", "name", "missing"])); // { id: 1, name: "Ola" }
