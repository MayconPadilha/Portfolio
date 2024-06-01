const projetos = [
    {
        "nome": "IFRS",
        "icone": "./assets/ifrs.png",
        "type": "fa-solid fa-book-open",
        "descricao": "Estudos",
        "link": "https://www.linkedin.com/posts/maycon-padilha_desenvolvimento2-ifrs-angular-activity-7089245838803181568-IZ2S?utm_source=share&utm_medium=member_desktop"
    },
    {
        "nome": "InfoPlus",
        "icone": "./assets/infoplus.png",
        "type": "fa-solid fa-briefcase",
        "descricao": "Freelance",
        "link": "https://infoplus-nu.vercel.app/"
    },
    {
        "nome": "Tetra Pak",
        "icone": "./assets/tetra pak.png",
        "type": "fa-solid fa-briefcase",
        "descricao": "Freelance",
        "link": "https://xmlbrasilprocessor.onrender.com/"
    },    
    {
        "nome": "Lanterna Luminosa",
        "icone": "./assets/lanterna-luminosa.png",
        "type": "fa-solid fa-hand-holding-heart",
        "descricao": "Voluntário",
        "link": "https://lanterna-luminosa.vercel.app/"
    },
    {
        "nome": "SOS Rio Grande do Sul",
        "icone": "./assets/sos-rs.png",
        "type": "fa-solid fa-hand-holding-heart",
        "descricao": "Voluntário",
        "link": "https://lanterna-luminosa.vercel.app/"
    },
    {
        "nome": "Fieldtask Pro ( No-Code - Flutter Flow)",
        "icone": "./assets/fieldtaskpro.png",
        "type": "fa-solid fa-briefcase",
        "descricao": "Freelance",
        "link": "https://lanterna-luminosa.vercel.app/"
    },
    {
        "nome": "Spotify com React",
        "icone": "./assets/spotify-react.png",
        "type": "fa-solid fa-book-open",
        "descricao": "Estudos",
        "link": "https://spotify-react-henna.vercel.app/"
    },
    {
        "nome": "Buscante com API do Google Books",
        "icone": "./assets/buscante.png",
        "type": "fa-solid fa-book-open",
        "descricao": "Estudos",
        "link": "https://2685-angular-rxjs-projeto-base.vercel.app/lista-livros"
    }
]

function gerarLista(itens, containerId) {
    const container = document.getElementById(containerId);
    itens.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = item.icone;
        img.alt = `Icone ${item.nome}`;

        imgContainer.appendChild(img);

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');

        const h3 = document.createElement('h3');
        h3.textContent = item.nome;

        const typeIcon = document.createElement('i');
        typeIcon.className = item.type;

        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = item.descricao;

        typeIcon.appendChild(tooltip);

        titleContainer.appendChild(h3);
        titleContainer.appendChild(typeIcon);

        const a = document.createElement('a');
        a.href = item.link;
        a.setAttribute('target', '_blank');
        a.textContent = 'Ver Projeto';
        
        card.appendChild(imgContainer);
        card.appendChild(titleContainer);
        card.appendChild(a);

        container.appendChild(card);
    });
}

gerarLista(projetos, 'projetos-list');