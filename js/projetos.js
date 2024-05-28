const projetos = [
    {
        "nome": "IFRS",
        "icone": "../assets/ifrs.png",
        "link": "#"
    },
    {
        "nome": "InfoPlus",
        "icone": "../assets/infoplus.png",
        "link": "https://infoplus-nu.vercel.app/"
    },
    {
        "nome": "Tetra Pak",
        "icone": "../assets/tetra pak.png",
        "link": "https://xmlbrasilprocessor.onrender.com/"
    },
    {
        "nome": "Lanterna Luminosa (Trabalho Voluntário)",
        "icone": "../assets/lanterna-luminosa.png",
        "link": "https://lanterna-luminosa.vercel.app/"
    },
    {
        "nome": "SOS Rio Grande do Sul (Trabalho Voluntário)",
        "icone": "../assets/sos-rs.png",
        "link": "https://lanterna-luminosa.vercel.app/"
    },
    {
        "nome": "Fieldtask Pro ( No-Code - Flutter Flow)",
        "icone": "../assets/fieldtaskpro.png",
        "link": "https://lanterna-luminosa.vercel.app/"
    },
    {
        "nome": "Spotify com React",
        "icone": "../assets/spotify-react.png",
        "link": "https://spotify-react-henna.vercel.app/"
    },
    {
        "nome": "Buscante utilizando API do Google Books",
        "icone": "../assets/buscante.png",
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

        const h3 = document.createElement('h3');
        h3.textContent = item.nome;

        const a = document.createElement('a');
        a.href = item.link;
        a.textContent = 'Ver Projeto';

        card.appendChild(imgContainer);
        card.appendChild(h3);
        card.appendChild(a);

        container.appendChild(card);
    });
}

gerarLista(projetos, 'projetos-list');