const titulo = document.getElementById("mensagem");
const oElementoQueVamosOuvir = document.getElementById("btn-mudar");

function oQueAconteceQuandoClicar() {
    titulo.innerText = "Botão clicado com sucesso!"
}

oElementoQueVamosOuvir.addEventListener("click", oQueAconteceQuandoClicar);