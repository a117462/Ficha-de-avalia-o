const paginaAtual = window.location.pathname;

if (paginaAtual.endsWith("index.html") || paginaAtual.endsWith("/")) {
    alert("Bem-vindo à Padaria Pão Quente! Pão fresco todos os dias desde 1976.");
}

const formularioEncomenda = document.getElementById("form-encomenda");
const avisoEncomenda = document.getElementById("aviso-encomenda");

if (formularioEncomenda) {
    formularioEncomenda.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nomeCliente = document.getElementById("nome-cliente").value;
        const pedidoCliente = document.getElementById("pedido-cliente").value;

        avisoEncomenda.textContent = "Obrigado, " + nomeCliente + "! A sua encomenda (" + pedidoCliente + ") foi registada com sucesso.";
        avisoEncomenda.style.display = "block";

        formularioEncomenda.reset();
    });
}
