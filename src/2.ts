const input = `
2
10
100
`.trim();

const main = (input: string) => {
  const [first, ...vals] = input.split('\n');

  const res = vals.map(val => {
    const recurseSum = (limit, [first, second]: number[], sum: number) => {
      const next = second + first;
      return next < limit ? recurseSum(limit, [second, next], next % 2 === 0 ? next + sum : sum) : sum;
    }

    return recurseSum(parseInt(val), [1, 2], 2);
  });

  return res;
};

console.log(main(input).join('\n'));
