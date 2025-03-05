let hrs = document.getElementById('heures');
let minutes = document.getElementById('minutes');
let sec = document.getElementById('secondes');


setInterval(() =>
{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000)
