// S2_FOR_05 — Multiplication table (1..10)

for (let row = 1; row <= 10; row++) {
  let line = "";
  for (let col = 1; col <= 10; col++) {
    const val = row * col;
    line += String(val).padStart(4, " ");
  }
  console.log(line);
}
