const section = document.getElementById('mythSection');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const paginationControls = document.getElementById('paginationControls');

const mitosPorPagina = 15;
let paginaAtual = 1;
let mitosFiltrados = [];

function exibirMitos(mitos, pagina) {
    section.innerHTML = '';

    // Calcula os índices de início e fim para a página atual
    const inicio = (pagina - 1) * mitosPorPagina;
    const fim = Math.min(inicio + mitosPorPagina, mitos.length);

    // Limita os mitos à página atual
    const mitosParaExibir = mitos.slice(inicio, fim);

    if (mitosParaExibir.length === 0) {
        const mensagem = document.createElement('p');
        mensagem.textContent = 'No myths found.';
        section.appendChild(mensagem);
        return;
    }

    mitosParaExibir.forEach(mito => {
        const div = document.createElement('div');
        div.classList.add('div1');

        const h2 = document.createElement('h2');
        h2.textContent = mito.titulo;
        div.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = mito.resumo;
        div.appendChild(p);

        section.appendChild(div);
    });
}

function criarPaginas(numPaginas) {
    paginationControls.innerHTML = '';

    for (let i = 1; i <= numPaginas; i++) {
        const botao = document.createElement('button');
        botao.textContent = i;
        botao.addEventListener('click', () => {
            paginaAtual = i;
            exibirMitos(mitosFiltrados, paginaAtual);
            atualizarPaginas();
        });
        if (i === paginaAtual) {
            botao.classList.add('active');
        }
        paginationControls.appendChild(botao);
    }
}

function pesquisarMitos() {
    const termoDeBusca = searchInput.value.toLowerCase();
    mitosFiltrados = mitosGregos.filter(mito => mito.titulo.toLowerCase().includes(termoDeBusca));

    paginaAtual = 1; // Resetar a página para a primeira página ao realizar uma nova pesquisa
    exibirMitos(mitosFiltrados, paginaAtual);
    criarPaginas(Math.ceil(mitosFiltrados.length / mitosPorPagina));
}

function atualizarPaginas() {
    const botoes = paginationControls.querySelectorAll('button');
    botoes.forEach(botao => botao.classList.remove('active'));
    const botaoAtivo = paginationControls.querySelector(`button:nth-child(${paginaAtual})`);
    if (botaoAtivo) {
        botaoAtivo.classList.add('active');
    }
}

searchButton.addEventListener('click', pesquisarMitos);

searchInput.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        pesquisarMitos();
    }
});
