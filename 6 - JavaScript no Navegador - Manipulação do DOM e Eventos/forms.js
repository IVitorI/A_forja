// 1. LEITURA (Encontrar os elementos)
const titulo = document.getElementById("mensagem");
const form = document.getElementById("form-login");
const email = document.getElementById("email");

// 2. A AÇÃO (A função de callback)
function fazerLogin(event) {
  // 4a. Impedir o recarregamento
  event.preventDefault(); 

  // 4b. Ler o valor DE DENTRO do input
  const textoDigitado = email.value;

  // 4c. Escrever o resultado no H1
  titulo.textContent = "Login feito com o email: " + textoDigitado;
}

// 3. A ESCUTA (Ouvir o SUBMIT do FORM, passar a REFERÊNCIA da função)
form.addEventListener("submit", fazerLogin);