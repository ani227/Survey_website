const deadline = new Date('Dec 10, 2020 23:59:59').getTime();

const x = setInterval(function () {
  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24)).toString();
  let hours = Math.floor(
    (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString();
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)).toString();
  let seconds = Math.floor((t % (1000 * 60)) / 1000).toString();

  let formattedDays = days.length === 1 ? '0' + days : days;
  let formattedHours = hours.length === 1 ? '0' + hours : hours;
  let formattedMinutes = minutes.length === 1 ? '0' + minutes : minutes;
  let formattedSeconds = seconds.length === 1 ? '0' + seconds : seconds;

  document.getElementById('d1').innerHTML = formattedDays[0];
  document.getElementById('d2').innerHTML = formattedDays[1];
  document.getElementById('h1').innerHTML = formattedHours[0];
  document.getElementById('h2').innerHTML = formattedHours[1];
  document.getElementById('m1').innerHTML = formattedMinutes[0];
  document.getElementById('m2').innerHTML = formattedMinutes[1];
  document.getElementById('s1').innerHTML = formattedSeconds[0];
  document.getElementById('s2').innerHTML = formattedSeconds[1];
  if (t < 0) {
    clearInterval(x);
    console.log('Cleared');
    document.getElementById('demo').innerHTML = 'TIME UP';
    document.getElementById('d1').innerHTML = '0';
    document.getElementById('d2').innerHTML = '0';
    document.getElementById('h2').innerHTML = '0';
    document.getElementById('m1').innerHTML = '0';
    document.getElementById('m2').innerHTML = '0';
    document.getElementById('s1').innerHTML = '0';
    document.getElementById('s2').innerHTML = '0';
    document.getElementById('h1').innerHTML = '0';
  }
}, 1000);
window.onload = () => {
  document.getElementById('parentDiv').style.display = 'flex';
  document.getElementById('responsecount').innerHTML = responseCount;
  x;
};
