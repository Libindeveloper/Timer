const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const start = document.getElementById("start_btn");
const stop = document.getElementById("stop_btn");
const display = document.getElementById("Displasy");

const startaudio = document.getElementById("start_audio");
const stopaudio = document.getElementById("stop_audio");
var countdown;
const result = document.getElementById("result");

start.addEventListener("click", startcountdown);
stop.addEventListener("click", stopcountdown);

function startcountdown() {
  clearInterval(countdown);
  let min = minutes.value || 0;
  let sec = seconds.value || 0;

  var totaltime = min * 60 + Number(sec);

  countdown = setInterval(() => {
    let m = Math.floor(totaltime / 60);
    let s = totaltime % 60;

    display.textContent = `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
    totaltime--;

    if (totaltime < 0) {
      clearInterval(countdown);
      result.textContent = "Time UP";
    }
  }, 1000);
}

function stopcountdown() {
  clearInterval(countdown);
  minutes.value = "";
  seconds.value = "";
  display.textContent = "00:00";
  result.innerHTML = "";
}

function onaudio() {
  startaudio.volume = 0.2;
  startaudio.play();
}
function offaudio() {
  startaudio.volume = 0.3;
  stopaudio.play();
}
