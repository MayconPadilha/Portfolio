fetch("../tecnologias.json").then((response) => {
    response.json().then((dados) => {
        gerarListaTecnlogias(dados.tecnologias);
    })
})

function gerarListaTecnlogias(itens) {
    const container = document.getElementById('tecnologias-list');
    container.innerHTML = '';
    itens.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.setAttribute('target', '_blank');
        a.innerHTML = `<img height="60px" width="60px" alt="Icone ${item.nome}" src="${item.icone}"/>`;
        li.appendChild(a);
        container.appendChild(li);
    });
}