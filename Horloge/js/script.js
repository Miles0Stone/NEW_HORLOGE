const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

function demarrerLamontre(){
    
let day = new Date();

let hh = day.getHours() * 30;
let mn = day.getMinutes() * deg;
let sc = day.getSeconds() * deg;



hr.style.transform = `rotateZ(${(hh)+(mn/12)}deg)`;    
min.style.transform = `rotateZ(${mn}deg)`;  
sec.style.transform = `rotateZ(${sc}deg)`;

}

var interval = setInterval(demarrerLamontre, 1000);




