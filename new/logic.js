let A = document.getElementById("option-1");
let B = document.getElementById("option-2");
let C = document.getElementById("option-3");
let D = document.getElementById("option-4");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let message = document.getElementById("Message");
let problem = document.getElementsByClassName("main-problem")[0];

let levels = [
  "level_1",
  "level_2",
  "level_3",
  "level_4",
  "level_5",
  "level_6",
  "level_7",
  "level_8",
  "level_9",
  "level_10",
  "level_11",
  "level_12",
  "level_13",
  "level_14",
];
const q = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14];
let i = 0;
let number = Math.floor(Math.random() * 10);

console.log("number-top", number);

function levelUp() {
  problem.innerHTML = "Q) " + q[i][number].question;
  A.innerText = "A) " + q[i][number].options.A;
  B.innerText = "B) " + q[i][number].options.B;
  C.innerText = "C) " + q[i][number].options.C;
  D.innerText = "D) " + q[i][number].options.D;
}

function changecolor() {
  document.getElementById(levels[i]).style.background = "gold";
  document.getElementById(levels[i]).style.color = "black";
}

function handleAnswerClick(optionElement) {
  console.log("i :", i);
  console.log("number :", number);
  console.log("q[i][number].correctAnswer :", q[i][number].correctAnswer);
  console.log("optionElement :", optionElement);
  if (optionElement.innerHTML.endsWith(q[i][number].correctAnswer)) {
    optionElement.style.color = "green";
    let correct1 = new Audio("public/correct.mp3");
    correct1.play();
    setTimeout(() => {
      optionElement.style.color = "white";
      win();
    }, 7000);
  } else {
    optionElement.style.color = "red";
    loosemsg();
  }
}

A.addEventListener("click", () => handleAnswerClick(A));
B.addEventListener("click", () => handleAnswerClick(B));
C.addEventListener("click", () => handleAnswerClick(C));
D.addEventListener("click", () => handleAnswerClick(D));

function loosemsg() {
  let loose = new Audio("public/wrong.mp3");
  loose.play();
  message.style.color = "white";
  message.style.fontSize = "40px";
  message.style.fontWeight = "900";
  message.innerHTML = "You Lose the game!";
  setTimeout(() => {
    location.reload();
  }, 5000);
}

function win() {
  i++;
  changecolor();
  levelUp();
}

function disableLifeline(imgElement) {
  imgElement.style.pointerEvents = "none";
  imgElement.style.opacity = "0.2";
}

function audiance() {
  message.innerText = q[i][number].correctAnswer + " (votes-70%)";
  setTimeout(() => {
    message.innerText = "";
  }, 4000);
  img1.style.border = "6px solid red";
  disableLifeline(img1);
}

function fifity_fifity() {
  let ans = q[i][number].correctAnswer;
  let options = [A, B, C, D];
  let removedCount = 0;
  console.log(removedCount)

  options.forEach((option) => {
    if (option.innerHTML !== ans && removedCount < 2) {
      setTimeout(() => {
        if (removedCount < 2) {
          option.innerText = " ";
          removedCount++;
        }
      }, 2000);
    }
  });
  img2.style.border = "6px solid red";
  disableLifeline(img2);
}

function flip() {
  let number1 = Math.floor(Math.random() * 10);
  while (number1 === number) {
    number1 = Math.floor(Math.random() * 10);
  }

  number = number1;

  problem.innerHTML = "Q) " + q[i][number].question;
  A.innerHTML = "A) " + q[i][number].options.A;
  B.innerHTML = "B) " + q[i][number].options.B;
  C.innerHTML = "C) " + q[i][number].options.C;
  D.innerHTML = "D) " + q[i][number].options.D;

  img3.style.border = "6px solid red";
  disableLifeline(img3);
}

levelUp();
changecolor();
