const WORDS=[
["achieve","/əˈtʃiːv/","đạt được","She worked hard to achieve her goal.","Daily"],
["improve","/ɪmˈpruːv/","cải thiện","I want to improve my English.","Daily"],
["reliable","/rɪˈlaɪəbəl/","đáng tin cậy","He is a reliable friend.","People"],
["opportunity","/ˌɑːpərˈtuːnəti/","cơ hội","This is a great opportunity.","Daily"],
["confident","/ˈkɑːnfɪdənt/","tự tin","She feels confident about the test.","People"],
["environment","/ɪnˈvaɪrənmənt/","môi trường","We should protect the environment.","Nature"],
["experience","/ɪkˈspɪriəns/","kinh nghiệm","Work experience is useful.","Work"],
["knowledge","/ˈnɑːlɪdʒ/","kiến thức","Reading gives us knowledge.","Study"],
["successful","/səkˈsesfəl/","thành công","The project was successful.","Work"],
["challenge","/ˈtʃælɪndʒ/","thử thách","Learning a language is a challenge.","Study"],
["benefit","/ˈbenɪfɪt/","lợi ích","Exercise has many benefits.","Daily"],
["decision","/dɪˈsɪʒən/","quyết định","It was a difficult decision.","Daily"],
["develop","/dɪˈveləp/","phát triển","Children develop quickly.","Study"],
["focus","/ˈfoʊkəs/","tập trung","Please focus on the lesson.","Study"],
["habit","/ˈhæbɪt/","thói quen","Reading is a good habit.","Daily"],
["journey","/ˈdʒɜːrni/","hành trình","Learning is a long journey.","Daily"],
["language","/ˈlæŋɡwɪdʒ/","ngôn ngữ","English is an international language.","Study"],
["mistake","/mɪˈsteɪk/","lỗi","Everyone makes mistakes.","Daily"],
["practice","/ˈpræktɪs/","luyện tập","Practice makes progress.","Study"],
["progress","/ˈprɑːɡres/","tiến bộ","I can see your progress.","Study"],
["require","/rɪˈkwaɪər/","đòi hỏi","This job requires experience.","Work"],
["solution","/səˈluːʃən/","giải pháp","We need a simple solution.","Work"],
["support","/səˈpɔːrt/","hỗ trợ","Thank you for your support.","People"],
["understand","/ˌʌndərˈstænd/","hiểu","I understand the question.","Study"],
["valuable","/ˈvæljuəbəl/","có giá trị","Your time is valuable.","Daily"],
["adapt","/əˈdæpt/","thích nghi","We must adapt to change.","Work"],
["communicate","/kəˈmjuːnɪkeɪt/","giao tiếp","We communicate every day.","People"],
["creative","/kriˈeɪtɪv/","sáng tạo","She has a creative idea.","People"],
["curious","/ˈkjʊriəs/","tò mò","Curious students ask questions.","People"],
["effective","/ɪˈfektɪv/","hiệu quả","This method is effective.","Study"],
["essential","/ɪˈsenʃəl/","thiết yếu","Sleep is essential for health.","Daily"],
["flexible","/ˈfleksəbəl/","linh hoạt","My schedule is flexible.","Work"],
["generous","/ˈdʒenərəs/","hào phóng","He is generous with his time.","People"],
["independent","/ˌɪndɪˈpendənt/","độc lập","She is an independent learner.","People"],
["prepare","/prɪˈper/","chuẩn bị","I need to prepare for class.","Study"],
["reduce","/rɪˈduːs/","giảm","We should reduce waste.","Nature"],
["respect","/rɪˈspekt/","tôn trọng","We should respect others.","People"],
["resource","/ˈriːsɔːrs/","tài nguyên","Water is an important resource.","Nature"],
["responsible","/rɪˈspɑːnsəbəl/","có trách nhiệm","He is responsible for the team.","Work"],
["achievable","/əˈtʃiːvəbl/","có thể đạt được","The goal is achievable.","Daily"],
["advice","/ədˈvaɪs/","lời khuyên","Can you give me some advice?","People"],
["avoid","/əˈvɔɪd/","tránh","Try to avoid distractions.","Study"],
["compare","/kəmˈper/","so sánh","Do not compare yourself with others.","Daily"],
["concentrate","/ˈkɑːnsəntreɪt/","tập trung","I cannot concentrate with noise.","Study"],
["discover","/dɪˈskʌvər/","khám phá","We discovered a new place.","Daily"],
["encourage","/ɪnˈkɜːrɪdʒ/","khuyến khích","Teachers encourage students.","People"],
["familiar","/fəˈmɪliər/","quen thuộc","The place looks familiar.","Daily"],
["motivate","/ˈmoʊtɪveɪt/","tạo động lực","Music can motivate me.","People"],
["patient","/ˈpeɪʃənt/","kiên nhẫn","Be patient with yourself.","People"],
["purpose","/ˈpɜːrpəs/","mục đích","What is the purpose of this lesson?","Study"],
["routine","/ruːˈtiːn/","thói quen thường ngày","I have a morning routine.","Daily"],
["strategy","/ˈstrætədʒi/","chiến lược","We need a better strategy.","Work"],
["tradition","/trəˈdɪʃən/","truyền thống","This is a family tradition.","People"],
["unique","/juˈniːk/","độc đáo","Every person is unique.","People"],
["wisdom","/ˈwɪzdəm/","sự khôn ngoan","Experience brings wisdom.","People"],
["accurate","/ˈækjərət/","chính xác","Please give accurate information.","Study"],
["available","/əˈveɪləbəl/","có sẵn","The book is available online.","Daily"],
["common","/ˈkɑːmən/","phổ biến","This is a common mistake.","Study"],
["complex","/ˈkɑːmpleks/","phức tạp","The problem is complex.","Work"],
["efficient","/ɪˈfɪʃənt/","hiệu quả","This is an efficient way to study.","Study"]
];

const KEY="namromah21";
let state=JSON.parse(localStorage.getItem(KEY)||"null")||{
 current:0, learned:[], favorites:[], review:{}, streak:1, lastDay:"",
 dark:false, rate:.85
};
let category="All", reviewQueue=[], quizScore=0, quizAnswered=false;

const $=id=>document.getElementById(id);
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const wordAt=i=>{const w=WORDS[i%WORDS.length];return{i:i%WORDS.length,word:w[0],ipa:w[1],meaning:w[2],example:w[3],cat:w[4]}};
const today=()=>new Date().toISOString().slice(0,10);

function touchDay(){
 const d=today();
 if(state.lastDay!==d){
   if(state.lastDay){
     const diff=Math.round((new Date(d)-new Date(state.lastDay))/86400000);
     state.streak=diff===1?state.streak+1:1;
   }
   state.lastDay=d;save();
 }
}
function speak(t){
 if(!("speechSynthesis"in window))return;
 speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=Number(state.rate||.85);speechSynthesis.speak(u);
}
function dueCount(){return Object.values(state.review).filter(x=>x.next<=Date.now()).length}
function masteredCount(){return Object.values(state.review).filter(x=>x.level>=4).length}
function renderHome(){
 const w=wordAt(state.current);
 $("homeWord").textContent=w.word;$("homeIpa").textContent=w.ipa;$("homeMeaning").textContent=w.meaning;$("homeExample").textContent=w.example;
 $("learnedStat").textContent=state.learned.length;$("masteredStat").textContent=masteredCount();$("reviewStat").textContent=dueCount();
 $("progressText").textContent=Math.round(state.learned.length/WORDS.length*100)+"%";
 $("progressBar").style.width=Math.round(state.learned.length/WORDS.length*100)+"%";
 $("reviewShortcut").textContent=dueCount()+" từ đến hạn";
 $("saveBtn").textContent=state.favorites.includes(w.word)?"★ Đã lưu":"☆ Lưu";
}
function learnCurrent(){
 const w=wordAt(state.current);
 if(!state.learned.includes(w.word))state.learned.push(w.word);
 if(!state.review[w.word])state.review[w.word]={level:0,next:Date.now()};
 save();renderHome();renderStats();renderReview();
}
function nextWord(){learnCurrent();state.current=(state.current+1)%WORDS.length;save();renderHome();window.scrollTo({top:0,behavior:"smooth"})}
function toggleFavorite(){
 const w=wordAt(state.current).word,p=state.favorites.indexOf(w);
 if(p>=0)state.favorites.splice(p,1);else state.favorites.push(w);
 save();renderHome();renderVocab();
}
function renderCategories(){
 const cats=["All",...new Set(WORDS.map(w=>w[4]))];
 $("categoryChips").innerHTML=cats.map(c=>`<button class="chip ${c===category?"active":""}" data-cat="${c}">${c==="All"?"Tất cả":c}</button>`).join("");
}
function renderVocab(){
 const q=($("searchInput").value||"").toLowerCase();
 const arr=WORDS.map((_,i)=>wordAt(i)).filter(w=>(category==="All"||w.cat===category)&&(w.word.includes(q)||w.meaning.includes(q)));
 $("vocabCount").textContent=`${arr.length} từ`;
 $("vocabList").innerHTML=arr.map(w=>`<div class="vocab-row card"><div class="vocab-main"><b>${w.word}</b><small>${w.meaning} · ${w.cat}</small></div><div class="vocab-actions"><button data-speak="${w.word}">🔊</button><button data-save="${w.word}">${state.favorites.includes(w.word)?"★":"☆"}</button></div></div>`).join("")||`<div class="empty card">Không tìm thấy từ.</div>`;
}
function renderStats(){
 const levels=[0,1,2,3,4].map(n=>Object.values(state.review).filter(x=>x.level===n).length);
 $("statLearned").textContent=state.learned.length;$("statMastered").textContent=masteredCount();$("statFav").textContent=state.favorites.length;
 levels.forEach((n,i)=>{$(`level${i}n`).textContent=n;$(`level${i}`).style.width=(state.learned.length?Math.round(n/state.learned.length*100):0)+"%"});
}
function renderReview(){
 reviewQueue=Object.entries(state.review).filter(([_,v])=>v.next<=Date.now()).map(([w])=>WORDS.findIndex(x=>x[0]===w)).filter(i=>i>=0);
 $("reviewTitle").textContent=`${reviewQueue.length} từ`;
 $("reviewEmpty").hidden=reviewQueue.length>0;$("reviewCard").hidden=reviewQueue.length===0;
 if(reviewQueue.length)showReview();
}
function showReview(){
 const w=wordAt(reviewQueue[0]);
 $("reviewWord").textContent=w.word;$("reviewIpa").textContent=w.ipa;$("reviewMeaning").textContent=w.meaning;$("reviewExample").textContent=w.example;
 $("reviewMeaning").classList.add("hidden");$("reviewExample").classList.add("hidden");$("reviewActions").classList.add("hidden");$("reviewReveal").classList.remove("hidden");
}
function gradeReview(g){
 const i=reviewQueue.shift(),w=wordAt(i),old=state.review[w.word]||{level:0,next:Date.now()};
 const levels=[1,3,7,14,30];
 let level=old.level;
 let days;
 if(g===0){level=0;days=0}
 else{level=Math.min(4,old.level+1);days=levels[level]}
 state.review[w.word]={level,next:Date.now()+days*86400000};
 save();renderReview();renderHome();renderStats();
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function newQuiz(){
 const a=WORDS[Math.floor(Math.random()*WORDS.length)],choices=shuffle([a,...shuffle(WORDS.filter(x=>x!==a)).slice(0,3)]);
 quizAnswered=false;$("quizQuestion").textContent=`“${a[0]}” có nghĩa là gì?`;$("quizOptions").innerHTML=choices.map((w,i)=>`<button class="option" data-correct="${w[0]===a[0]}">${String.fromCharCode(65+i)}. ${w[2]}</button>`).join("");
 $("nextQuizBtn").hidden=true;
}
function showPage(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id===id));
 document.querySelectorAll(".nav").forEach(n=>n.classList.toggle("active",n.dataset.page===id));
 if(id==="home")renderHome();if(id==="vocab"){renderCategories();renderVocab()}if(id==="review")renderReview();if(id==="stats")renderStats();if(id==="quiz"){quizScore=0;$("quizScore").textContent="0 điểm";newQuiz()}
 window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
 const page=e.target.closest("[data-page]");if(page)showPage(page.dataset.page);
 const cat=e.target.closest("[data-cat]");if(cat){category=cat.dataset.cat;renderCategories();renderVocab()}
 const sp=e.target.closest("[data-speak]");if(sp)speak(sp.dataset.speak);
 const sv=e.target.closest("[data-save]");if(sv){const w=sv.dataset.save,p=state.favorites.indexOf(w);if(p>=0)state.favorites.splice(p,1);else state.favorites.push(w);save();renderVocab();renderHome()}
 const opt=e.target.closest("#quizOptions .option");
 if(opt&&!quizAnswered){quizAnswered=true;document.querySelectorAll("#quizOptions .option").forEach(x=>x.disabled=true);const ok=opt.dataset.correct==="true";opt.classList.add(ok?"correct":"wrong");if(!ok)document.querySelector("#quizOptions .option[data-correct=true]").classList.add("correct");if(ok)quizScore+=10;$("quizScore").textContent=quizScore+" điểm";$("nextQuizBtn").hidden=false}
 const grade=e.target.closest(".review-actions [data-grade]");if(grade)gradeReview(Number(grade.dataset.grade));
});
$("nextBtn").onclick=nextWord;$("speakBtn").onclick=()=>speak(wordAt().word);$("saveBtn").onclick=toggleFavorite;
$("reviewSpeak").onclick=()=>speak(wordAt(reviewQueue[0]).word);
$("reviewReveal").onclick=()=>{$("reviewMeaning").classList.remove("hidden");$("reviewExample").classList.remove("hidden");$("reviewActions").classList.remove("hidden");$("reviewReveal").classList.add("hidden")};
$("nextQuizBtn").onclick=newQuiz;$("searchInput").oninput=renderVocab;
$("themeBtn").onclick=()=>{state.dark=!state.dark;document.body.classList.toggle("dark",state.dark);$("darkToggle").checked=state.dark;save()};
$("darkToggle").onchange=e=>{state.dark=e.target.checked;document.body.classList.toggle("dark",state.dark);save()};
$("rateSelect").onchange=e=>{state.rate=e.target.value;save()};
$("resetBtn").onclick=()=>{if(confirm("Xóa toàn bộ dữ liệu học tập trên thiết bị này?")){localStorage.removeItem(KEY);location.reload()}};
touchDay();document.body.classList.toggle("dark",state.dark);$("darkToggle").checked=state.dark;$("rateSelect").value=String(state.rate);
renderHome();renderCategories();renderVocab();renderStats();renderReview();
if("serviceWorker"in navigator)navigator.serviceWorker.register("./sw.js").catch(()=>{});
