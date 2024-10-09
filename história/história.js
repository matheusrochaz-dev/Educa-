história// Seleciona os elementos interativos
let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

// Expande a barra de busca ao clicar na lupa
lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar');
});

// Fecha a barra de busca ao clicar no botão fechar e reseta a pesquisa
btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar');
    resetSearch();  // Reseta a pesquisa ao clicar no botão fechar
});

// Função para realizar a pesquisa
function Search() {
    const searchTerm = document.getElementById("pesquisa").value.toLowerCase();  // Obtém o termo pesquisado e converte para minúsculas
    const items = document.querySelectorAll(".math01 .item");  // Seleciona todos os blocos de conteúdo

    items.forEach(item => {
        const itemName = item.getAttribute("data-name");  // Obtém o nome do bloco a partir do atributo data-name
        if (itemName.includes(searchTerm)) {
            item.classList.remove("hidden");  // Exibe o bloco correspondente
        } else {
            item.classList.add("hidden");  // Oculta os blocos que não correspondem à pesquisa
        }
    });
}

// Função para detectar o pressionamento da tecla Enter
function handleEnter(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Evita o comportamento padrão do Enter
        Search();  // Chama a função Search() ao pressionar Enter
    }
}

// Função para resetar a pesquisa e mostrar todos os itens
function resetSearch() {
    document.getElementById("pesquisa").value = "";  // Limpa o campo de pesquisa
    const items = document.querySelectorAll(".math01 .item");  // Seleciona todos os itens
    items.forEach(item => {
        item.classList.remove("hidden");  // Remove a classe 'hidden' para todos os itens
    });
}
