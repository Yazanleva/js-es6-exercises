// S1_SW_01 — Day name (1..7 => Monday..Sunday)

function dayName(n) {
  switch (n) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return null;
  }
}

// Tests
console.log(dayName(1)); // Monday
console.log(dayName(7)); // Sunday
console.log(dayName(0)); // null
