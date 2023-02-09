var startTime = new Date().getTime();
if (Number(localStorage.getItem("time")) > 0) {
  startTime -= Number(localStorage.getItem("time"));
}
var nowTime, h, m, s, ms, output;
function displayTime() {
  nowTime = new Date().getTime() - startTime;
  h = Math.floor(nowTime / 3600000);
  m = Math.floor(nowTime % 3600000 / 60000);
  s = Math.floor(nowTime % 60000 / 1000);
  ms= Math.floor(nowTime % 1000 / 100);
  output = h + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  var max = 20;
  var prevMax = 0;
  var color = 1;
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 30;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 60;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 120;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 180;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 300;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 600;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 900;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 1200;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 1800;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 2700;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 3600;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 5400;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 7200;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 10800;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 14400;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 18000;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 21600;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 25200;}
  if (nowTime / 1000 > max) {color += 1; prevMax = max; max = 28800;}
  document.getElementsByClassName("time-container")[0].innerHTML = output + "<br><progress class=\"c" + color + "\" value=\"" + ((nowTime / 1000) - prevMax) + "\" max=\"" + (max - prevMax) + "\"></progress>";
  localStorage.setItem("time", nowTime);
}
var x = setInterval(function() {
  displayTime();
}, 0);
document.getElementsByClassName("restart-button")[0].onclick = function() {
  startTime = new Date().getTime();
  localStorage.setItem("time", 0);
  clearInterval(x);
  displayTime();
  x = setInterval(function() {
    displayTime();
  }, 0);
};
