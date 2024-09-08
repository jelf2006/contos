// Seleciona o elemento <section> no HTML onde os mitos serão adicionados
const section = document.querySelector('section');

// Seleciona o input e o botão de pesquisa
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Função para exibir mitos filtrados
function exibirMitos(mitos) {
    // Limpa os mitos já exibidos
    section.innerHTML = '';

    // Se nenhum mito for encontrado, exibe uma mensagem de "nenhum resultado"
    if (mitos.length === 0) {
        const mensagem = document.createElement('p');
        mensagem.textContent = 'No myths found.';
        section.appendChild(mensagem);
        return;
    }

    // Percorre o array de mitos e cria os elementos HTML para cada mito
    mitos.forEach(mito => {
        // Cria um novo div com a classe div1
        const div = document.createElement('div');
        div.classList.add('div1');
        
        // Adiciona o título do mito
        const h2 = document.createElement('h2');
        h2.textContent = mito.titulo;
        div.appendChild(h2);
        
        // Adiciona o resumo do mito
        const p = document.createElement('p');
        p.textContent = mito.resumo;
        div.appendChild(p);
        
        // Adiciona o div à seção principal
        section.appendChild(div);
    });
}

// Função para filtrar os mitos com base no input de pesquisa
function pesquisarMitos() {
    const termoDeBusca = searchInput.value.toLowerCase();

    // Filtra os mitos cujo título contenha o termo de busca
    const mitosFiltrados = mitosGregos.filter(mito => {
        return mito.titulo.toLowerCase().includes(termoDeBusca);
    });

    // Exibe os mitos filtrados
    exibirMitos(mitosFiltrados);
}

// Adiciona um event listener ao botão de pesquisa
searchButton.addEventListener('click', pesquisarMitos);

// Também permite que a pesquisa seja ativada ao pressionar "Enter" no campo de input
searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        pesquisarMitos();
    }
});
    