// S3_OBJ_01 — Safe read

function get(obj, path, fallback) {
  if (obj == null) return fallback;
  const parts = String(path).split(".").filter(Boolean);

  let cur = obj;
  for (const key of parts) {
    if (cur != null && Object.prototype.hasOwnProperty.call(cur, key)) {
      cur = cur[key];
    } else {
      return fallback;
    }
  }
  return cur === undefined ? fallback : cur;
}

// Tests
const data = { a: { b: { c: 10 } }, x: null };
console.log(get(data, "a.b.c", "NO")); // 10
console.log(get(data, "a.b.missing", "NO")); // "NO"
console.log(get(data, "x.y", "NO")); // "NO"
