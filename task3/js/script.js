const trafficLightE0 = document.querySelector('.trafficLight');
const trafficLightE1 = document.querySelector('#trafficLight_red');
const trafficLightE2 = document.querySelector('#trafficLight_yellow');
const trafficLightE3 = document.querySelector('#trafficLight_green');

function makeRed() {
    trafficLightE1.style.background = ('red');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLightE0.removeEventListener('click', makeRed);
    trafficLightE0.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightE1.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');
    trafficLightE0.removeEventListener('click', makeYellow);
    trafficLightE0.addEventListener('click', makeGreen);
}    
function makeGreen() {
    trafficLightE1.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('green');
    trafficLightE0.removeEventListener('click', makeGreen);
    trafficLightE0.addEventListener('click', makeRed);
}

trafficLightE0.addEventListener('click', makeRed); 