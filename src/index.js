import { JKAT } from "https://cdn.jsdelivr.net/npm/@marmooo/kanji@0.0.4/esm/jkat.js";

const remSize = parseInt(getComputedStyle(document.documentElement).fontSize);
// 何でも繋がってしまう漢字は意図的に削除 (一二三四五六七八九十百千上下左右)
const words1 = Array.from(
  "雨円王音火花貝学気休玉金空月犬見口校山子糸字耳車手出女小森人水正生青夕石赤川先早草足村大男竹中虫町天田土日入年白文木本名目立力林",
);
const wordsList = [words1, ...JKAT.slice(1)];
const size = 10;
const meiro = new Array(12);
let score = 0;
let counter = 0;
let processed;
let idioms;
let level = 4;
let words = wordsList[level - 1];
loadConfig();

function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}

function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(array) {
  for (let i = array.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i);
    [array[k], array[i - 1]] = [array[i - 1], array[k]];
  }
  return array;
}

function calcReply() {
  const reply = new Array(size * size);
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    const tds = trs[x].children;
    for (let y = 0; y < size; y++) {
      const selected = tds[y].classList.contains("table-primary");
      const hinted = tds[y].classList.contains("table-secondary");
      const pos = meiro[x][y];
      if (pos > 0 && (selected || hinted)) {
        reply[pos - 1] = tds[y].textContent;
      }
    }
  }
  return reply;
}

function findMeiroIndex(n) {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] == n) {
        return x * size + y;
      }
    }
  }
  return -1;
}

function prependIdiomLink(idiom, correct) {
  const a = document.createElement("a");
  a.textContent = idiom;
  a.href = "https://www.google.com/search?q=" + idiom + "とは";
  a.target = "_blank";
  a.rel = "noopener noreferer";
  if (correct) {
    a.className = "btn btn-light m-1";
  } else {
    a.className = "btn btn-secondary m-1";
  }
  a.role = "button";
  solvedPanel.prepend(a);
}

function showSolved(reply, hinted) {
  const trs = document.getElementById("meiro").children;
  let j = 0;
  let k = 0;
  for (let i = 0; i < counter; i++) {
    const idiom = idioms[j];
    if (!processed[i]) {
      if (reply[i] == idiom[k]) {
        if (k == idiom.length - 1) {
          prependIdiomLink(idiom, true);
          score += idiom.length;
          document.getElementById("score").textContent = score;
        }
        processed[i] = true;
      } else {
        prependIdiomLink(idiom, false);
        const pos = i - k;
        for (let l = pos; l < pos + idiom.length; l++) {
          processed[l] = true;
          const idx = findMeiroIndex(l + 1);
          const td = trs[Math.floor(idx / size)].children[idx % size];
          td.className = "";
          td.classList.add("table-secondary");
        }
        if (hinted) {
          break;
        }
      }
    }
    if (k == idiom.length - 1) {
      j += 1;
      k = 0;
    } else {
      k += 1;
    }
  }
}

function showHint() {
  const reply = calcReply();
  showSolved(reply, true);
}

function showAnswer() {
  const reply = calcReply();
  showSolved(reply, false);
  const trs = document.getElementById("meiro").children;
  for (let x = 0; x < size; x++) {
    const tds = trs[x].children;
    for (let y = 0; y < size; y++) {
      if (meiro[x][y] > 0) {
        tds[y].className = "";
        tds[y].classList.add("table-danger");
      }
    }
  }
  const startButton = document.getElementById("startButton");
  startButton.classList.remove("d-none");
  startButton.textContent = "スタート";
  const answerButton = document.getElementById("answerButton");
  answerButton.classList.add("d-none");
}

function _getNeighborText(trs, x, y, direction) {
  let text = trs[x].children[y].textContent;
  if (direction == 1) {
    if (meiro[x - 1][y] != 0) {
      text += trs[x - 1].children[y].textContent;
    }
  } else if (direction == 2) {
    if (meiro[x + 1][y] != 0) {
      text += trs[x + 1].children[y].textContent;
    }
  } else if (direction == 3) {
    if (meiro[x][y - 1] != 0) {
      text += trs[x].children[y - 1].textContent;
    }
  } else {
    if (meiro[x][y + 1] != 0) {
      text += trs[x].children[y + 1].textContent;
    }
  }
  return text;
}

function startGame() {
  while (solvedPanel.firstChild) {
    solvedPanel.removeChild(solvedPanel.firstChild);
  }
  idioms = getIdioms();
  generateGame();
  const startButton = document.getElementById("startButton");
  startButton.classList.add("d-none");
  startButton.textContent = "やり直し";
  const answerButton = document.getElementById("answerButton");
  answerButton.classList.remove("d-none");
}

function isPassableRoute(x, y, routes) {
  if (routes.length == 4) {
    return true;
  } else if (routes.length == 3) {
    if (x == 0 || x == size - 1 || y == 0 || y == size - 1) {
      return true;
    }
  }
  return false;
}

function isPassableNeighbor(x, y, routes) {
  if (routes.length >= 3) {
    return true;
  } else if (routes.length == 2) {
    if (x == 0 || x == size - 1 || y == 0 || y == size - 1) {
      return true;
    }
  }
  return false;
}

function getRoute(x, y, direction, n) {
  const directions = shuffle([1, 2, 3, 4]);
  let tmpRoutes = getNeighborRoutes(x, y);
  if (!isPassableNeighbor(x, y, tmpRoutes)) {
    return false;
  }

  for (let d = 0; d < directions.length; d++) {
    if (directions[d] == 1 && 0 <= x - n && direction != 2) {
      let passable = true;
      for (let i = 1; i <= n; i++) {
        tmpRoutes = getNeighborRoutes(x - i, y);
        if (!isPassableRoute(x - i, y, tmpRoutes)) {
          passable = false;
          break;
        }
      }
      if (passable) return [x - 1, y, 1];
    }
    if (directions[d] == 2 && x + n < size && direction != 1) {
      let passable = true;
      for (let i = 1; i <= n; i++) {
        tmpRoutes = getNeighborRoutes(x + i, y);
        if (!isPassableRoute(x + i, y, tmpRoutes)) {
          passable = false;
          break;
        }
      }
      if (passable) return [x + 1, y, 2];
    }
    if (directions[d] == 3 && 0 <= y - n && direction != 4) {
      let passable = true;
      for (let i = 1; i <= n; i++) {
        tmpRoutes = getNeighborRoutes(x, y - i);
        if (!isPassableRoute(x, y - i, tmpRoutes)) {
          passable = false;
          break;
        }
      }
      if (passable) return [x, y - 1, 3];
    }
    if (directions[d] == 4 && y + n < size && direction != 3) {
      let passable = true;
      for (let i = 1; i <= n; i++) {
        tmpRoutes = getNeighborRoutes(x, y + i);
        if (!isPassableRoute(x, y + i, tmpRoutes)) {
          passable = false;
          break;
        }
      }
      if (passable) return [x, y + 1, 4];
    }
  }
  return false;
}

function getNeighborRoutes(x, y) {
  const routes = [];
  if (0 <= x - 1 && meiro[x - 1][y] == 0) {
    routes.push([x - 1, y, 1]);
  }
  if (x + 1 < size && meiro[x + 1][y] == 0) {
    routes.push([x + 1, y, 2]);
  }
  if (0 <= y - 1 && meiro[x][y - 1] == 0) {
    routes.push([x, y - 1, 3]);
  }
  if (y + 1 < size && meiro[x][y + 1] == 0) {
    routes.push([x, y + 1, 4]);
  }
  return routes;
}

function paint(x, y, direction, n) {
  if (direction == 1) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x - i][y] = counter;
    }
    return [x - n + 1, y];
  } else if (direction == 2) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x + i][y] = counter;
    }
    return [x + n - 1, y];
  } else if (direction == 3) {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x][y - i] = counter;
    }
    return [x, y - n + 1];
  } else {
    for (let i = 0; i < n; i++) {
      counter += 1;
      meiro[x][y + i] = counter;
    }
    return [x, y + n - 1];
  }
}

function _p() {
  let str = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      str += meiro[i][j];
    }
    str += "\n";
  }
  console.log(str);
}

function generateGame() {
  // 開始地点を選び隣接しないように熟語を埋めていく
  let generating = true;
  while (generating) {
    let x1 = 0;
    let y1 = getRandomInt(1, size - 1);
    let painting = true;
    counter = 0;
    for (let x = 0; x < size; x++) {
      meiro[x] = new Array(size);
      for (let y = 0; y < size; y++) {
        meiro[x][y] = 0;
      }
    }
    let route = getRoute(x1, y1, -1, idioms[0].length);
    let xy = paint(x1, y1, route[2], idioms[0].length);
    x1 = xy[0];
    y1 = xy[1];
    let i = 1;
    while (painting) {
      const firsts = shuffle(getNeighborRoutes(x1, y1));
      if (firsts.length == 0) {
        painting = false;
      } else {
        let noRoute = true;
        for (let j = 0; j < firsts.length; j++) {
          route = getRoute(
            firsts[j][0],
            firsts[j][1],
            firsts[j][2],
            idioms[i].length - 1,
          );
          if (route) {
            noRoute = false;
            paint(firsts[j][0], firsts[j][1], firsts[j][2], 1);
            xy = paint(route[0], route[1], route[2], idioms[i].length - 1);
            x1 = xy[0];
            y1 = xy[1];
            if (x1 == 0 || x1 == size - 1 || y1 == 0 || y1 == size - 1) {
              painting = false;
              if (counter > 20) { // 良い迷路になっている
                generating = false;
                processed = new Array(counter); // 回答リストのキャッシュを生成
              }
            }
            i += 1;
            break;
          }
        }
        if (noRoute) painting = false;
      }
    }
  }
  const meiroNode = document.getElementById("meiro");
  while (meiroNode.firstChild) meiroNode.removeChild(meiroNode.firstChild);
  for (let x = 0; x < size; x++) {
    const tr = document.createElement("tr");
    meiroNode.appendChild(tr);
    for (let y = 0; y < size; y++) {
      const td = document.createElement("td");
      td.textContent = words[getRandomInt(0, words.length)];
      tr.appendChild(td);
      td.onclick = () => {
        td.classList.toggle("table-primary");
      };
    }
  }
  const trs = meiroNode.children;
  let j = 0;
  let k = 0;
  for (let i = 1; i <= counter; i++) {
    const idx = findMeiroIndex(i);
    const idiom = idioms[j][k];
    const td = trs[Math.floor(idx / size)].children[idx % size];
    td.textContent = idiom;
    if (i == 1) {
      td.classList.add("table-secondary");
    }
    if (k == idioms[j].length - 1) {
      j += 1;
      k = 0;
    } else {
      k += 1;
    }
  }
}

function resizeFontSize(node) {
  const meiroSize = document.getElementById("masu").offsetWidth;
  const margin = 1.2; // 小さすぎると overflow で表示が崩れる
  const padding = remSize * 5;
  const border = 11;
  const fontSize = (meiroSize - padding - border) / 12 / margin;
  node.style.fontSize = fontSize + "px";
}

function generateSiritoriCandidates(level) {
  const course = document.getElementById("courseOption").selectedIndex;
  const target = problems[course][level];
  const candidates = {};
  let from = level - 1;
  if (from < 0) from = 0;
  for (let i = from; i < level; i++) {
    for (const [aiueo, idioms] of Object.entries(target)) {
      if (candidates[aiueo]) {
        const newIdioms = candidates[aiueo].concat(idioms);
        candidates[aiueo] = newIdioms;
      } else {
        candidates[aiueo] = idioms;
      }
    }
  }
  return candidates;
}

function getIdioms() {
  const siritori = generateSiritoriCandidates(level);
  const aiueos = Object.keys(siritori);
  let aiueo = aiueos[getRandomInt(0, aiueos.length)];
  let list = [];
  let generating = true;
  while (generating) {
    for (let i = 0; i < 30; i++) {
      const tmpIdioms = siritori[aiueo];
      if (tmpIdioms) {
        let dupricated = true;
        for (let i = 0; i < 5; i++) {
          const arr = tmpIdioms[getRandomInt(0, tmpIdioms.length)].split("|");
          const idiom = arr[0];
          aiueo = arr[1];
          if (!list.includes(idiom)) {
            list.push(idiom);
            dupricated = false;
            break;
          }
        }
        if (dupricated) {
          break;
        }
      } else {
        break;
      }
    }
    if (list.length == 30) {
      generating = false;
    } else {
      // 小1は生成不可
      aiueo = aiueos[getRandomInt(0, aiueos.length)];
      list = [];
    }
  }
  return list;
}

function fetchData() {
  const urls = ["/kanji-siritori/2.json", "/kanji-siritori/3.json"];
  return Promise.all(urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
  ))
    .then((data) => {
      problems.push(data[0]);
      problems.push(data[1]);
      initGame();
    });
}

function initGame() {
  for (let i = 0; i < problems[0].length; i++) {
    for (const [aiueo, tmpIdioms] of Object.entries(problems[0][i])) {
      if (problems[1][i][aiueo]) {
        problems[1][i][aiueo].push(...tmpIdioms);
      } else {
        problems[1][i][aiueo] = tmpIdioms;
      }
    }
  }
  idioms = getIdioms();
  generateGame();
  while (solvedPanel.firstChild) {
    solvedPanel.removeChild(solvedPanel.firstChild);
  }
  showAnswer();
}

const problems = [];
fetchData();

const meiroObj = document.getElementById("meiro");
resizeFontSize(meiroObj);
window.addEventListener("resize", () => {
  resizeFontSize(meiroObj);
});

document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("startButton").onclick = startGame;
document.getElementById("answerButton").onclick = showAnswer;
document.getElementById("hintButton").onclick = showHint;
document.getElementById("levelOption").addEventListener("change", (event) => {
  const obj = event.target;
  level = obj.selectedIndex;
  idioms = getIdioms();
  words = wordsList[obj.selectedIndex];
  startGame();
});
