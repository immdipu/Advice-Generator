const btn = document.querySelector('.button');
const adviceContainer = document.querySelector('.advice');
const adviceNumber = document.querySelector('.span');

const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json()
    let advice = data.slip.advice;
    let adviceId = data.slip.id;
    adviceContainer.textContent = advice;
    adviceNumber.textContent = '#' + adviceId;
}
btn.addEventListener('click', function () {
    fetchAdvice()
    timeout();
    btn.classList.add('active');
})
fetchAdvice();

//FUNCTION TO REMOVE CLICK BUTTON EFFECT

function btneffect() {
    btn.classList.remove('active');
}

function timeout() {
    const timeout = setTimeout(btneffect, 300)
}