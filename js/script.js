// Troca de formulários
function showReset() {
    document.getElementById("formWrapper").style.transform = "translateX(-400px)";
}

function showLogin() {
    document.getElementById("formWrapper").style.transform = "translateX(0)";
}

// Mostrar/ocultar senha
const input = document.getElementById('senha');
const toggle = document.getElementById('toggleSenha');

toggle.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggle.className = isPassword ? 'fas fa-lock-open' : 'fas fa-lock';
});