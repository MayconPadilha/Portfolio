document.addEventListener('DOMContentLoaded', async () => {
    await carregarProjetos();
});

let projetos = [];

async function carregarProjetos() {
    try {
        const response = await fetch("https://mayconpadilha.github.io/Portfolio/data/projetos.json");
        const dados = await response.json();
        projetos = dados.projetos;
        gerarListaProjetos(projetos);
    } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
    }
}

function gerarListaProjetos(itens) {
    // const container = document.getElementById('projetos-list');
    // container.innerHTML = '';

    // const slideContainer = document.querySelector('swiper-container');
    slideContainer.innerHTML = '';

    // const swiperWrapper = document.createElement('swiper-wrapper');
    // swiperWrapper.ATTRIBUTE_NODE.gridRows = '2';

    itens.forEach(item => {

        const swiperSlide = document.createElement('swiper-slide');

        const card = document.createElement('div');
        card.classList.add('card');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = item.imagem;
        img.alt = `imagem ${item.nome}`;

        imgContainer.appendChild(img);

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');

        const h3 = document.createElement('h3');
        h3.textContent = item.nome;

        const iconIcon = document.createElement('i');
        iconIcon.className = item.icon;

        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = item.type;

        iconIcon.appendChild(tooltip);

        titleContainer.appendChild(h3);
        titleContainer.appendChild(iconIcon);

        const a = document.createElement('a');
        a.href = item.link;
        a.setAttribute('target', '_blank');
        a.textContent = 'Ver Projeto';

        card.appendChild(imgContainer);
        card.appendChild(titleContainer);
        // card.appendChild(a);

        // swiperSlide.appendChild(card);
        swiperSlide.appendChild(card);
        // swiperWrapper.appendChild(swiperSlide);
        slideContainer.appendChild(swiperSlide);
    });

    // slideContainer.appendChild(swiperWrapper);
}

document.querySelectorAll(".filtros i").forEach(filter => {
    filter.addEventListener("click", () => {
        const filterType = filter.getAttribute("data-filter");
        filterProjects(filterType);
    });
});

function filterProjects(filtro) {
    const slideContainer = document.querySelector('swiper-container');
    let filteredProjects;
    if (filtro === "all") {
        filteredProjects = projetos;
    } else {
        filteredProjects = projetos.filter(project => project.type === filtro);
        slideContainer.setAttribute('grid-rows', '1'); 
        // slideContainer.ATTRIBUTE_NODE.gridRows = '1';
    }
    gerarListaProjetos(filteredProjects);
}