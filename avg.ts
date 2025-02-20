const getSum = (score: number[]): number => {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  return sum;
};

const getAvg = (score: number[]): number => getSum(score) / score.length;

const score: number[] = [];

for (let i = 2; i < process.argv.length; i++)
  score.push(Number(process.argv[i]));

console.table(score);

console.log("人数:" + score.length);
console.log("最高点:" + Math.max(...score));
console.log("最低点:" + Math.min(...score));
console.log("合計:" + getSum(score));
console.log("平均:" + getAvg(score));
