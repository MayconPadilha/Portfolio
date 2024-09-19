document.addEventListener('DOMContentLoaded', async () => {
    await carregarProjetos();
});

let projetos = [];
let swiperInstance;

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
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';

    itens.forEach(item => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const card = document.createElement('div');
        card.classList.add('card');

        const a = document.createElement('a');
        a.href = item.link;
        a.setAttribute('target', '_blank');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = item.imagem;
        img.alt = `imagem ${item.nome}`;

        imgContainer.appendChild(img);
        a.appendChild(imgContainer);

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

        card.appendChild(a);
        card.appendChild(titleContainer);

        swiperSlide.appendChild(card);
        swiperWrapper.appendChild(swiperSlide);
    });

    if (swiperInstance) {
        swiperInstance.destroy(true, true);
    }

    swiperInstance = new Swiper(".mySwiper", {
        slidesPerView: 3,
        grid: {
            rows: 1,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    if (swiperWrapper.children.length <= 3) { 
        swiperInstance.autoplay.stop();
    } 

    swiperInstance.slideTo(0);
}

document.querySelectorAll(".filtros i").forEach(filter => {
    filter.addEventListener("click", () => {
        const filterType = filter.getAttribute("data-filter");
        filterProjects(filterType);
    });
});

function filterProjects(filtro) {
    let filteredProjects;
    if (filtro === "all") {
        filteredProjects = projetos;
    } else {
        filteredProjects = projetos.filter(project => project.type === filtro);
    }
    gerarListaProjetos(filteredProjects);
}
