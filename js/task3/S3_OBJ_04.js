// S3_OBJ_04 — Omit

function omit(obj, keys) {
  const remove = new Set(keys);
  const out = {};

  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k) && !remove.has(k)) {
      out[k] = obj[k];
    }
  }
  return out;
}

// Tests
const cfg = { host: "localhost", port: 3000, secret: "123" };
console.log(omit(cfg, ["secret"])); // { host: ..., port: ... }
