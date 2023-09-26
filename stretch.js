const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map((i) => {
  const { x, y} = i;
  const mathWorks = Math.sqrt(x * x + y * y);
  return mathWorks;
})

console.log(result[0]);
console.log(result[0] === 5);
console.log(result[1]);
console.log(result[1] === 13);
console.log(result[2]);
console.log(result[2] === 17);
