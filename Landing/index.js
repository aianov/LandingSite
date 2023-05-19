const ans1 = document.querySelector('.ans1');
const ans1t = document.querySelector('.ans-ans1')
ans1.addEventListener('click', () => ansA())

const ans2 = document.querySelector('.ans2');
const ans2t = document.querySelector('.ans-ans2')
ans2.addEventListener('click', () => ansB())

const ans3 = document.querySelector('.ans3');
const ans3t = document.querySelector('.ans-ans3')
ans3.addEventListener('click', () => ansC())

const ans4 = document.querySelector('.ans4');
const ans4t = document.querySelector('.ans-ans4')
ans4.addEventListener('click', () => ansD())

const ans5 = document.querySelector('.ans5');
const ans5t = document.querySelector('.ans-ans5')
ans5.addEventListener('click', () => ansE())

const ans6 = document.querySelector('.ans6');
const ans6t = document.querySelector('.ans-ans6')
ans6.addEventListener('click', () => ansF())

const ans7 = document.querySelector('.ans7');
const ans7t = document.querySelector('.ans-ans7')
ans7.addEventListener('click', () => ansG())

const ans8 = document.querySelector('.ans8');
const ans8t = document.querySelector('.ans-ans8')
ans8.addEventListener('click', () => ansH())

const ansA = () => {
    ans1t.classList.toggle('remove');
}

const ansB = () => {
    ans2t.classList.toggle('remove');
}

const ansC = () => {
    ans3t.classList.toggle('remove');
}

const ansD = () => {
    ans4t.classList.toggle('remove');
}

const ansE = () => {
    ans5t.classList.toggle('remove');
}

const ansF = () => {
    ans6t.classList.toggle('remove');
}

const ansG = () => {
    ans7t.classList.toggle('remove');
}

const ansH = () => {
    ans8t.classList.toggle('remove');
}

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    burgerMenu.addEventListener('click', function () {
        menu.classList.toggle('show');
        burgerMenu.classList.toggle('open')
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 660) {
            menu.classList.remove('show');
        }
    });
});
