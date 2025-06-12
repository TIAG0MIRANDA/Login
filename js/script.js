const input = document.getElementById('senha');
const toggle = document.getElementById('toggleSenha');

toggle.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggle.classList = isPassword ? 'fas fa-lock-open' : 'fas fa-lock';
});



function showReset() {
    document.getElementById("formWrapper").style.transform = "translateX(-300px)";
}

function showLogin() {
    document.getElementById("formWrapper").style.transform = "translateX(0)";
}
