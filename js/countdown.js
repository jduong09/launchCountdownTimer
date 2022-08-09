/*
  Challenge: Create a countdown timer that will start at 14 days, with each second counting down and changing the 
  Bonus: When a card changes, make the card change from the middle.

  14 days 0 Hours 0 Minutes 0 Seconds
  13 days 23 Hours 59 Minutes 59 59 Seconds

  // Every second, we need to run update function on the flip cards
  // Update function
  

  // card-top, card-back --> card-bottom::after becomes the next number
  // card-bottom, card-back::before are current/previous number

*/
document.addEventListener('DOMContentLoaded', () => {

  // Get day-card, hour-card, minute-card, second-card
  const dayMarker = document.getElementById('day-card');
  const hourMarker = document.getElementById('hour-card');
  const minuteMarker = document.getElementById('minute-card');
  const secondMarker = document.getElementById('second-card');

  
  dayMarker.children[0].children[1].setAttribute('data-value', '14');
  dayMarker.children[0].children[2].setAttribute('data-value', '14');
  dayMarker.children[0].children[2].children[0].setAttribute('data-value', '14');
  
  hourMarker.children[0].children[1].setAttribute('data-value', '00');
  hourMarker.children[0].children[2].setAttribute('data-value', '00');
  hourMarker.children[0].children[2].children[0].setAttribute('data-value', '00');

  minuteMarker.children[0].children[1].setAttribute('data-value', '00');
  minuteMarker.children[0].children[2].setAttribute('data-value', '00');
  minuteMarker.children[0].children[2].children[0].setAttribute('data-value', '00');


  secondMarker.children[0].children[1].setAttribute('data-value', '00');
  secondMarker.children[0].children[2].setAttribute('data-value', '00');
  secondMarker.children[0].children[2].children[0].setAttribute('data-value', '00');

  const cards = [dayMarker, hourMarker, minuteMarker, secondMarker];

  // Create date object fourteen days from now
  const fourteenDaysFromNow = new Date(new Date().getTime() + 1209600000).getTime();
  
  window.setInterval(() => {
    const now = new Date().getTime();
  
    const markers = [dayMarker.children[0].children[0].innerHTML, hourMarker.children[0].children[0].innerHTML, minuteMarker.children[0].children[0].innerHTML, secondMarker.children[0].children[0].innerHTML]

    // Time left in milliseconds 
    const distanceFromDate = fourteenDaysFromNow - now;

    const currentTime = [Math.floor(distanceFromDate / (1000 * 60 * 60 * 24)), Math.floor((distanceFromDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), Math.floor((distanceFromDate % (1000 * 60 * 60)) / (1000 * 60)), Math.floor((distanceFromDate % (1000 * 60)) / 1000)];

    for (let i = 0; i < markers.length; i++) {
      const exactTime = markers[i];

      if (parseInt(exactTime) !== currentTime[i]) {
        const updatedTime = ( '0' + currentTime[i] ).slice(-2);
        if (parseInt(exactTime) >= 0) {
          cards[i].children[0].children[1].setAttribute('data-value', exactTime);
          cards[i].children[0].children[2].setAttribute('data-value', exactTime);
        }

        cards[i].children[0].children[0].innerHTML = updatedTime;
        cards[i].children[0].children[2].children[0].setAttribute('data-value', updatedTime);
 
        cards[i].classList.remove('flip');
        void cards[i].offsetWidth;
        cards[i].classList.add('flip');
      }
    }
  }, 1000);
});