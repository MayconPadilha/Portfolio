document.addEventListener("DOMContentLoaded", () => {
    const projetos = [
        {
            "nome": "IFRS",
            "imagem": "./assets/ifrs.png",
            "icon": "fa-solid fa-book-open",
            "type": "Estudos",
            "link": "https://www.linkedin.com/posts/maycon-padilha_desenvolvimento2-ifrs-angular-activity-7089245838803181568-IZ2S?utm_source=share&utm_medium=member_desktop"
        },
        {
            "nome": "InfoPlus",
            "imagem": "./assets/infoplus.png",
            "icon": "fa-solid fa-briefcase",
            "type": "Freelance",
            "link": "https://infoplus-nu.vercel.app/"
        },
        {
            "nome": "Tetra Pak",
            "imagem": "./assets/tetra pak.png",
            "icon": "fa-solid fa-briefcase",
            "type": "Freelance",
            "link": "https://xmlbrasilprocessor.onrender.com/"
        },    
        {
            "nome": "Lanterna Luminosa",
            "imagem": "./assets/lanterna-luminosa.png",
            "icon": "fa-solid fa-hand-holding-heart",
            "type": "Voluntário",
            "link": "https://lanterna-luminosa.vercel.app/"
        },
        {
            "nome": "SOS Rio Grande do Sul",
            "imagem": "./assets/sos-rs.png",
            "icon": "fa-solid fa-hand-holding-heart",
            "type": "Voluntário",
            "link": "https://sos-rs.com/"
        },
        {
            "nome": "Fieldtask Pro ( No-Code - Flutter Flow)",
            "imagem": "./assets/fieldtaskpro.png",
            "icon": "fa-solid fa-briefcase",
            "type": "Freelance",
            "link": "https://app.flutterflow.io/project/field-task-p-r-o-qq8b94"
        },
        {
            "nome": "Spotify com React",
            "imagem": "./assets/spotify-react.png",
            "icon": "fa-solid fa-book-open",
            "type": "Estudos",
            "link": "https://spotify-react-henna.vercel.app/"
        },
        {
            "nome": "Buscante com API do Google Books",
            "imagem": "./assets/buscante.png",
            "icon": "fa-solid fa-book-open",
            "type": "Estudos",
            "link": "https://2685-angular-rxjs-projeto-base.vercel.app/lista-livros"
        }
    ]

    function gerarLista(itens, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        itens.forEach(item => {
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
            card.appendChild(a);
    
            container.appendChild(card);
        });
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
        gerarLista(filteredProjects, 'projetos-list');
    }

    gerarLista(projetos, 'projetos-list');
})