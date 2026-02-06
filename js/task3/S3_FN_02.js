// S3_FN_02 — Sort by property (age ascending)

const people = [
  { name: "Ola", age: 22 },
  { name: "Eva", age: 19 },
  { name: "Adam", age: 30 },
];

people.sort((a, b) => a.age - b.age);

// Test
console.log(people.map(p => `${p.name}:${p.age}`)); // Eva:19, Ola:22, Adam:30
