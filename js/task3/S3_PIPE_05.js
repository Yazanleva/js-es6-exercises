// S3_PIPE_05 — Log lines pipeline

function pipe(...fns) {
  return (x) => fns.reduce((v, fn) => fn(v), x);
}

const parse = (lines) =>
  lines.map(line => {
    const [levelPart, rest] = line.split(":");
    const level = (levelPart || "").trim();
    const match = /user=(\d+)/.exec(line);
    const userId = match ? Number(match[1]) : null;
    return { level, userId, raw: line };
  });

const onlyInfo = (entries) => entries.filter(e => e.level === "INFO");
const extractUserIds = (entries) => entries.map(e => e.userId).filter(id => id !== null);

const getInfoUserIds = pipe(parse, onlyInfo, extractUserIds);

// Tests
const lines = [
  "INFO: user=42",
  "WARN: user=7",
  "INFO: user=100",
  "INFO: no user here"
];

console.log(getInfoUserIds(lines)); // [42, 100]
