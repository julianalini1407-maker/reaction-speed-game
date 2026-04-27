let startTime, endTime;
let waiting = false;
function startGame() {
   document.getElementById("message").innerText = "Wait for green...";
   document.getElementById("result").innerText = "";
   let delay = Math.random() * 3000 + 2000; // 2–5 detik
   waiting = true;
   setTimeout(() => {
       document.getElementById("box").style.backgroundColor = "green";
       startTime = new Date().getTime();
       waiting = false;
   }, delay);
}
document.getElementById("box").onclick = function () {
   if (waiting) {
       document.getElementById("result").innerText = "Too soon! Try again.";
       return;
   }
   if (!startTime) return;
   endTime = new Date().getTime();
   let reactionTime = (endTime - startTime) / 1000;
   document.getElementById("result").innerText =
       "Your reaction time: " + reactionTime + " seconds";
   document.getElementById("box").style.backgroundColor = "red";
   startTime = null;
};
