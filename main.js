if(window.confirm("Czy masz 18 lat?") === false) {
    alert("Nie możesz wejść na te stronę!");
    window.location ="https://mindfulness.com";
  }
  
  function realtimeClock() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds
    var t = setTimeout(realtimeClock, 1000);
  }

var getstarted = document.getElementById('getstarted');
var logowanie = document.getElementById('logowanie');
var rejestracja = document.getElementById('rejestracja');

getstarted.style.cursor = 'pointer';
logowanie.style.cursor = 'pointer';
rejestracja.style.cursor = 'pointer';

getstarted.onclick = function() {
  window.location ="https://mindfulness.com";
  };