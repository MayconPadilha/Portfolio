let tecnologias = [];

fetch("https://mayconpadilha.github.io/Portfolio/data/tecnologias.json").then((response) => {
    response.json().then((dados) => {
        tecnologias = dados.tecnologias;
        gerarListaProjetos(tecnologias);
    })
})

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