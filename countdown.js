const bday = document.getElementById("birthday");

const birthday = new Date("04/05/2022");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function countDown() {
  const today = new Date();
  const timeLeft = birthday - today;
  console.log(timeLeft)
  
  if(timeLeft <= 0){
      bday.innerHTML = "Happy Birthday"
      clearInterval()
      return
  }

  const days = Math.floor(timeLeft/day)
  const hours = Math.floor((timeLeft % day)/hour) 
  const minutes = Math.floor((timeLeft % hour)/ minute)
  const seconds = Math.floor((timeLeft % minute)/second)

  bday.innerHTML = days + 'days' + hours + 'hours' + minutes + 'minutes' + seconds + 'seconds'
}

setInterval(countDown, second);

