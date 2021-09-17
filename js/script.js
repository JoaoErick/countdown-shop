/* 
  Author: João Erick Barbosa
  E-mail: jsilva@ecomp.uefs.br
*/
import Countdown from "./countdown.js";

const timeToEvent = new Countdown("17 february 2022 12:00:00 GMT-0300");
const times = document.querySelectorAll("[data-time]");

function showTime() {
  times.forEach((time, index) => {
    time.innerHTML = timeToEvent.total[index];
  });
}
showTime();
setInterval(showTime, 1000);
