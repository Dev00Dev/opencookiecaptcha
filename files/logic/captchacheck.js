<script>
    const CAPTCHA_PAGE_URL = "https://captchapage"; 
    const HOMEPAGE_URL = "https://homepage";       

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    function randomRedirect() {
        const chance = Math.floor(Math.random() * 15) + 1; 
        if (chance === 1) {
            window.location.href = HOMEPAGE_URL; 
        }
    }

    function checkCaptchaCookie() {
        const captchaValidated = getCookie('captchaValidated');
        if (!captchaValidated) {
            window.location.href = CAPTCHA_PAGE_URL;
        }
    }

    window.onload = function() {
        const captchaValidated = getCookie('captchaValidated');

        if (!captchaValidated) {
            checkCaptchaCookie();
        } else {
        
