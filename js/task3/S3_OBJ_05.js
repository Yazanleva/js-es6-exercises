// S3_OBJ_05 — Invert (swap keys and values). If values not unique, store array of keys.

function invert(obj) {
  const out = {};

  for (const k in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;

    const v = String(obj[k]); // keys must be strings in plain objects
    if (!Object.prototype.hasOwnProperty.call(out, v)) {
      out[v] = k;
    } else {
      // convert to array if collision
      out[v] = Array.isArray(out[v]) ? [...out[v], k] : [out[v], k];
    }
  }

  return out;
}

// Tests
console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
console.log(invert({ a: 1, b: 1, c: 2 })); // { "1": ["a","b"], "2": "c" }
