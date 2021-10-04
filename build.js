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

async function build(yomiDict, inputDir, outputFile) {
  const siritori = new Array(10);
  for (let i = 0; i < 10; i++) {
    siritori[i] = {};
  }
  for (let i = 1; i <= 10; i++) {
    const fileReader = await Deno.open(inputDir + i + ".lst");
    for await (const line of readLines(fileReader)) {
      const yomis = yomiDict.get(line);
      if (yomis) {
        const yomi = yomis[0];
        const from = smallToBig(yomi[0]);
        const to = smallToBig(yomi[yomi.length - 1]);
        if (to != "ン" || to != "ー") {
          const datum = line + "|" + to;
          if (siritori[i - 1][from]) {
            siritori[i - 1][from].push(datum);
          } else {
            siritori[i - 1][from] = [datum];
          }
        }
      }
    }
  }
  Deno.writeTextFile(outputFile, JSON.stringify(siritori, null, "\t"));
}

const yomiDict = await YomiDict.load("yomi-dict/yomi.csv");
await build(yomiDict, "ngram-idioms/kanji-2-5000/", "src/2.json");
await build(yomiDict, "ngram-idioms/kanji-3-5000/", "src/3.json");
