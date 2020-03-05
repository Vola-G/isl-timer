const countToDate = new Date("April 24, 2020 19:30:00").getTime();
const divider = document.createElement("span");
divider.classList.add("divider");


const counter = setInterval(function() {
    let now = new Date().getTime();
    let distance = countToDate - now;

    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("timer").innerHTML = 
    `<span class="date">${day}<span class="divider">d </span></span>
    <span class="date">${hours}<span class="divider">h </span></span>
    <span class="date">${minutes}<span class="divider">m </span></span>
    <span class="date">${seconds}<span class="divider">s </span></span>`;

    if(distance < 0){
        clearInterval(counter);
        document.getElementById('timer').innerHTML = "We are on the way!";
        document.getElementsByTagName('h1')[0].innerHTML = "Hooray! <span>٩(｡•́‿•̀｡)۶</span>"
    }
}, 1000)