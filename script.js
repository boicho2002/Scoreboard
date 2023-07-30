const p1Btn = document.querySelector("#p1Button");
const p2Btn = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const select = document.querySelector("#playto");
let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let isGameOver = false;

p1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score >= winScore && p1Score - p2Score >= 2) {
      isGameOver = true;
      applyWinningEffect(p1Display);
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});
p2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score >= winScore && p2Score - p1Score >= 2) {
      isGameOver = true;
      applyWinningEffect(p2Display);
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }

    p2Display.textContent = p2Score;
  }
});
resetBtn.addEventListener("click", Reset);

select.addEventListener("change", function () {
  winScore = Number(this.value);
  Reset();
});

function applyWinningEffect(displayElement) {
  displayElement.classList.add("animate__animated", "animate__bounce");
}
function removeWinningEffect(displayElement) {
  displayElement.classList.add("animate__animated", "animate__bounce");
}
function Reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  removeWinningEffect(p1Display);
  removeWinningEffect(p2Display);
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Btn.disabled = false;
  p2Btn.disabled = false;
}
