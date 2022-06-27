const remSize=parseInt(getComputedStyle(document.documentElement).fontSize),tmpCanvas=document.createElement("canvas"),w1_=Array.from("雨円王音火花貝学気休玉金空月犬見口校山子糸字耳車手出女小森人水正生青夕石赤川先早草足村大男竹中虫町天田土日入年白文木本名目立力林"),w2_=Array.from("引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話"),w3_=Array.from("悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和"),w4_=Array.from("愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録"),w5_=Array.from("圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊幹慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志枝師資飼示似識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏粉編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴"),w6_=Array.from("胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉洗染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸潮賃痛敵展討党糖届難乳認納脳派拝背肺俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱卵覧裏律臨朗論"),w7_=Array.from("握扱依威偉為違緯維壱芋隠陰鋭影越援縁煙鉛汚押奥憶菓箇暇雅介壊戒皆較獲刈甘監汗歓勧乾鑑環含奇鬼祈輝幾儀戯詰脚却丘及朽拠巨距御驚凶恐響叫狭狂況仰駆屈掘繰傾恵迎撃肩堅遣兼軒圏剣玄誇鼓枯継互更荒抗攻稿香恒項豪込婚鎖歳彩載剤咲惨雌伺紫刺脂旨執芝煮斜釈寂狩朱趣需秀舟襲柔獣瞬巡旬盾紹召沼詳床称畳丈飾殖触浸震慎侵寝振薪陣尽尋吹是征姓井跡扇占鮮訴燥騒僧贈即俗耐替拓沢濁脱丹端嘆淡弾恥遅致蓄沖跳徴澄珍沈抵堤摘滴添殿途吐渡奴怒透唐桃盗塔到倒逃踏稲闘胴峠突鈍曇弐悩濃輩杯泊拍迫薄爆髪抜罰繁販搬範般盤被疲彼避尾微匹描浜敏怖膚浮腐敷普賦舞幅払噴柄壁捕舗峰抱砲肪坊忙冒傍帽凡盆漫慢妙眠矛霧娘茂網猛黙紋踊雄与誉腰溶躍謡翼雷頼絡欄離粒慮療隣涙隷麗齢暦劣烈恋露郎惑腕"),w8_=Array.from("哀慰詠悦閲炎宴欧殴乙卸穏架佳華嫁餓怪悔塊概慨該穫隔郭岳掛滑勘肝貫敢緩冠換喚企軌棄棋忌既岐騎犠欺菊吉喫虐虚脅峡凝緊斤愚偶遇啓鶏携掲刑憩契鯨賢倹幻雇顧弧孤悟娯甲孔控拘郊硬綱巧坑慌絞酵克獄魂紺恨墾催債削錯搾撮擦暫施祉諮侍慈軸湿疾赦邪殊寿潤遵徐如晶掌鐘焦衝昇匠譲錠嬢冗嘱辱審伸辛粋炊遂衰穂酔随髄瀬牲婿請隻惜斥籍摂潜繕措阻粗礎双桑葬掃遭憎促賊逮胎怠滞袋滝託卓択諾奪胆鍛壇稚畜窒駐抽鋳彫超聴陳鎮墜訂帝締哲斗塗陶凍痘匿篤豚尿粘婆排陪縛伐帆伴藩畔蛮泌卑碑姫漂苗赴符封伏覆墳紛癖募慕簿崩芳胞縫倣邦飽奉妨乏謀膨房某墨没翻魔埋膜又魅滅免幽憂誘擁揚揺抑裸濫吏隆了猟陵糧厘零霊励裂錬廉炉漏廊浪楼湾"),w1=w1_,w2=w2_.concat(w1),w3=w3_.concat(w2),w4=w4_.concat(w3),w5=w5_.concat(w4),w6=w6_.concat(w5),w7=w7_.concat(w6),w8=w8_.concat(w7);let siritoriList;const wordsList=[w1,w1,w2,w3,w4,w5,w6,w7,w8,w8],size=10,meiro=new Array(12);let score=0,counter=0,processed,idioms,words=w4,level=4;function loadConfig(){localStorage.getItem("darkMode")==1&&(document.documentElement.dataset.theme="dark")}loadConfig();function getRandomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a}function shuffle(a){for(let b=a.length-1;b>=0;b--){const c=Math.floor(Math.random()*(b+1));[a[b],a[c]]=[a[c],a[b]]}return a}function calcReply(){const a=new Array(size*size),b=document.getElementById("meiro").children;for(let c=0;c<size;c++){const d=b[c].children;for(let b=0;b<size;b++){const f=d[b].classList.contains("table-primary"),g=d[b].classList.contains("table-secondary"),e=meiro[c][b];e>0&&(f||g)&&(a[e-1]=d[b].textContent)}}return a}function findMeiroIndex(a){for(let b=0;b<size;b++)for(let c=0;c<size;c++)if(meiro[b][c]==a)return b*size+c;return-1}function prependIdiomLink(b,c){const a=document.createElement("a");a.textContent=b,a.href="https://www.google.com/search?q="+b+"とは",a.target="_blank",a.rel="noopener noreferer",c?a.className="btn btn-light m-1":a.className="btn btn-secondary m-1",solvedPanel.prepend(a)}function showSolved(c,d){const e=document.getElementById("meiro").children;let b=0,a=0;for(let g=0;g<counter;g++){const f=idioms[b];if(!processed[g])if(c[g]==f[a])a==f.length-1&&(prependIdiomLink(f,!0),score+=f.length,document.getElementById("score").textContent=score),processed[g]=!0;else{prependIdiomLink(f,!1);const b=g-a;for(let a=b;a<b+f.length;a++){processed[a]=!0;const c=findMeiroIndex(a+1),d=e[Math.floor(c/size)].children[c%size];d.className="",d.classList.add("table-secondary")}if(d)break}a==f.length-1?(b+=1,a=0):a+=1}}function showHint(){const a=calcReply();showSolved(a,!0)}function showAnswer(){const b=calcReply();showSolved(b,!1);const c=document.getElementById("meiro").children;for(let a=0;a<size;a++){const b=c[a].children;for(let c=0;c<size;c++)meiro[a][c]>0&&(b[c].className="",b[c].classList.add("table-danger"))}const a=document.getElementById("startButton");a.classList.remove("d-none"),a.textContent="スタート";const d=document.getElementById("answerButton");d.classList.add("d-none")}function _getNeighborText(c,a,b,e){let d=c[a].children[b].textContent;return e==1?meiro[a-1][b]!=0&&(d+=c[a-1].children[b].textContent):e==2?meiro[a+1][b]!=0&&(d+=c[a+1].children[b].textContent):e==3?meiro[a][b-1]!=0&&(d+=c[a].children[b-1].textContent):meiro[a][b+1]!=0&&(d+=c[a].children[b+1].textContent),d}function _setNeighborText(a,b,c,e,d,f){f||(a[b].children[c].textContent=d[0]),e==1?a[b-1].children[c].textContent=d[1]:e==2?a[b+1].children[c].textContent=d[1]:e==3?a[b].children[c-1].textContent=d[1]:a[b].children[c+1].textContent=d[1]}function _generateRandomText(a,b){if(b){{const b=a[0];for(let c=0;c<5;c++)if(a=b+words[getRandomInt(0,words.length)],!includeIdiom(a))return a}}else for(let b=0;b<5;b++){for(let b=0;b<2;b++)a[b]=words[getRandomInt(0,words.length)];if(!includeIdiom(a))return a}return a}function includeIdiom(a){return!!idioms.includes(a.slice(0,2))}function startGame(){while(solvedPanel.firstChild)solvedPanel.removeChild(solvedPanel.firstChild);idioms=getIdioms(),generateGame();const a=document.getElementById("startButton");a.classList.add("d-none"),a.textContent="やり直し";const b=document.getElementById("answerButton");b.classList.remove("d-none")}function isPassableRoute(a,b,c){if(c.length==4)return!0;if(c.length==3)if(a==0||a==size-1||b==0||b==size-1)return!0;return!1}function isPassableNeighbor(a,b,c){if(c.length>=3)return!0;if(c.length==2)if(a==0||a==size-1||b==0||b==size-1)return!0;return!1}function getRoute(a,b,f,d){const e=shuffle([1,2,3,4]);let c=getNeighborRoutes(a,b);if(!isPassableNeighbor(a,b,c))return!1;for(let g=0;g<e.length;g++){if(e[g]==1&&0<=a-d&&f!=2){let e=!0;for(let f=1;f<=d;f++)if(c=getNeighborRoutes(a-f,b),!isPassableRoute(a-f,b,c)){e=!1;break}if(e)return[a-1,b,1]}if(e[g]==2&&a+d<size&&f!=1){let e=!0;for(let f=1;f<=d;f++)if(c=getNeighborRoutes(a+f,b),!isPassableRoute(a+f,b,c)){e=!1;break}if(e)return[a+1,b,2]}if(e[g]==3&&0<=b-d&&f!=4){let e=!0;for(let f=1;f<=d;f++)if(c=getNeighborRoutes(a,b-f),!isPassableRoute(a,b-f,c)){e=!1;break}if(e)return[a,b-1,3]}if(e[g]==4&&b+d<size&&f!=3){let e=!0;for(let f=1;f<=d;f++)if(c=getNeighborRoutes(a,b+f),!isPassableRoute(a,b+f,c)){e=!1;break}if(e)return[a,b+1,4]}}return!1}function getNeighborRoutes(a,b){const c=[];return 0<=a-1&&meiro[a-1][b]==0&&c.push([a-1,b,1]),a+1<size&&meiro[a+1][b]==0&&c.push([a+1,b,2]),0<=b-1&&meiro[a][b-1]==0&&c.push([a,b-1,3]),b+1<size&&meiro[a][b+1]==0&&c.push([a,b+1,4]),c}function paint(a,b,d,c){if(d==1){for(let d=0;d<c;d++)counter+=1,meiro[a-d][b]=counter;return[a-c+1,b]}if(d==2){for(let d=0;d<c;d++)counter+=1,meiro[a+d][b]=counter;return[a+c-1,b]}if(d==3){for(let d=0;d<c;d++)counter+=1,meiro[a][b-d]=counter;return[a,b-c+1]}for(let d=0;d<c;d++)counter+=1,meiro[a][b+d]=counter;return[a,b+c-1]}function _p(){let a="";for(let b=0;b<size;b++){for(let c=0;c<size;c++)a+=meiro[b][c];a+="\n"}console.log(a)}function generateGame(){let d=!0;while(d){let a=0,b=getRandomInt(1,size-1),f=!0;counter=0;for(let a=0;a<size;a++){meiro[a]=new Array(size);for(let b=0;b<size;b++)meiro[a][b]=0}let c=getRoute(a,b,-1,idioms[0].length),e=paint(a,b,c[2],idioms[0].length);a=e[0],b=e[1];let g=1;while(f){const h=shuffle(getNeighborRoutes(a,b));if(h.length==0)f=!1;else{let i=!0;for(let j=0;j<h.length;j++)if(c=getRoute(h[j][0],h[j][1],h[j][2],idioms[g].length-1),c){i=!1,paint(h[j][0],h[j][1],h[j][2],1),e=paint(c[0],c[1],c[2],idioms[g].length-1),a=e[0],b=e[1],(a==0||a==size-1||b==0||b==size-1)&&(f=!1,counter>20&&(d=!1,processed=new Array(counter))),g+=1;break}i&&(f=!1)}}}const a=document.getElementById("meiro");while(a.firstChild)a.removeChild(a.firstChild);for(let b=0;b<size;b++){const c=document.createElement("tr");a.appendChild(c);for(let b=0;b<size;b++){const a=document.createElement("td");a.textContent=words[getRandomInt(0,words.length)],c.appendChild(a),a.onclick=()=>{a.classList.toggle("table-primary")}}}const e=a.children;let c=0,b=0;for(let a=1;a<=counter;a++){const d=findMeiroIndex(a),g=idioms[c][b],f=e[Math.floor(d/size)].children[d%size];f.textContent=g,a==1&&f.classList.add("table-secondary"),b==idioms[c].length-1?(c+=1,b=0):b+=1}}function resizeFontSize(a){const b=document.getElementById("masu").offsetWidth,c=1.2,d=remSize*5,e=11,f=(b-d-e)/12/c;a.style.fontSize=f+"px"}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),delete document.documentElement.dataset.theme):(localStorage.setItem("darkMode",1),document.documentElement.dataset.theme="dark")}function generateSiritoriCandidates(b){const a={};let c=b-1;c<0&&(c=0);for(let d=c;d<b;d++)for(const[c,d]of Object.entries(siritoriList[b]))if(a[c]){const b=a[c].concat(d);a[c]=b}else a[c]=d;return a}function getIdioms(){const d=generateSiritoriCandidates(level),b=Object.keys(d);let c=b[getRandomInt(0,b.length)],a=[],e=!0;while(e){for(let e=0;e<30;e++){const b=d[c];if(b){{let d=!0;for(let e=0;e<5;e++){const f=b[getRandomInt(0,b.length)].split("|"),g=f[0];if(c=f[1],!a.includes(g)){a.push(g),d=!1;break}}if(d)break}}else break}a.length==30?e=!1:(c=b[getRandomInt(0,b.length)],a=[])}return a}function _initGame(){const a=["/kanji-siritori/2.json","/kanji-siritori/3.json"];Promise.all(a.map(a=>fetch(a).then(a=>a.json()))).then(a=>{a.slice(1).forEach(b=>{for(let c=0;c<b.length;c++){const d=a[0][c];for(const[a,e]of Object.entries(b[c]))d[a]?d[a]=d[a].concat(e):d[a]=e}for(siritoriList=a[0],idioms=getIdioms(),generateGame();solvedPanel.firstChild;)solvedPanel.removeChild(solvedPanel.firstChild);showAnswer()})})}function _initGame2(){fetch("/kanji-siritori/2.json").then(a=>a.json()).then(a=>{for(siritoriList=a,idioms=getIdioms(),generateGame();solvedPanel.firstChild;)solvedPanel.removeChild(solvedPanel.firstChild);showAnswer()})}const meiroObj=document.getElementById("meiro");resizeFontSize(meiroObj),window.addEventListener("resize",()=>{resizeFontSize(meiroObj)}),document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("startButton").onclick=startGame,document.getElementById("answerButton").onclick=showAnswer,document.getElementById("hintButton").onclick=showHint,document.getElementById("levelOption").addEventListener("change",b=>{const a=b.target;level=a.selectedIndex,idioms=getIdioms(),words=wordsList[a.selectedIndex],startGame()}),document.getElementById("courseOption").addEventListener("change",b=>{const a=b.target;location.href=a.options[a.selectedIndex].value})