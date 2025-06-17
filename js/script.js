// Troca de formulários
showLogin();

function showLogin() {
    document.getElementById("login-form").style.transform = "translate(0, 0)";
    document.getElementById("reset-form").style.transform = "translate(450px, 0)";
    document.getElementById("register-form").style.transform = "translate(0, 450px)";
}

function showReset() {
    document.getElementById("login-form").style.transform = "translate(-450px, 0)";
    document.getElementById("reset-form").style.transform = "translate(0, 0)";
    document.getElementById("register-form").style.transform = "translate(-450px, 450px)";
}

function showRegister() {
    document.getElementById("login-form").style.transform = "translate(0, -450px)";
    document.getElementById("reset-form").style.transform = "translate(450px, -450px)";
    document.getElementById("register-form").style.transform = "translate(0, 0)";
}


// Mostrar/ocultar senha
const input = document.getElementById('senha');
const toggle = document.getElementById('toggleSenha');

toggle.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggle.className = isPassword ? 'fas fa-lock-open' : 'fas fa-lock';
});