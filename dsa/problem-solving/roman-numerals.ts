const input = Number(Bun.argv[2] ?? 0);

const map = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "DC"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

const nToRoman = (n: number): string => {
  const output: string[] = [];

  while (n) {
    for (const [arabic, roman] of map) {
      while (n - arabic >= 0) {
        n -= arabic;
        output.push(roman);
      }
    }
  }

  return output.join("");
};

const nToRomanRecursive = (n: number) => {
  for (const [arabic, roman] of map) {
    if (arabic <= n) {
      return roman + nToRoman(n - arabic);
    }
  }
  return "";
};

// console.log(nToRoman(input));
console.log(nToRomanRecursive(input));

// for (let i = 1; i <= input; i++) {
//   console.log(nToRoman(i));
// }
