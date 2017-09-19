import { range } from '../util/range';

const input = `
1
10
100
1000
`.trim();

const main = (input: string) => {
  const [first, ...vals] = input.split('\n');

  const res = vals.map(val => {
    const recurseAdd = (range: number[], sum: number) => {
      const head = range.shift();
      if (head === undefined) {
        return sum;
      }

      return recurseAdd(range, head % 3 === 0 || head % 5 === 0 ? head + sum : sum);
    };

    return recurseAdd(range(parseInt(val)), 0);
  });

  return res;
};

console.log(main(input).join('\n'));
