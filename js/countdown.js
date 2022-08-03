/*
  Challenge: Create a countdown timer that will start at 14 days, with each second counting down and changing the 
  Bonus: When a card changes, make the card change from the middle.

  14 days 0 Hours 0 Minutes 0 Seconds
  13 days 23 Hours 59 Minutes 59 59 Seconds


*/

document.addEventListener('DOMContentLoaded', () => {
 
  const dayMarker = document.getElementById('day-card');
  const hourMarker = document.getElementById('hour-card');
  const minuteMarker = document.getElementById('minute-card');
  const secondMarker = document.getElementById('second-card');
  const fourteenDaysFromNow = new Date(new Date().getTime() + 1209600000).getTime();
  window.setInterval(() => {
    const now = new Date().getTime();
    const exactDay = dayMarker.children[0].innerHTML;
    const exactHour = hourMarker.children[0].innerHTML;
    const exactMinute = minuteMarker.children[0].innerHTML;
    const exactSecond = secondMarker.children[0].innerHTML;

    // Time left in milliseconds=
    const distanceFromDate = fourteenDaysFromNow - now;

    const daysAway = Math.floor(distanceFromDate / (1000 * 60 * 60 *24));
    dayMarker.children[0].innerHTML = daysAway;

    const hours = Math.floor((distanceFromDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hourMarker.children[0].innerHTML = hours;

    var minutes = Math.floor((distanceFromDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceFromDate % (1000 * 60)) / 1000);
    minuteMarker.children[0].innerHTML = minutes;
    secondMarker.children[0].innerHTML = seconds;
    // Add class in order to create animation.

    if (exactSecond != seconds) {
      secondMarker.classList.add('flip');
      setTimeout(() => {
        secondMarker.classList.remove('flip');
      }, 500);
    }
  }, 1000);
});
