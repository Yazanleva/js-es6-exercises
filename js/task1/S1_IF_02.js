// S1_IF_02 — Score to grade

function grade(score) {
  if (!Number.isFinite(score) || score < 0 || score > 100) return null;

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// Tests
console.log(grade(95));  // A
console.log(grade(85));  // B
console.log(grade(75));  // C
console.log(grade(65));  // D
console.log(grade(10));  // F
console.log(grade(101)); // null
