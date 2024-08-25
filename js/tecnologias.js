document.addEventListener('DOMContentLoaded', async () => {
    await carregarTecnologias();
});

async function carregarTecnologias() {
    try {
        const response = await fetch("https://mayconpadilha.github.io/Portfolio/data/tecnologias.json");
        const dados = await response.json();
        gerarListaTecnologias(dados.tecnologias);
    } catch (error) {
        console.error('Erro ao carregar tecnologias:', error);
    }
}

function gerarListaTecnologias(itens) {
    const container = document.getElementById('tecnologias-list');
    itens.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.innerHTML = `<img height="60px" width="60px" alt="Icone ${item.nome}" src="${item.icone}"/>`;
        li.appendChild(a);
        container.appendChild(li);
    });
}