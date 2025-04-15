let currentQuestion = 0;
let scores = {};

// スコア初期化
abilities.forEach(ability => {
  scores[ability.name] = 0;
});

const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");

const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");
const retryBtn = document.getElementById("retry-btn");

// 診断開始
startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  showQuestion();
});

// 質問表示
function showQuestion() {
  const q = questions[currentQuestion];
  questionNumber.textContent = `Q${currentQuestion + 1}`;
  questionText.textContent = q.text;
  choicesContainer.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.addEventListener("click", () => {
      // スコア加算
      choice.relatedAbilities.forEach(name => {
        scores[name]++;
      });

      // 次へ進む or 結果表示
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });
    choicesContainer.appendChild(btn);
  });
}

// 結果表示
function showResult() {
  questionScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  // 一番スコアが高い異能力を探す
  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  const ability = abilities.find(a => a.name === best[0]);

  resultName.textContent = `【${ability.name}】`;
  resultDescription.textContent = ability.description;
}

// 再診断
retryBtn.addEventListener("click", () => {
  currentQuestion = 0;
  scores = {};
  abilities.forEach(ability => {
    scores[ability.name] = 0;
  });

  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});
function showQuestion() {
    const q = questions[currentQuestion];
  
    // フェードアウト
    questionScreen.classList.add("fade-out");
  
    setTimeout(() => {
      // 質問・選択肢を書き換え
      questionNumber.textContent = `Q${currentQuestion + 1}`;
      questionText.textContent = q.text;
      choicesContainer.innerHTML = "";
  
      q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.addEventListener("click", () => {
          // スコア加算
          choice.relatedAbilities.forEach(name => {
            scores[name]++;
          });
  
          // 次へ or 結果
          currentQuestion++;
          if (currentQuestion < questions.length) {
            showQuestion();
          } else {
            showResult();
          }
        });
        choicesContainer.appendChild(btn);
      });
  
      // フェードイン
      questionScreen.classList.remove("fade-out");
      questionScreen.classList.add("fade-in");
  
      // フェードイン → 通常状態に戻す（次の切り替え用）
      setTimeout(() => {
        questionScreen.classList.remove("fade-in");
      }, 500);
    }, 300); // フェードアウト完了後に差し替え
  }
  function showResult() {
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
  
    // 一番スコアが高い異能力を探す
    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    const ability = abilities.find(a => a.name === best[0]);
  
    // エフェクトのクラスを付け直す
    resultName.classList.remove("glow"); // 先にリセット
    void resultName.offsetWidth; // 強制再レンダリング（これ重要）
    resultName.textContent = `【${ability.name}】`;
    resultName.classList.add("glow");
  
    resultDescription.textContent = ability.description;
  }
  function showResult() {
    // transitionスクリーン表示、他は非表示
    questionScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    const transitionScreen = document.getElementById("transition-screen");
    transitionScreen.classList.remove("hidden");
  
    // 3秒後に結果画面に切り替え
    setTimeout(() => {
      transitionScreen.classList.add("hidden");
      resultScreen.classList.remove("hidden");
  
      const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
      const ability = abilities.find(a => a.name === best[0]);
  
      resultName.classList.remove("glow");
      void resultName.offsetWidth;
      resultName.textContent = `【${ability.name}】`;
      resultName.classList.add("glow");
  
      resultDescription.textContent = ability.description;
    }, 3000);
  }
  