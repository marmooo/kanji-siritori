import { TextLineStream } from "jsr:@std/streams/text-line-stream";
import { YomiDict } from "npm:yomi-dict@0.2.1";

function smallToBig(str) {
  const pos = "ァィゥェォヵヶッャュョヮ".indexOf(str);
  if (pos == -1) {
    return str;
  } else {
    return "アイウエオカケツヤユヨワ"[pos];
  }
}

function setSiritori(siritori, i, word) {
  let yomis = yomiDict.get(word);
  if (yomis) {
    yomis = yomis.filter((yomi) => yomi.at(-1) != "っ");
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

async function build(outputFile, gram, threshold) {
  const siritori = new Array(12);
  for (let i = 0; i < 12; i++) {
    siritori[i] = {};
  }
  for (let i = 1; i <= 12; i++) {
    const file = await Deno.open(`graded-idioms-ja/dist/${i}.csv`);
    const lineStream = file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream());
    for await (const line of lineStream) {
      const arr = line.split(",");
      const word = arr[0];
      const count = parseInt(arr[1]);
      if (word.length != gram) continue;
      if (i <= 9) {
        if (threshold <= count) {
          setSiritori(siritori, i, word);
        }
      } else {
        setSiritori(siritori, i, word);
      }
    }
  }
  Deno.writeTextFileSync(outputFile, JSON.stringify(siritori, null, "\t"));
}

const threshold = 100000;
const yomiDict = await YomiDict.load("yomi-dict/yomi.csv");
await build("src/2.json", 2, threshold);
await build("src/3.json", 3, threshold);
