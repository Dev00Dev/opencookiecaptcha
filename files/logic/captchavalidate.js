let attemptsLeft = 4;
const captchaImages = [
    { src: "https://i.goopics.net/tkf47v.png", text: "7" },
    { src: "https://i.goopics.net/j8hotg.png", text: "red" },
    { src: "https://i.goopics.net/6fp1lm.png", text: "1124" },
    { src: "https://i.goopics.net/bypqtk.png", text: "15" },
    { src: "https://i.goopics.net/ye8swe.png", text: "cat" },
    { src: "https://i.goopics.net/bqi943.png", text: "orange" }
];
const randomCaptcha = captchaImages[Math.floor(Math.random() * captchaImages.length)];

const captchaImage = document.getElementById('captcha-image');
const captchaInput = document.getElementById('captcha-input');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit-button');

captchaImage.src = randomCaptcha.src;

// Gestion des cookies
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

if (getCookie('captchaValidated') === 'true') {
    window.location.href = "https://rodrigue-app.ct.ws/"; 
}

submitButton.addEventListener('click', () => {
    const userInput = captchaInput.value;

    if (userInput === randomCaptcha.text) {
        setCookie('captchaValidated', 'true', 3); 
        window.location.href = "https://rodrigue-app.ct.ws/"; 
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            errorMessage.textContent = `Please try again. Remaining attempts : ${attemptsLeft}`;
        } else {
            submitButton.disabled = true;
            captchaInput.disabled = true;
            errorMessage.textContent = "Too many failed attempts. Please try again.";
        }
    }
});
