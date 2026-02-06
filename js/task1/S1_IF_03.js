// S1_IF_03 — Truthy/falsy guard

function normalizeName(input) {
  if (!input) return "Anonymous";
  return String(input).trim();
}

// Tests (as requested)
console.log(normalizeName(""));       // Anonymous
console.log(normalizeName(" "));      // "" (truthy string, trims to empty)
console.log(normalizeName(null));     // Anonymous
console.log(normalizeName(" Ola "));  // Ola
