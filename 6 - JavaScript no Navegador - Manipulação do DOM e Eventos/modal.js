const btnAbrir = document.getElementById("btn-abrir");
const btnFechar = document.getElementById("btn-fechar");
const meuModal = document.getElementById("meu-modal")

function abrirModal(){
    meuModal.classList.add("modal-visivel")
}

function fecharModal(){
    meuModal.classList.remove("modal-visivel")
}

btnAbrir.addEventListener("click",abrirModal);
btnFechar.addEventListener("click",fecharModal);