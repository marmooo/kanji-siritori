import { readLines } from "https://deno.land/std/io/mod.ts";
import { YomiDict } from "https://raw.githubusercontent.com/marmooo/yomi-dict/v0.1.1/mod.js";

function smallToBig(str) {
  const pos = "ァィゥェォヵヶッャュョヮ".indexOf(str);
  if (pos == -1) {
    return str;
  } else {
    return "アイウエオカケツヤユヨワ"[pos];
  }
}

async function build(yomiDict, outputFile, gram, threshold) {
  const siritori = new Array(10);
  for (let i = 0; i < 10; i++) {
    siritori[i] = {};
  }
  for (let i = 1; i <= 10; i++) {
    const fileReader = await Deno.open(`graded-idioms-ja/dist/${i}.csv`);
    for await (const line of readLines(fileReader)) {
      const arr = line.split(",");
      const word = arr[0];
      const count = parseInt(arr[1]);
      if (word.length == gram && count >= threshold) {
        const yomis = yomiDict.get(word);
        if (yomis) {
          const yomi = yomis[0];
          const from = smallToBig(yomi[0]);
          const to = smallToBig(yomi[yomi.length - 1]);
          if (to != "ン" || to != "ー") {
            const datum = word + "|" + to;
            if (siritori[i - 1][from]) {
              siritori[i - 1][from].push(datum);
            } else {
              siritori[i - 1][from] = [datum];
            }
          }
        }
      }
    }
  }
  Deno.writeTextFileSync(outputFile, JSON.stringify(siritori, null, "\t"));
}

const threshold = 100000;
const yomiDict = await YomiDict.load("yomi-dict/yomi.csv");
await build(yomiDict, "src/2.json", 2, threshold);
await build(yomiDict, "src/3.json", 3, threshold);
