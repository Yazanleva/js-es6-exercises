// S3_PIPE_03 — String normalization pipeline

function pipe(...fns) {
  return (x) => fns.reduce((v, fn) => fn(v), x);
}

const trim = s => s.trim();
const lower = s => s.toLowerCase();
const collapseSpaces = s => s.replace(/\s+/g, " ");

const normalize = pipe(trim, lower, collapseSpaces);

// Tests
console.log(normalize("  HeLLo    WoRLD   ")); // "hello world"
