const WORDS=[
["achieve","/əˈtʃiːv/","đạt được","She worked hard to achieve her goal.","Daily"],
["improve","/ɪmˈpruːv/","cải thiện","I want to improve my English.","Daily"],
["reliable","/rɪˈlaɪəbəl/","đáng tin cậy","He is a reliable friend.","People"],
["opportunity","/ˌɑːpərˈtuːnəti/","cơ hội","This is a great opportunity.","Daily"],
["confident","/ˈkɑːnfɪdənt/","tự tin","She feels confident now.","People"],
["environment","/ɪnˈvaɪrənmənt/","môi trường","We should protect the environment.","Nature"],
["experience","/ɪkˈspɪriəns/","kinh nghiệm","Experience helps you learn.","Work"],
["knowledge","/ˈnɑːlɪdʒ/","kiến thức","Knowledge is useful.","Study"],
["successful","/səkˈsesfəl/","thành công","The project was successful.","Work"],
["challenge","/ˈtʃælɪndʒ/","thử thách","Every challenge teaches us something.","Study"],
["benefit","/ˈbenɪfɪt/","lợi ích","Exercise has many benefits.","Daily"],
["decision","/dɪˈsɪʒən/","quyết định","It was a difficult decision.","Work"],
["develop","/dɪˈveləp/","phát triển","Children develop quickly.","Study"],
["focus","/ˈfoʊkəs/","tập trung","Try to focus on the lesson.","Study"],
["goal","/ɡoʊl/","mục tiêu","My goal is to speak English well.","Study"],
["habit","/ˈhæbɪt/","thói quen","Reading is a good habit.","Daily"],
["journey","/ˈdʒɜːrni/","hành trình","Learning is a long journey.","Daily"],
["local","/ˈloʊkəl/","địa phương","We support local businesses.","People"],
["natural","/ˈnætʃərəl/","tự nhiên","This product is natural.","Nature"],
["patient","/ˈpeɪʃənt/","kiên nhẫn","Be patient with yourself.","People"],
["prepare","/prɪˈper/","chuẩn bị","Prepare for the test.","Study"],
["progress","/ˈprɑːɡres/","tiến bộ","You are making progress.","Study"],
["reduce","/rɪˈduːs/","giảm","We need to reduce waste.","Nature"],
["require","/rɪˈkwaɪər/","yêu cầu","This job requires experience.","Work"],
["solution","/səˈluːʃən/","giải pháp","We need a simple solution.","Work"],
["support","/səˈpɔːrt/","hỗ trợ","Friends support each other.","People"],
["travel","/ˈtrævəl/","du lịch","I love to travel.","Daily"],
["useful","/ˈjuːsfəl/","hữu ích","This book is useful.","Study"],
["value","/ˈvæljuː/","giá trị","Time has great value.","Work"],
["wonderful","/ˈwʌndərfəl/","tuyệt vời","We had a wonderful day.","Daily"],
["accept","/əkˈsept/","chấp nhận","Please accept my apology.","People"],
["avoid","/əˈvɔɪd/","tránh","Avoid unnecessary stress.","Daily"],
["careful","/ˈkerfəl/","cẩn thận","Be careful on the road.","Daily"],
["create","/kriˈeɪt/","tạo ra","Let's create something useful.","Work"],
["decide","/dɪˈsaɪd/","quyết định","We need to decide today.","Work"],
["enough","/ɪˈnʌf/","đủ","We have enough time.","Daily"],
["familiar","/fəˈmɪliər/","quen thuộc","The place looks familiar.","People"],
["frequent","/ˈfriːkwənt/","thường xuyên","Frequent practice helps.","Study"],
["generous","/ˈdʒenərəs/","hào phóng","He is generous with his time.","People"],
["healthy","/ˈhelθi/","khỏe mạnh","A healthy diet matters.","Nature"],
["increase","/ɪnˈkriːs/","tăng","Prices may increase.","Work"],
["manage","/ˈmænɪdʒ/","quản lý","Can you manage the task?","Work"],
["notice","/ˈnoʊtɪs/","nhận thấy","Did you notice the change?","Daily"],
["prefer","/prɪˈfɜːr/","thích hơn","I prefer tea.","Daily"],
["protect","/prəˈtekt/","bảo vệ","We must protect nature.","Nature"],
["realize","/ˈriːəlaɪz/","nhận ra","I realized my mistake.","Study"],
["respect","/rɪˈspekt/","tôn trọng","Respect other people.","People"],
["responsible","/rɪˈspɑːnsəbəl/","có trách nhiệm","Be responsible for your work.","Work"],
["simple","/ˈsɪmpəl/","đơn giản","Keep it simple.","Daily"],
["specific","/spəˈsɪfɪk/","cụ thể","Give me a specific example.","Study"],
["suggest","/səˈdʒest/","đề nghị","I suggest a short break.","Work"],
["talent","/ˈtælənt/","tài năng","She has a natural talent.","People"],
["understand","/ˌʌndərˈstænd/","hiểu","Do you understand?","Study"],
["variety","/vəˈraɪəti/","sự đa dạng","We need more variety.","Daily"],
["wonder","/ˈwʌndər/","tự hỏi","I wonder why.","Daily"],
["adapt","/əˈdæpt/","thích nghi","We must adapt to change.","Work"],
["balance","/ˈbæləns/","cân bằng","Find a balance between work and rest.","Daily"],
["curious","/ˈkjʊriəs/","tò mò","Children are naturally curious.","People"],
["effective","/ɪˈfektɪv/","hiệu quả","This method is effective.","Study"],
["essential","/ɪˈsenʃəl/","thiết yếu","Sleep is essential.","Daily"]
];

const READING=[
{title:"A Small Daily Habit",text:"Mai wants to improve her English. Every morning, she learns five new words and reads a short paragraph. At first it is difficult, but after a few weeks she feels more confident.",q:"What does Mai do every morning?",a:"She learns five new words and reads a short paragraph.",opts:["She learns five new words and reads a short paragraph.","She watches movies for three hours.","She travels to another city.","She writes a long book."]},
{title:"A Useful Skill",text:"Tom works in a small team. He often has to manage several tasks, so he makes a simple plan each morning. This habit helps him focus and finish important work on time.",q:"Why does Tom make a plan?",a:"It helps him focus and finish important work on time.",opts:["It helps him travel.","It helps him cook dinner.","It helps him focus and finish important work on time.","It makes his team larger."]},
{title:"Learning From Mistakes",text:"Linh made a mistake in a presentation. Instead of giving up, she asked a colleague for support and prepared again. The next presentation was much better.",q:"What did Linh do after her mistake?",a:"She asked for support and prepared again.",opts:["She gave up immediately.","She asked for support and prepared again.","She stopped studying.","She changed her job."]}
];

let state=JSON.parse(localStorage.getItem("namromah22")||"{}");
state.learned=state.learned||{};
state.favs=state.favs||[];
state.due=state.due||{};
state.dark=!!state.dark;
state.sound=state.sound!==false;
state.xp=Number(state.xp||0);
state.quizTotal=Number(state.quizTotal||0);
state.quizCorrect=Number(state.quizCorrect||0);
state.listenTotal=Number(state.listenTotal||0);
state.listenCorrect=Number(state.listenCorrect||0);
state.streak=Number(state.streak||0);
state.lastStudy=state.lastStudy||"";
state.notify=!!state.notify;

let current=0,filter="Tất cả",quiz=[],qi=0,qscore=0,reviewQueue=[],ri=0;
let listenIndex=0,listenAnswered=false,readingIndex=0,readingAnswered=false,flashIndex=0;

const $=id=>document.getElementById(id);
const save=()=>localStorage.setItem("namromah22",JSON.stringify(state));
const todayKey=()=>new Date().toISOString().slice(0,10);
const yesterdayKey=()=>{const d=new Date();d.setDate(d.getDate()-1);return d.toISOString().slice(0,10)};

function studyPing(){
  const t=todayKey();
  if(state.lastStudy!==t){
    if(state.lastStudy===yesterdayKey()) state.streak=(state.streak||0)+1;
    else state.streak=1;
    state.lastStudy=t; save();
  }
}

function addXP(n){
  state.xp=(state.xp||0)+n;
  studyPing();
  save();
  renderHome();
}

function speak(word){
  if(!state.sound||!("speechSynthesis" in window))return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(word);
  u.lang="en-US";u.rate=.82;speechSynthesis.speak(u);
}

function showPage(name){
  document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));
  $(name).classList.add("active");
  document.querySelectorAll("[data-page]").forEach(x=>x.classList.toggle("active",x.dataset.page===name));
  if(name==="home")renderHome();
  if(name==="vocab")renderVocab();
  if(name==="review")startReview();
  if(name==="quiz")startQuiz();
  if(name==="practice")startPractice();
}

function dueCount(){
  return WORDS.filter((w,i)=>(state.due[i]||0)<=Date.now()&&state.learned[i]).length;
}

function levelInfo(){
  const xp=state.xp||0;
  const level=Math.floor(xp/100)+1;
  const inLevel=xp%100;
  const names=["Người mới","Người học","Người luyện tập","Người tiến bộ","Người thành thạo","Bậc thầy"];
  return {level,inLevel,name:names[Math.min(level-1,names.length-1)]};
}

function renderHome(){
  const w=WORDS[current];
  $("homeWord").textContent=w[0];$("homeIpa").textContent=w[1];$("homeMeaning").textContent=w[2];$("homeExample").textContent=w[3];
  $("favBtn").textContent=state.favs.includes(current)?"★ Đã lưu":"☆ Lưu";
  $("learnedStat").textContent=Object.keys(state.learned).length;
  $("dueStat").textContent=dueCount();
  $("streakStat").textContent=state.streak||1;
  $("quickWordCount").textContent=`${WORDS.length} từ`;

  const lv=levelInfo();
  $("levelName").textContent=`Level ${lv.level} · ${lv.name}`;
  $("xpText").textContent=`${state.xp||0} XP`;
  $("xpBar").style.width=`${lv.inLevel}%`;
  $("xpHint").textContent=lv.inLevel===0?"Bạn vừa lên cấp!":`Còn ${100-lv.inLevel} XP để lên Level ${lv.level+1}.`;

  if(dueCount()){
    $("reminderBox").hidden=false;
    $("reminderBox").textContent=`🔔 Bạn có ${dueCount()} từ đến hạn ôn. Vào Ôn tập để luyện ngay.`;
  }else{
    $("reminderBox").hidden=true;
  }
}

function markLearned(i,xp=5){
  state.learned[i]=(state.learned[i]||0)+1;
  if(!state.due[i])state.due[i]=Date.now()+86400000;
  addXP(xp);
}

$("nextBtn").onclick=()=>{markLearned(current,5);current=(current+1)%WORDS.length;renderHome()};
$("speakBtn").onclick=()=>speak(WORDS[current][0]);
$("favBtn").onclick=()=>{if(state.favs.includes(current))state.favs=state.favs.filter(x=>x!==current);else state.favs.push(current);save();renderHome()};
$("themeBtn").onclick=()=>{state.dark=!state.dark;document.body.classList.toggle("dark",state.dark);$("themeBtn").textContent=state.dark?"☀️":"🌙";save()};

function renderVocab(){
  const q=($("search").value||"").toLowerCase();
  const list=WORDS.map((w,i)=>({...w,i})).filter(w=>(filter==="Tất cả"||w[4]===filter)&&(w[0].toLowerCase().includes(q)||w[2].toLowerCase().includes(q)));
  $("vocabCount").textContent=`${list.length} từ`;
  $("vocabList").innerHTML=list.map(w=>`<div class="wordRow"><div><b>${w[0]}</b><small>${w[2]} · ${w[4]}</small></div><div class="rowBtns"><button class="round" onclick="speak('${w[0]}')">🔊</button><button class="round soft" onclick="toggleFav(${w.i})">${state.favs.includes(w.i)?"★":"☆"}</button></div></div>`).join("");
}
function toggleFav(i){if(state.favs.includes(i))state.favs=state.favs.filter(x=>x!==i);else state.favs.push(i);save();renderVocab()}
$("search").oninput=renderVocab;
["Tất cả","Daily","People","Nature","Work","Study"].forEach(x=>{
  const b=document.createElement("button");b.textContent=x;b.onclick=()=>{filter=x;document.querySelectorAll("#filters button").forEach(z=>z.classList.remove("active"));b.classList.add("active");renderVocab()};
  if(x==="Tất cả")b.classList.add("active");$("filters").appendChild(b)
});

function startQuiz(){
  quiz=[...Array(WORDS.length).keys()].sort(()=>Math.random()-.5).slice(0,10);
  qi=0;qscore=0;$("quizNext").hidden=true;renderQuestion();
}
function renderQuestion(){
  if(qi>=quiz.length){
    $("quizWord").textContent=`🎉 ${qscore}/${quiz.length}`;
    $("quizChoices").innerHTML="<p>Hoàn thành! Điểm đã được lưu.</p>";
    $("quizFeedback").textContent="";
    $("quizNext").textContent="Làm lại";$("quizNext").hidden=false;
    return;
  }
  const idx=quiz[qi],w=WORDS[idx];
  $("quizProgress").textContent=`${qi+1}/10`;$("quizWord").textContent=w[0];$("quizFeedback").textContent="";$("quizNext").hidden=true;
  let opts=[w[2]];
  while(opts.length<4){let m=WORDS[Math.floor(Math.random()*WORDS.length)][2];if(!opts.includes(m))opts.push(m)}
  opts.sort(()=>Math.random()-.5);
  $("quizChoices").innerHTML=opts.map(m=>`<button>${m}</button>`).join("");
  [...$("quizChoices").children].forEach(b=>b.onclick=()=>answerQuiz(b,w[2],idx));
}
function answerQuiz(btn,ans,idx){
  [...$("quizChoices").children].forEach(b=>b.disabled=true);
  state.quizTotal++;
  if(btn.textContent===ans){btn.classList.add("correct");qscore++;state.quizCorrect++;$("quizFeedback").textContent="🎉 Chính xác!";markLearned(idx,5);addXP(10)}
  else{btn.classList.add("wrong");$("quizFeedback").textContent=`❌ Đáp án: ${ans}`;[...$("quizChoices").children].find(b=>b.textContent===ans)?.classList.add("correct");markLearned(idx,5)}
  save();studyPing();renderHome();$("quizNext").hidden=false;
}
$("quizNext").onclick=()=>{if(qi>=quiz.length){startQuiz()}else{qi++;renderQuestion()}};

function startReview(){
  reviewQueue=WORDS.map((w,i)=>i).filter(i=>state.learned[i]&&(state.due[i]||0)<=Date.now());ri=0;
  $("reviewCount").textContent=`${reviewQueue.length} từ`;
  if(!reviewQueue.length){$("reviewEmpty").hidden=false;$("reviewCard").hidden=true;return}
  $("reviewEmpty").hidden=true;$("reviewCard").hidden=false;renderReview();
}
function renderReview(){
  const w=WORDS[reviewQueue[ri]];
  $("reviewWord").textContent=w[0];$("reviewIpa").textContent=w[1];$("reviewMeaning").textContent=w[2];$("reviewExample").textContent=w[3];
  $("reviewAnswer").hidden=true;$("showAnswer").hidden=false;
}
$("showAnswer").onclick=()=>{$("reviewAnswer").hidden=false;$("showAnswer").hidden=true};
document.querySelectorAll("[data-rating]").forEach(b=>b.onclick=()=>rateReview(+b.dataset.rating));
function rateReview(r){
  const idx=reviewQueue[ri],days=[0,1,3,7][r];
  state.due[idx]=Date.now()+days*86400000;
  if(r>0){state.learned[idx]=(state.learned[idx]||0)+1;addXP(8+r*2)}else{addXP(2)}
  save();ri++;if(ri>=reviewQueue.length)startReview();else renderReview();
}

/* 3 chế độ luyện tập */
function startPractice(){
  listenIndex=Math.floor(Math.random()*WORDS.length);listenAnswered=false;
  readingIndex=readingIndex%READING.length;readingAnswered=false;
  flashIndex=Math.floor(Math.random()*WORDS.length);renderListen();renderReading();renderFlash();
}
function setPracticeMode(mode){
  ["listen","read","flash"].forEach(x=>{$(`${x}Mode`).hidden=x!==mode});
  document.querySelectorAll(".modeTab").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));
  if(mode==="listen")renderListen();if(mode==="read")renderReading();if(mode==="flash")renderFlash();
}
document.querySelectorAll(".modeTab").forEach(b=>b.onclick=()=>setPracticeMode(b.dataset.mode));

function renderListen(){
  const w=WORDS[listenIndex];listenAnswered=false;
  $("listenFeedback").textContent="";$("listenNext").hidden=true;
  let opts=[w[2]];
  while(opts.length<4){let m=WORDS[Math.floor(Math.random()*WORDS.length)][2];if(!opts.includes(m))opts.push(m)}
  opts.sort(()=>Math.random()-.5);
  $("listenChoices").innerHTML=opts.map(m=>`<button>${m}</button>`).join("");
  [...$("listenChoices").children].forEach(b=>b.onclick=()=>answerListen(b,w[2]));
}
$("listenPlay").onclick=()=>speak(WORDS[listenIndex][0]);
function answerListen(btn,ans){
  if(listenAnswered)return;listenAnswered=true;
  [...$("listenChoices").children].forEach(b=>b.disabled=true);
  state.listenTotal++;
  if(btn.textContent===ans){btn.classList.add("correct");state.listenCorrect++;$("listenFeedback").textContent="🎉 Chính xác!";addXP(10)}
  else{btn.classList.add("wrong");$("listenFeedback").textContent=`❌ Đáp án: ${ans}`;[...$("listenChoices").children].find(b=>b.textContent===ans)?.classList.add("correct");addXP(3)}
  save();$("listenNext").hidden=false;
}
$("listenNext").onclick=()=>{listenIndex=Math.floor(Math.random()*WORDS.length);renderListen()};

function renderReading(){
  const r=READING[readingIndex];readingAnswered=false;
  $("readingTitle").textContent=r.title;$("readingText").textContent=r.text;$("readingFeedback").textContent="";$("readingNext").hidden=true;
  $("readingChoices").innerHTML=r.opts.map(x=>`<button>${x}</button>`).join("");
  [...$("readingChoices").children].forEach(b=>b.onclick=()=>answerReading(b,r.a));
}
function answerReading(btn,ans){
  if(readingAnswered)return;readingAnswered=true;
  [...$("readingChoices").children].forEach(b=>b.disabled=true);
  if(btn.textContent===ans){btn.classList.add("correct");$("readingFeedback").textContent="🎉 Chính xác!";addXP(12)}
  else{btn.classList.add("wrong");$("readingFeedback").textContent=`❌ Đáp án: ${ans}`;[...$("readingChoices").children].find(b=>b.textContent===ans)?.classList.add("correct");addXP(3)}
  save();$("readingNext").hidden=false;
}
$("readingNext").onclick=()=>{readingIndex=(readingIndex+1)%READING.length;renderReading()};

function renderFlash(){
  const w=WORDS[flashIndex];
  $("flashWord").textContent=w[0];$("flashMeaning").textContent=w[2];$("flashExample").textContent=w[3];
  $("flashFront").hidden=false;$("flashBack").hidden=true;
}
$("flashcard").onclick=()=>{$("flashFront").hidden=!$("flashFront").hidden;$("flashBack").hidden=!$("flashBack").hidden;};
$("flashSpeak").onclick=()=>speak(WORDS[flashIndex][0]);
$("flashNext").onclick=()=>{markLearned(flashIndex,5);flashIndex=(flashIndex+1)%WORDS.length;renderFlash()};

$("soundToggle").onclick=()=>{state.sound=!state.sound;$("soundToggle").textContent=state.sound?"Bật":"Tắt";save()};

function renderStats(){
  const total=state.quizTotal||0,correct=state.quizCorrect||0;
  const ltotal=state.listenTotal||0,lcorrect=state.listenCorrect||0;
  const acc=total?Math.round(correct/total*100):0, lacc=ltotal?Math.round(lcorrect/ltotal*100):0;
  $("detailStats").innerHTML=`
  <div><span>XP</span><b>${state.xp||0}</b></div>
  <div><span>Level</span><b>${levelInfo().level}</b></div>
  <div><span>Từ đã học</span><b>${Object.keys(state.learned).length}/${WORDS.length}</b></div>
  <div><span>Quiz</span><b>${correct}/${total} · ${acc}%</b></div>
  <div><span>Listening</span><b>${lcorrect}/${ltotal} · ${lacc}%</b></div>
  <div><span>Streak</span><b>${state.streak||1} ngày</b></div>`;
}
$("statsBtn").onclick=()=>{$("detailStats").hidden=!$("detailStats").hidden;if(!$("detailStats").hidden)renderStats()};

$("notifyBtn").onclick=async()=>{
  if(!("Notification" in window)){alert("Trình duyệt này chưa hỗ trợ thông báo.");return}
  try{
    const p=await Notification.requestPermission();
    state.notify=p==="granted";save();
    $("notifyBtn").textContent=state.notify?"Đã bật":"Bật nhắc";
    if(state.notify&&dueCount())new Notification("Namromah", {body:`Bạn có ${dueCount()} từ cần ôn hôm nay.`});
  }catch(e){}
};

$("resetBtn").onclick=()=>{
  if(confirm("Xóa toàn bộ tiến độ học trên thiết bị này?")){
    localStorage.removeItem("namromah22");location.reload();
  }
};

document.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>showPage(b.dataset.page));
document.body.classList.toggle("dark",state.dark);
$("themeBtn").textContent=state.dark?"☀️":"🌙";
$("soundToggle").textContent=state.sound?"Bật":"Tắt";
$("notifyBtn").textContent=state.notify?"Đã bật":"Bật nhắc";
studyPing();renderHome();

if(state.notify&&dueCount()&&"Notification" in window&&Notification.permission==="granted"){
  setTimeout(()=>{try{new Notification("Namromah", {body:`Bạn có ${dueCount()} từ cần ôn hôm nay.`})}catch(e){}},1200);
}
