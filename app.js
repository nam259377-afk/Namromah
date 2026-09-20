const words = [
  ["achieve", "đạt được"],
  ["improve", "cải thiện"],
  ["reliable", "đáng tin cậy"],
  ["opportunity", "cơ hội"],
  ["confident", "tự tin"],
  ["environment", "môi trường"],
  ["experience", "kinh nghiệm"],
  ["knowledge", "kiến thức"],
  ["successful", "thành công"],
  ["challenge", "thử thách"]
];

let current = 0;
let learned = Number(localStorage.getItem("learned") || 0);
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

function showWord() {
  document.getElementById("word").textContent = words[current][0];
  document.getElementById("meaning").textContent = words[current][1];
}

function nextWord() {
  current = (current + 1) % words.length;
  learned++;

  localStorage.setItem("learned", learned);
  document.getElementById("learned").textContent = learned;

  showWord();
}

function speakWord() {
  const word = words[current][0];

  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    speech.rate = 0.8;

    speechSynthesis.speak(speech);
  }
}

function favoriteWord() {
  const word = words[current][0];

  if (!favorites.includes(word)) {
    favorites.push(word);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  document.getElementById("favorites").textContent = favorites.length;
}

function showQuiz() {
  const answer = prompt(
    "Từ 'achieve' có nghĩa là gì?\n\nA. Đạt được\nB. Thử thách\nC. Môi trường"
  );

  if (answer && answer.toLowerCase() === "a") {
    alert("🎉 Chính xác!");
  } else if (answer) {
    alert("❌ Chưa đúng. Đáp án là A.");
  }
}

document.getElementById("learned").textContent = learned;
document.getElementById("favorites").textContent = favorites.length;

showWord();
