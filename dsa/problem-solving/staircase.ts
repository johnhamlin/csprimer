// my optimized solution (uses more memory than Oz by keeping cache)
const cache = new Map<number, number>([
  [0, 1],
  [1, 1],
  [2, 2],
]);

const staircase = (n: number): number => {
  if (cache.has(n)) return cache.get(n)!;

  cache.set(n, staircase(n - 1) + staircase(n - 2) + staircase(n - 3));

  return cache.get(n)!;
};

// Oz's optimized solution
const staircase2 = (n: number): number => {
  let a = 1,
    b = 1,
    c = 2;

  for (let i = 0; i < n; i++) {
    const oldA = a;
    const oldB = b;
    const oldC = c;

    a = oldB;
    b = oldC;
    c = oldA + oldB + oldC;

    console.log({
      a,
      oldA,
      b,
      oldB,
      c,
      oldC,
    });
  }

  return a;
};

// console.log(staircase(1000));
console.log(staircase2(5));
