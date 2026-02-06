// S1_SW_02 — Command router

function runCommand(cmd) {
  switch (cmd) {
    case "start":
      return "Starting...";
    case "stop":
      return "Stopping...";
    case "status":
      return "Status: OK";
    default:
      return "Unknown command";
  }
}

// Tests (print outside the function)
console.log(runCommand("start"));
console.log(runCommand("stop"));
console.log(runCommand("status"));
console.log(runCommand("nope"));
