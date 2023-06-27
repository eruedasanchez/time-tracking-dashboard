import data from './data.json' assert {type: 'json'};

let bgColors = [
    'hsl(15, 100%, 70%)',                 // (work)
    'hsl(195, 74%, 62%)',                // (play)
    'hsl(348, 100%, 68%)',               // (study)
    'hsl(145, 58%, 55%)',               // (exercise)
    'hsl(264, 64%, 52%)',               // (social)
    ' hsl(43, 84%, 65%)'                // (self care)
];


let dailyBtn = document.getElementById('daily');
let weeklyBtn = document.getElementById('weekly');
let monthlyBtn = document.getElementById('monthly');

let activitySection = document.querySelector('.activity-section');

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

drawElements(dailyArray);

dailyBtn.addEventListener('click', () => {
    drawElements(dailyArray);
});

weeklyBtn.addEventListener('click', () => {
    drawElements(weeklyArray);
});

monthlyBtn.addEventListener('click', () => {
    drawElements(monthlyArray);
});


function drawElements(array){
    activitySection.innerHTML = '';
    array.forEach((element, index) => {
        let title = data[index].title;
        let titleLowerCase = title.toLocaleLowerCase();

        if(titleLowerCase === 'self care'){
            titleLowerCase = 'self-care';
        }

        activitySection.innerHTML += `
            <div class="card">
                <div class="card__background" style="background-color: ${bgColors[index]};">
                    <img class="card__image" src="./assets/img/icon-${titleLowerCase}.svg" alt="${title}">
                </div>
                <div class="card__details">
                    <div class="card__activity">
                        <p class="card__title">${title}</p>
                        <img class="card__dots" src="./assets/img/icon-ellipsis.svg" alt="three dots">
                    </div>
                    <div class="card__interval">
                        <p class="card__hours">${element.current}hrs</p>
                        <p class="card__previous">Previous - ${element.previous}hrs</p>
                    </div>
                </div>
            </div>
        `
    });
}