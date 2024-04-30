const $btnSingIn = document.querySelector('.sign-in-btn'),
    $btnSingUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSingIn || e.target === $btnSingUp) {
        $signIn.classList.toggle('active')
        $signUp.classList.toggle('active')
    }
})